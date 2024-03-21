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

function reverseList(head: ListNode | null): ListNode | null {
	if (!head) return null;

	let prev: ListNode | null = null;
	let next: ListNode | null = head.next;

	while (head) {
		next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}

	return prev;
}
