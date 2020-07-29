class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    enqueue(val){
        let newNode = new Node(val);
        if(this.length <= 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    dequeue(){
        if(this.length <= 0){
            return null;
        } else if(this.length === 1){
            this.first = null;
            this.last = null;
        } else {
            let currentFirst = this.first;
            this.first = currentFirst.next;
        }
        this.length--;
    }
}