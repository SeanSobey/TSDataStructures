import { LinkedList, DoublyLinkedList, ArrayList } from './ADT/';
import { bigO, writeReport } from './bigO';
import { writeFile } from 'fs';
import { promisify } from 'util';
import { join } from 'path';

const options = {
	startInterval: 0,
	endInterval: 10000,
	intervalStep: 200,
	runCount: 5
};
const scenarioSets = [
	{
		title: 'IList&lt;number&gt;',
		scenarios: [
			{
				title: 'Count',
				results: [
					bigO('Linked List', (interval) => {
						const list = new LinkedList();
						for (let count = 0; count < interval; count++) {
							list.append(Math.random());
						}
						return { list };
					}, ({ list }) => {
						list.count();
					}, options),
					bigO('Doubly Linked List', (interval) => {
						const list = new DoublyLinkedList();
						for (let count = 0; count < interval; count++) {
							list.append(Math.random());
						}
						return { list };
					}, ({ list }) => {
						list.count();
					}, options),
					bigO('Array List', (interval) => {
						const list = new ArrayList();
						for (let count = 0; count < interval; count++) {
							list.append(Math.random());
						}
						return { list };
					}, ({ list }) => {
						list.count();
					}, options)
				]
			},
			{
				title: 'Append',
				results: [
					bigO('Linked List', () => {
						const list = new LinkedList();
						return { list };
					}, ({ list }, interval) => {
						for (let count = 0; count < interval; count++) {
							list.append(Math.random());
						}
					}, options),
					bigO('Doubly Linked List', () => {
						const list = new DoublyLinkedList();
						return { list };
					}, ({ list }, interval) => {
						for (let count = 0; count < interval; count++) {
							list.append(Math.random());
						}
					}, options),
					bigO('Array List', () => {
						const list = new ArrayList();
						return { list };
					}, ({ list }, interval) => {
						for (let count = 0; count < interval; count++) {
							list.append(Math.random());
						}
					}, options)
				]
			},
			{
				title: 'Prepend',
				results: [
					bigO('Linked List', () => {
						const list = new LinkedList();
						return { list };
					}, ({ list }, interval) => {
						for (let count = 0; count < interval; count++) {
							list.prepend(Math.random());
						}
					}, options),
					bigO('DoublyLinked List', () => {
						const list = new DoublyLinkedList();
						return { list };
					}, ({ list }, interval) => {
						for (let count = 0; count < interval; count++) {
							list.prepend(Math.random());
						}
					}, options),
					bigO('Array List', () => {
						const list = new ArrayList();
						return { list };
					}, ({ list }, interval) => {
						for (let count = 0; count < interval; count++) {
							list.prepend(Math.random());
						}
					}, options)
				]
			},
		]
	}
];

const reportPath = join('.', 'reports', 'bigO.html');
const html = writeReport('BigO', scenarioSets);
const writeFileAsync = promisify(writeFile);
writeFileAsync(reportPath, html, 'utf-8')
	.then(() => console.log('done'))
	.catch((error) => console.error(error));
