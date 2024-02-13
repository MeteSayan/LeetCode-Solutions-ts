import { TreeNode } from '../utils/TreeNode';

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
	if (!root) return false;

	if (!root.left && !root.right) {
		return targetSum - root.val === 0;
	}

	return (
		hasPathSum(root.left, targetSum - root.val) ||
		hasPathSum(root.right, targetSum - root.val)
	);
}
