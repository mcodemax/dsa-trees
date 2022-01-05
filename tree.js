/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {// this version wrong b/c only sees orphans
 		if(!this.root) return 0;
    
    let sum = this.root.val;
    
    function sumHelp(node){
          
      	for(const child of node.children){
        
        		if(node.children.length > 0){
            	sum+=child.val;
            }
        	
          	sumHelp(child);   
            
        }
      
    }
    
    sumHelp(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
		if(!this.root) return 0;
    
    let evens = 0;
    
    if(this.root.val % 2 === 0) evens++;
    
    
    function countEvenHelp(node){
          
      	for(const child of node.children){
        
        		if(node.children.length > 0){
            
              if(child.val % 2 === 0) evens++;
            }
        	
          	countEvenHelp(child);   
            
        }
      
    }
    
    countEvenHelp(this.root);
    return evens;
  }
  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
  
  WRONGsumValues() {// this version wrong b/c only sees orphans
 		if(!this.root) return 0;
    
    let sum = this.root.val;
    
    function sumHelp(node){
    	
      	if(node.children.length === 0){
            sum+=node.val;
      	}//gets omitted if there's children
          
      	for(const child of node.children){
          	sumHelp(child);   
            
        }
      
    }
    
    sumHelp(this.root);
    return sum;
  }
}

module.exports = { Tree, TreeNode };
