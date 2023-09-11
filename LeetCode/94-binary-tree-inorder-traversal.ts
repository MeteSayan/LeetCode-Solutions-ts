/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from './utils/TreeNode';

function inorderTraversal(root: TreeNode | null): number[] {
	const result: number[] = [];
	function traverse(root: TreeNode | null): number[] {
		if (root) {
			traverse(root.left);
			result.push(root.val);
			traverse(root.right);
		}
		return result;
	}
	return traverse(root);
}
