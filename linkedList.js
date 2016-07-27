"use strict"
var Node = (data) => {
    this.data = data;
    this.next = null;
}

var SinglyList = () =>{
    this._length = 0;
    this.head = null;
}

SinglyList.prototype.add = (value) =>{
    var node = new Node(value),
        currentNode = this.head;
    // Empty List
    if(!currentNode){
        this.head = node;
        this._length++;
        return node;
    }
    //Non empty list
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this._length++;
    return node;
};

SinglyList.prototype.searchNodeAt = (position) =>
{
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

    //Invalid Position
    if (length == 0 || position < 1 || position > length)
        throw new Error(message.failure);
    //Valid position
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
    return currentNode;
};

SinglyList.prototype.remove = (position) =>{
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }
    //Valid position
  if(position === 1){
      this.head = currentNode.next;
      currentNode = null;
      this._length--;
  }
  while(count<position){
      currentNode.data = node.next.data;
      currentNode.next = currentNode.next.next;
      count++;
  }
    this._length--;
}
// Check whether linked list is a palindrome
SinglyList.prototype.checkPalindrome = () =>{
    var stack = [];
    var fast = new Node();
    var slow = new Node();
    while(fast!=null && fast.next!=null){
        stack.push(slow.data);
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast!=null)
        slow = slow.next;
    while(slow != null){
        if(slow.data != stack.pop()){
            return false;
        }
    }
    return true;
}

// Check whether linked list is

