import { TreeNode } from '../utils/TreeNode';

function checkTree(root: TreeNode | null): boolean {
	return root?.val === (root?.left?.val ?? 0) + (root?.right?.val ?? 0);
}
