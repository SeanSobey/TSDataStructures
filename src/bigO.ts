import { performance } from 'perf_hooks';

type BigOSetupFunction<T> = (interval: number) => T;

type BigOExecFunction<T> = (data: T, interval: number) => void;

interface BigOOptions {
	readonly startInterval?: number;
	readonly endInterval?: number;
	readonly intervalStep?: number;
	// To allow for compiler runtime optimizations
	readonly runCount?: number;
}

interface BigOResult {
	readonly label: string;
	readonly timings: ReadonlyArray<BigOTiming>;
}

interface BigOTiming {
	readonly interval: number;
	readonly duration: number;
}

const defaults = {
	startInterval: 20,
	endInterval: 20,
	intervalStep: 20,
	runCount: 20,
};

export function bigO<T>(label: string, setupFn: BigOSetupFunction<T>, execFn: BigOExecFunction<T>, options?: BigOOptions): BigOResult {

	const startInterval = options ? options.startInterval || defaults.startInterval : defaults.startInterval;
	const endInterval = options ? options.endInterval || defaults.endInterval : defaults.intervalStep;
	const intervalStep = options ? options.intervalStep || defaults.intervalStep : defaults.endInterval;
	const runCount = options ? options.runCount || defaults.runCount : defaults.runCount;

	const timings: Array<BigOTiming> = [];
	for (let interval = startInterval; interval < endInterval; interval += intervalStep) {

		const durations: Array<number> = [];
		for (let count = 1; count < runCount; count++) {

			const data = setupFn(interval);
			const start = performance.now();
			execFn(data, interval);
			const end = performance.now();
			durations.push(end - start);
		}
		// Median not average to exclude spikes
		const duration = middle(durations.sort((a, b) => a - b));
		timings.push({ duration, interval });
	}

	return { label, timings };
}

function middle(values: ReadonlyArray<number>): number {

	const len = values.length;
	const half = Math.floor(len / 2);
	if (len % 2) {
		return (values[half - 1] + values[half]) / 2.0;
	}
	return values[half];
}

interface BigOScenario {
	readonly title: string;
	readonly results: ReadonlyArray<BigOResult>;
}

export function writeReport(pageTitle: string, scenarios: ReadonlyArray<BigOScenario>): string {

	const chartColors = [
		'rgb(255, 99, 132)', //red
		'rgb(255, 159, 64)', //orange
		'rgb(255, 205, 86)', //yellow
		'rgb(75, 192, 192)', //green
		'rgb(54, 162, 235)', //blue
		'rgb(153, 102, 255)', //purple
		'rgb(201, 203, 207)', //grey
	];
	const cards = scenarios.map((scenario, scenarioIndex) => {
		const dataSets = scenario.results.map((result, resultIndex) => {
			const data: ReadonlyArray<{ readonly x: number; readonly y: number; }> = result.timings.map((timing) => ({
				x: timing.interval,
				y: timing.duration
			}));
			return {
				label: result.label,
				fill: false,
				backgroundColor: chartColors[resultIndex],
				borderColor: chartColors[resultIndex],
				data
			};
		});
		return `
				<div class="col-12">
					<div class="card">
						<div class="card-body">
							<h4 class="card-title">${scenario.title}</h4>
							<div class="container-canvas">
								<canvas id="chart-${scenarioIndex}"></canvas>
							</div>
						</div>
					</div>
					<script>
						(function () {
							const config = {
								type: 'line',
								data: {
									datasets: ${JSON.stringify(dataSets, undefined, 2)}
								},
								options: {
									responsive: true,
									maintainAspectRatio: false,
									tooltips: {
										mode: 'index',
										intersect: false,
									},
									hover: {
										mode: 'nearest',
										intersect: true
									},
									scales: {
										yAxes: [{
											display: true,
											scaleLabel: {
												display: true,
												labelString: 'Duration (ms)'
											}
										}],
										xAxes: [{
											type: 'linear',
											display: true,
											scaleLabel: {
												display: true,
												labelString: 'Elements'
											}
										}]
									}
								}
							};
							new Chart(document.getElementById('chart-${scenarioIndex}'), config);
						}());
					</script>
				</div>
			`;
	});
	const html = `<!DOCTYPE html>
	<html lang="">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title>${pageTitle}</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

		<link rel="icon" href="favicon.ico" />

		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.css" crossorigin="anonymous">

		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.js" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.js" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.0/Chart.js" crossorigin="anonymous"></script>
	</head>
	<body>
		<!--[if lt IE 8]>
			<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

		<style>
			.container-canvas {
				margin-right: auto;
				margin-left: auto;
				position: relative;
				height: 400px;
				min-height: 400px;
			}
			.container-canvas canvas {
				min-height: 400px;
			}
			.card {
				margin-top: 1em;
				margin-bottom: 1em;
			}
		</style>

		<nav class="navbar navbar-dark bg-dark">
			<a class="navbar-brand" href="#">${pageTitle}</a>
		</nav>

		<div class="container">
			<div class="row">${cards.join('\n')}</div>
		</div>
	</body>
	</html>`;
	return html;
}
