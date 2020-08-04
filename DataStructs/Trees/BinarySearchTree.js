class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    insert(val){
        let newNode = new TreeNode(val);
        if(!this.root){
            this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;
            while(true){
                if(val === currentNode.val){
                    return undefined;
                }
                if(val < currentNode.val){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if(val > currentNode.val){
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }
    find(val){
        let currentNode = this.root;
        let found = false;
        while(currentNode && !found){
            if(currentNode.val === val){
                found = true;
                return currentNode;
            } else {
                if(currentNode.val < val){
                    currentNode = currentNode.right;
                } else {
                    currentNode = currentNode.left;
                }
            }
        }
        return undefined;
    }
    BFS(){
        let queue = [];
        let visited = [];
        let curNode = this.root;

        queue.push(curNode);
        while(queue.length){
            curNode = queue.shift();
            visited.push(curNode);
            if(curNode.left){
                queue.push(curNode.left);
            }
            if(curNode.right){
                queue.push(curNode.right);
            }
        }
        return visited;
    }
    DFSPreOrder(){
        let visited = [];
        let curNode = this.root;
        function helper(node){
            visited.push(node.val);
            
            if(node.left){
                helper(node.left);
            }

            if(node.right){
                helper(node.right);
            }
        }
        helper(curNode);
        return visited;
    }
    DFSPostOrder(){
        let visited = [];
        let curNode = this.root;
        function helper(node){
            if(node.left){
                helper(node.left);
            }

            if(node.right){
                helper(node.right);
            }

            visited.push(node.val);
        }
        helper(curNode);
        return visited;
    }
    DFSInOder(){
        let visited = [];
        let curNode = this.root;
        function helper(node){
            if(node.left){
                helper(node.left);
            }

            visited.push(node.val);

            if(node.right){
                helper(node.right);
            }
        }
        helper(curNode);
        return visited;
    }
}

let myTree = new BST();
myTree.insert(10)
myTree.insert(6)
myTree.insert(15)
myTree.insert(3)
myTree.insert(8)
myTree.insert(20)
console.log(myTree.DFSInOder());