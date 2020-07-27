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
        this.length--;
        return oldHead.val;
    }
    get(index){
        if(index > this.length || index < 0){
            return undefined;
        }
        if(index <= Math.floor((this.length-1)/2)){
            let count = 0;
            let currNode = this.head;
            while(currNode){
                if(count === index){
                    return currNode;
                } else {
                    currNode = currNode.next;
                    count++;
                }
            }
        } else {
            let count = this.length-1;
            let currNode = this.tail;
            while(currNode){
                if(count === index){
                    return currNode;
                } else {
                    currNode = currNode.prev;
                    count--;
                }
            }
        }
    }
    set(index, value){
        let chosenNode = this.get(index);
        if(!chosenNode){
            return undefined;
        } else {
            chosenNode.val = value;
        }
    }
    insert(index, val){
        if(index === 0){
            this.shift(val)
        } else if(index === this.length-1){
            this.push(val);
        } else {
            let newNode = new Node(val);
            let chosenNode = this.get(index);
            let prevNode = chosenNode.prev;
            newNode.prev = prevNode;
            newNode.next = chosenNode;
            prevNode.next = newNode;
            chosenNode.prev = newNode;
        }
        
    }
    remove(index){
        let chosenNode = this.get(index);
        if(chosenNode === this.head){
            this.unshift();
        } else if(chosenNode === this.tail){
            this.pop();
        } else {
            let prev = chosenNode.prev;
            let next = chosenNode.next;
            prev.next = next;
            next.prev = prev;
            chosenNode.next = null;
            chosenNode.prev = null;
        }
    }
}

//Testing
let list = new DoublyLinkedList();
//Populate List
for(let i = 0; i < 10; i++){
    list.push(i);
}
//Test Method
list.insert(5, 1000);

//Printing
let currHead = list.head;
while(currHead){
    console.log(currHead.val);
    currHead = currHead.next;
}

console.log("==================================")

//Reverse Printing
let currTail = list.tail;
while(currTail){
    console.log(currTail.val);
    currTail = currTail.prev;
}