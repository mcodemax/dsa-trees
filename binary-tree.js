/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


//note: guide: when keeping track of items that get summed use algos like helpers in minDepth/maxSum/maxDepth
//when keeping comparing indiv nodes to all other nodes use algos like BFS/DFS 

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root) return 0;
    
    function getDepth(node){	
      if(!node.left && !node.right) return 1;//if node is dead end
      
      if(!node.left){
      	//gotta go down another level; add 1
        return getDepth(node.right) + 1;
      }
      
      if(!node.right){
      	//gotta go down another level; add 1
        return getDepth(node.left) + 1;
      }
      
      return Math.min(getDepth(node.left), getDepth(node.right)) + 1
    }

    return getDepth(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) return 0;
    
    function getDepth(node){	
      if(!node.left && !node.right) return 1;//if node is dead end
      
      if(!node.left){
      	//gotta go down another level; add 1
        return getDepth(node.right) + 1;
      }
      
      if(!node.right){
      	//gotta go down another level; add 1
        return getDepth(node.left) + 1;
      }
      
      return Math.max(getDepth(node.left), getDepth(node.right)) + 1
    }

    return getDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
		let totalSum = 0;
    
    
    function helper(node){
      if(!node) return 0;
      
      const rightSum = helper(node.right);
      const leftSum = helper(node.left);
      totalSum = Math.max(totalSum, node.val + leftSum + rightSum); //needed otherwise only will get either left or right sum if you only return below here.
      return Math.max(leftSum + node.val, rightSum + node.val);
    }
    
    helper(this.root);
    
    return totalSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
	let found = null;//init to null b/c might not find something that meets the critiria
    
    const queue = [this.root];
    
    while(queue.length){
    	const currNode = queue.shift();
      
      if(found !== null){
      	if(currNode.val > lowerBound && currNode.val < found) found = currNode.val;
      }else if(found === null){
      	if(currNode.val > lowerBound) found = currNode.val;
      }
      
      
      
      if(currNode.left) queue.push(currNode.left); //push on queue nodes of right
      if(currNode.right) queue.push(currNode.right);
    }
    
    return found;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
