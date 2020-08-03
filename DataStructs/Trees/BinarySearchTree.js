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
}

let myTree = new BST();
myTree.insert(5)
myTree.insert(3)
myTree.insert(8)
myTree.insert(1)
console.log(myTree.find(0));