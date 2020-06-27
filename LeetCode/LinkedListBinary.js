/**
 * Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

    Return the decimal value of the number in the linked list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {number}
 */

function getDecimalValue(head){
    count = 0;

    function counter(head){
        if(head === null){
            return;
        }
        count++;
        counter(head.next);
    }
    counter(head);

    function helper(head, count, result=0){
        if(head === null){
            return result;
        }

        result += head.val * Math.pow(2, count);
        console.log(result);
        helper(head.next, count-1, result);
    }
    let resultingValue = helper(head, count-1);

    return resultingValue;
}

//ParseInt Solution

function getDecimalValue(head){
    const arr = [];
    while(head){
        arr.push(head.val);
        head = head.next
    }
    return parseInt(arr.join(""), 2)
}