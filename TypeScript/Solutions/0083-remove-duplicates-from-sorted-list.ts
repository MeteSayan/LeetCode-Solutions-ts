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

function deleteDuplicates(head: ListNode | null): ListNode | null {
	let now = head;
	while (now) {
		if (now.next && now.next.val === now.val) {
			now.next = now.next.next;
		} else {
			now = now.next;
		}
	}
	return head;
}
