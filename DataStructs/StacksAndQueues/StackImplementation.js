class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(this.length <= 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            let currentFirst = this.first;
            this.first = newNode;
            newNode.next = currentFirst;
        }
        this.length++;
    }
    pop(){
        let poppedItem = this.first;
        if(this.length <= 0){
            return null;
        } else if(this.length === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return poppedItem;
    }
}

//Testing
let testStack = new Stack();
for(let i = 0; i < 3; i++){
    testStack.push(i);
}

let first = testStack.first;
while(first){
    console.log(first.val);
    first = first.next;
}