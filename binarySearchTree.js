//1st Implementation
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;    
                }
            };
            return searchTree(node);
        }
    }

    findMin() {
        let current = this.root;
        while(current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (data !== current.data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }

    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = function(node, data) {
            if (node === null) {
                return null;
            }
            if (data === node.data) {
                if (node.left === null && node.right === null) {
                    return null;
                }
                if (node.left === null) {
                    return node.right;
                }
                if (node.right === null) {
                    return node.left;
                }
                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }

  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1);
  }

  findMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right +1;
    }
  }

  dfsInOrder() {
      if (this.root === null) {
          return null;
      } else {
          let result = [];
          let traverseInOrder = node => {
              node.left && traverseInOrder(node.left);
              result.push(node.data);
              node.right && traverseInOrder(node.right);
          };
          traverseInOrder(this.root);
          return result;
      }
  }

  dfsPreOrder() {
      if (this.root === null) {
          return null;
      } else {
          let result = [];
          let traversePreOrder = node => {
              result.push(node.data);
              node.left && traversePreOrder(node.left);
              node.right && traversePreOrder(node.right);
          };
          traversePreOrder(this.root);
          return result;
      }
  }

  dfsPostOrder() {
      if (this.root === null) {
          return null;
      } else {
          let result = [];
          let traversePostOrder = node => {
            node.left && traversePostOrder(node.left);
            node.right && traversePostOrder(node.right);
            result.push(node.data);
          };
          traversePostOrder(this.root);
          return result;
      }
  }

  breadthFirstSearch() {
      let result = [];
      let queue = [];
      if (this.root !== null) {
          queue.push(this.root);
          while (queue.length > 0) {
              let node = queue.shift();
              result.push(node.data);
              if (node.left !== null) {
                  queue.push(node.left);
              }
              if (node.right !== null) {
                  queue.push(node.right);
              }
          }
          return result;
      } else {
          return null;
      }
  }

}

const binarySearchTree = new BinarySearchTree();

//2nd Implementation
class NodeTwo {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    }

    size() {
        return this.count;
    }

    insert(value) {
        this.count++;

        let newNode = new Node(value);
        const searchTree = node => {
            //If the value is < node.value, go left
            if (value < node.value) {
                //If there is no left child, append new node
                if (!node.left) {
                    node.left = newNode;
                } 
                //If a left child exists, look left again 
                else {
                    searchTree(node.left);
                }
            }
            //If the value is > node.value, go right
             else if (value > node.value) {
                //If there is no right child, append new node
                if (!node.right) {
                    node.right = newNode;
                }
                //If a right child exists, look right again
                else {
                    searchTree(node.right);
                }
            }
        }
        searchTree(this.root);
    }

    min() {
        let currentNode = this.root;
        //While there exists a left child node, continue traversing left until there are no more children
        while(currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

    max() {
        let currentNode = this.root;
        //While there exists a right child node, continue traversing right until there are no more children
        while(currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    }

    contains(value) {
        let currentNode = this.root;
        while(currentNode) {
            if (value === currentNode.value) {
                return true;
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    //Depth First Search - Examines the tree branch by branch and makes use of a stack

    //In-Order - Left, Root, then Right
    dfsInOrder() {
        let result = [];
        const traverse = node => {
            //If a left child exists, then go left again
            if (node.left) traverse(node.left);
            //Capture the root node value
            result.push(node.value);
            //If a right child exists, then go right again
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    //Pre-Order - Root, Left, then Right
    dfsPreOrder() {
        let result = [];
        const traverse = node => {
            //Capture the root node value
            result.push(node.value);
            //If a left child exists, then go left again
            if (node.left) traverse(node.left);
            //If a right child exists, then go right again
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
 
    //Post-Order - Left, Right, then Root
    dfsPostOrder() {
        let result = [];
        const traverse = node => {
            //If a left child exists, then go left again
            if (node.left) traverse(node.left);
            //If a right child exists, then go right again
            if (node.right) traverse(node.right);
            //Capture the root node value
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }

    //Breadth First Search - Examines the tree level by level and makes use of a queue

    bfs() {
        let result = [];
        let queue = [];
        queue.push(this.root);
        while(queue.length) {
            let currentNode = queue.shift();
            result.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return result;
    }
    
 }

 function levelOrderSearch(rootNode) {
    // Check that a root node exists.
    if (rootNode === null) {
      return;
    }
    // Create our queue and push our root node into it.
    let queue = [];
    queue.push(rootNode);
    // Continue searching through as queue as long as it's not empty.
    while (queue.length > 0) {
      // Create a reference to currentNode, at the top of the queue.
      let currentNode = queue[0];
      // If currentNode has a left child node, add it to the queue.
      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      }
      // If currentNode has a right child node, add it to the queue.
      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      }
      // Remove the currentNode from the queue.
      queue.shift()
    }
    // Continue looping through the queue until it's empty!
  }

  //Time Complexity - O(n), Linear Runtime

 const bts = new BST();

 //Non-Linear Data Structure
 //Since the data doesn't necessarily need to be arranged in a particular order, it's easy to traverse one in an non-sequential manner 
 //Trees, like linked lists, are made up of nodes and links - it must have a root node if nothing else
 //The fundamental difference between linear structures and non-linear structures is one node can connect to many others

 //Notable Terms for Tree Structures
 //Root - the topmost node of the tree, which never has any links or edges connecting to it
 //Link/Edge - the reference that a parent node contains that tells it what its child node is
 //Child - any node that has a parent node that links to it
 //Parent - any node that has a reference link to another node
 //Sibling - any group of nodes that are the children of the same node  
 //Internal - any node that has a child node (basically all parent nodes)
 //Leaf - any node that does not have a child node in the tree

 //The data is hierarchical in nature and is always displayed as such

 //Fundamental Truths about Tree Structures
 //If a tree has n nodes, it will always have one less (n-1) number of edges 
 //A tree can only ever have 1 root node, and the root node cannot have any parents, which means nothing can link to it
 //Trees are recursive data structures because a tree is usually composed of smaller trees - often referred to as subtrees - inside of it 
 //since a child node could be the root of a subtree, they can contain trees nested within them

//Properties Used to Identify Types of Trees
//For the most part, the two properties you should be most concerned with are either the depth of a node or the height of a node
//The depth of a node is the number of links or edges it takes to reach that node from the root of the tree
//Simplified by asking the question, how far away is the node from the root of the tree?
//The height of a node is the maximum number of links or edges (or the longest path) from that node to its furthest leaf
//Simplified by asking the question, how far is this node from its furthest-away left?
//Also worth nothing is that the height of the root node is automatically the height of the entire tree itself

//Differentiating Between Balanced Trees and Unbalanced Trees
//A tree is considered balanced if any two sibling subtrees do not differ in height by more than one level
//If two sibling subtrees differ siginificantly in height (and have more than one level of depth in difference), the tree is unbalanced 

//Understanding Binary Search Trees
//There are a few different types of tree structures that are used in programming but the most common one is the binary search tree
//Binary has a simple meaning in this context - anything relating to or composed of two things
//The child node of a tree structure could also very well be the parent node to many other child nodes
//Which would effectively make it the root node of a mini subtree of the larger tree structure
//Binary trees get their name from the way that their subtrees are structured - they can only ever have two links, connecting to two nodes
//This means that every parent node can only ever have two possible child nodes - and never any more than that 
//Thus, every binary tree will contain two subtrees within it, a left and right subtree, because they are recursively part of a larger tree

//How Binary Search Trees are Organized
//Elements in the left subtrees are always less than the root node and elements in the right subtrees are always greater than the root node
//Any tree can be a binary tree if each node has only two child nodes 
//Its the ordering of nodes that makes a binary tree searchable and, by extension, what makes it so powerful  

//Performing an Insert() Operation
//1. We start at the root node, and compare that value of the root node (26) to the item we want
//2. Since 21 is less than 26, we immediately determine that the item we want to insert is going to live somewhere within the left subtree
//3. We look at the new "root" node: 19 - we know that the item we want to insert, 21, is greater than 19
//So, we move the right node of the node 19, since we know the item we are inserting is larger and has to be on the right subtree
//4. Now we come to a leaf on the subtree - the node is 24, which is larger than 21
//We need to insert out item somewhere here, but we also need to make sure that the node with a value of 24 is in the right place
//5. We set the node we're inserting, 20, to point it's right pointer reference to the pre-existing node 24, since 24 is greater than 21 

//How a Binary Search Works
//A binary search is an algorithm that simplifies and speeds up searching through a sorted collection by dividing the search set into two
//groups and comparing an element to one that is larger or smaller than the one you're looking for
//In the process of narrowing down the search set, we remove half of the search space - which is exactly what makes a binary search powerful
//However, a binary search is far more efficient if our data is ordered and sorted so that we can easily divide our search space in two