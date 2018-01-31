import { LinkedList, ArrayList } from './ADT/';
import { bigO, writeReport } from './bigO';
import { writeFile } from 'fs';
import { promisify } from 'util';

const options = {
	startInterval: 0,
	endInterval: 1000,
	intervalStep: 100,
	runCount: 5
};
const scenarios = [
	{
		title: 'Count',
		results: [
			bigO('Linked List', (interval) => {
				const list = new LinkedList();
				for (let count = 0; count < interval; count++) {
					list.append(Math.random());
				}
				return { list };
			}, ({ list }, interval) => {
				list.count();
				}, options),
			bigO('Array List', (interval) => {
				const list = new ArrayList();
				for (let count = 0; count < interval; count++) {
					list.append(Math.random());
				}
				return { list };
			}, ({ list }, interval) => {
				list.count();
			}, options)
		]
	},
	{
		title: 'Append',
		results: [
			bigO('Linked List', (interval) => {
				const list = new LinkedList();
				return { list };
			}, ({ list }, interval) => {
				for (let count = 0; count < interval; count++) {
					list.append(Math.random());
				}
			}, options),
			bigO('Array List', (interval) => {
				const list = new ArrayList();
				return { list };
			}, ({ list }, interval) => {
				for (let count = 0; count < interval; count++) {
					list.append(Math.random());
				}
			}, options)
		]
	},
];

const reportPath = 'C:\\Users\\seans\\Documents\\GitHub\\SeanSobey\\TSDataStructures\\reports\\bigO.html';
const html = writeReport('BigO', scenarios);
const writeFileAsync = promisify(writeFile);
writeFileAsync(reportPath, html, 'utf-8')
	.then(() => console.log('done'))
	.catch((error) => console.error(error));
