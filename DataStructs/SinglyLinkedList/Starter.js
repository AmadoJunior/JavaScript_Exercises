class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        let newNode = new Node(val);
        if(this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.length++;
        return this;
    }

    print(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
    
    pop(){
        if(!this.head) return undefined;

        let current = this.head;

        while(current.next.next !== null){
            current = this.head.next;
        }

        this.tail = current;
        current.next = null;
        this.length--;
    }

    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
    }

    unshift(val){
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    get(index){
        let count = 0;
        let current = this.head;
        while(current){
            if(count === index){
                return current;
            } else {
                count++;
                current = current.next;
            }
        }
    }

    set(index, val){
        let count = 0;
        let current = this.head;
        while(current){
            if(count === index){
                current.val = val;
                break;
            } else {
                count++;
                current = current.next;
            }
        }
    }

    insert(index, val){
        if(index < 0 || index > this.length){
            return false;
        } else if(index === 0){
            return this.unshift(val);
        } else if(index === this.length){
            return this.push(val);
        }

        let newNode = new Node(val);
        let prev = this.get(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index > this.length-1){
            return false;
        }else if(index === 0){
            return this.shift();
        } else if(index === this.length-1){
            return this.pop();
        }
        let prev = this.get(index-1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return  removed;
    }

    reverse(){
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let prev = null;
        let next = null;
        
        for(let i = 0; i < this.length; i++){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.print();
list.reverse();
list.print();