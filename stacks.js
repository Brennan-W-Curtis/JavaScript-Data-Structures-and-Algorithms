//1st Implementation - Functional Programming Approach

//Creates a stack
let Stack = function() {
    this.storage = {};
    this.count = 0;

    //Adds a value to the end of your stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    //Removes and returns the value at the end of your stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    //Returns a boolean value depending on whether the stack is empty
    this.isEmpty = function() {
        return (this.count === 0);
    }

    //Returns the size of the your stack
    this.size = function() {
        return this.count;
    }
    //Returns the value at the end of your stack
    this.peek = function() {
        return this.storage[this.count - 1];
    }
}

//2nd Implementation - Object-Oriented Approach
class Stack {
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    push(element) {
        this.size++;
        this.storage[this.size] = element;
    }

    pop() {
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }

    peek() {
        return this.storage[this.size];
    }
}

const stack = new Stack();

//Linear Data Structure
//There is a sequence and an order to how they are constructed and traversed
//Insertion and deletion that can only happen from one end of the stack - the top

//Stacks operate according to the last-in, first-out principle or LIFO
//It refers to the rule that whichever is the last element in will be the first element to go out while the first element in will be the last element to go out

//Stacks are often implemented as singly-linked lists since they share very similar characteristics and lend themselves to behaving in exactly the same manner 
//For both the space time complexity of adding elements to the beginning is O(1), or constant time 
//They're also implemented using arrays, but since they are static data structures each requires a set amount of memory to be set aside and allocated before they are created
//This drawkback should be considered when deciding upon implementation because stacks don't have an upper limit when it comes to their size and can grow infinitely large 
//If the allocated memory is exceed it will result in a stack overflow

//Implementing a stack as an array can result in stack overflow if the elements exceed the array's size capacity
//Implementing a stack as a linked list (linked stack) rarely causes a stack overflow since linked lists can grow infinitely 

//For these two reasons, a constant space time complexity and the abilit to grow in size are why many stacks are implemented as linked lists

//Building a Stack
//push: the function that's used to add elements into the stack
//pop: the function that's used to remove elements from the stack
//peek: a function that returns the first value (what is on top of the stack), but doesn't remove it
//isEmpty: a function that checks if the stack is empty or not
//size: a function that returns the number of elements that are in a stack at any given time