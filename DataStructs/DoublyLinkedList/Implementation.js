class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    pop(){
        if(this.head === null){
            return undefined;
        } 

        let currTail = this.tail;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = currTail.prev;
            this.tail.next = null;
            currTail.prev = null;
        }
        this.length--;
        return currTail.val;
    }
    shift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
        } else {
            let oldHead = this.head;
            this.head = newNode;
            newNode.next = oldHead;
            oldHead.prev = newNode;
        }
        this.length++;
    }
    unshift(){
        if(!this.head) {
            return undefined;
        }
        let newHead = this.head.next;
        let oldHead = this.head;
        newHead.prev = null;
        this.head = newHead;
        oldHead.next = null;
        return oldHead.val;
    }
}

//Testing
let list = new DoublyLinkedList();
//Populate List
for(let i = 0; i < 10; i++){
    list.push(i);
}
//Test Method
list.shift(-1);

//Printing
let currHead = list.head;
while(currHead !== null){
    console.log(currHead.val);
    currHead = currHead.next;
}