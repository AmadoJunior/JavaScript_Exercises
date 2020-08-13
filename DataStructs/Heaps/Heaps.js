function swap(arr, i1, i2){
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

class Heap{

    constructor(){
        this.values = [41,39,33,18,27,12];
    }

    getParent(index){
        return Math.floor((index-1)/2);
    }

    insert(val){
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp(){
        let index = this.values.length - 1;
        while(index > 0){
            let parentIndex = this.getParent(index);
            if(this.values[index] <= this.values[parentIndex]){
                break;
            }
            swap(this.values, parentIndex, index);
            index = parentIndex;
        }
    }

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown(){
        let index = 0;
        while(true){
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swapIndex = null;
            
            if(leftChildIndex < this.values.length){
                leftChild = this.values[leftChildIndex];
                if(leftChild > this.values[index]){
                    swapIndex = leftChildIndex;
                }
            }

            if(rightChildIndex < this.values.length){
                rightChild = this.values[rightChildIndex];
                if(
                    (swapIndex === null && rightChild > this.values[index]) || 
                    (swapIndex !== null && rightChild > leftChild)
                ){
                    swapIndex = rightChildIndex;
                }
            }

            if(swapIndex === null){
                break;
            }

            swap(this.values, index, swapIndex);
            index = swapIndex;
        }
    }

}

let heap = new Heap();
console.log(heap.values);
heap.insert(55);
console.log(heap.values);
heap.insert(19);
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);