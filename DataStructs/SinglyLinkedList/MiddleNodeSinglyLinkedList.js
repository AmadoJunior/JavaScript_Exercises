/**
 * Given a non-empty, singly linked list with head node head, 
 * return a middle node of linked list.

    If there are two middle nodes, return the second middle 
    node.
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
 * @return {ListNode}
 */

var middleNode = function(head) {
    let count = 0;
    let curNode = head;
    while(curNode){
        count++;
        curNode = curNode.next;
    }
    curNode = head;
    let middle = Math.ceil(count/2);   
    while(curNode){
        if(count === middle){
            head = curNode;
            break;
        }
        count--;
        curNode = curNode.next;
    }
    
    return head;
}; 

var middleNode = function(head) {
    let slow = head;
    let fast = head;

    while(slow && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}; 
