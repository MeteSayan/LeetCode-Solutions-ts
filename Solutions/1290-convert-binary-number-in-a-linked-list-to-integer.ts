/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from '../utils/ListNode';

function getDecimalValue(head: ListNode | null): number {
	let result: string = '';

	while (head) {
		result += head.val;
		head = head.next;
	}

	return parseInt(result, 2);
}
