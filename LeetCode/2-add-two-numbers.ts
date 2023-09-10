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

import { ListNode } from './utils/ListNode';

const addTwoNumbers = (
	l1: ListNode | null,
	l2: ListNode | null,
	carry: number = 0
): ListNode | null => {
	// Control for optimization.
	// Is l1 and l2 not defined? And is carry bigger than 0
	if (!l1 && !l2) return carry > 0 ? new ListNode(carry) : null;
	//Is l1 not defined? And is carry equal 0
	if (!l1 && carry === 0) return l2;
	//Is l2 not defined? And is carry equal 0
	if (!l2 && carry === 0) return l1;

	const l1Val = l1?.val || 0;
	const l2Val = l2?.val || 0;
	const sum = l1Val + l2Val + carry;

	// Is sum bigger than 9. If so it will be carry 1
	const rem = sum % 10;
	carry = sum > 9 ? 1 : 0;

	// Recursion
	return new ListNode(rem, addTwoNumbers(l1!.next, l2!.next, carry));
};
