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
 /**
 * We should use recursive function for this problem. 
 *
 *   Time Complexity: O(m + n)
 *   Space Complexity: O(m + n)
 * 
 *   Input: 1->2->4, 1->3->4
 *   Output: 1->1->2->3->4->4
 */
 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null) {
        return list2; //! If first list empty
    } 
    else if (list2 === null) { //! If second list empty
        return list1;
    }
    else if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2); //! If list 1 current value lower than list 2 current value
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next); //! If list 2 current value lower than list 1 current value
        return list2;
    }
};