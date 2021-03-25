function mergeSort(array) {
    // Determine the size of the input array.
    let arraySize = array.length;
    // If the array being passed in has only one element
    // within it, it is considered to be a sorted array.
    if (arraySize === 1) { 
      return; 
    }
    // If array contains more than one element,
    // split it into two parts (left and right arrays).
    let midpoint = Math.floor(arraySize / 2);
    let leftArray = array.slice(0, midpoint);
    let rightArray = array.slice(midpoint);
    // Recursively call mergeSort() on
    // leftArray and rightArray sublists.
    mergeSort(leftArray);
    mergeSort(rightArray);
    // After the mergeSort functions above finish executing,
    // merge the sorted leftArray and rightArray together.
    merge(leftArray, rightArray, array);
    // Return the fully sorted array.
    return array;
  }
  function merge(leftArray, rightArray, array) {
    let index = 0;
    while (leftArray.length && rightArray.length) {
      console.log('Array is: ', array);
      if (rightArray[0] < leftArray[0]) {
        array[index++] = rightArray.shift();
      } else {
        array[index++] = leftArray.shift();
      }
    }
    while (leftArray.length) {
      console.log('Left array is: ', leftArray);
      array[index++] = leftArray.shift();
    }
    while (rightArray.length) {
      console.log('Right array is: ', rightArray);
      array[index++] = rightArray.shift();
    }
    console.log('* End of merge function * array is: ', array);
  }

//Algorithm Description
//A merge sort is a divide and conquer algorithm that splits an unsorted collection into 2 halves
//It sorts the 2 halves, and then merges them together to form one, sorted collection - by using recursion 

//Merge Sort Theory
//The basic idea behind merge sort is that it tends to be a lot easier to sort two smaller, sorted lists rather than sorting a single large unsorted list
//The divide and conquer technique is actually a algorithm design paradigm

//Overview of Divide and Conquer
//A divide and conquer algorithm divides a problem into simpler versions of itself
//By breaking down a problem into smaller parts, they become easier to solve - usually, the solution for the smaller sub-problems can be applied to a larger, complicated one
//Conquering the large problem using the same solution is what makes divide and conquer recursive  

//Steps to Merge Sort
//1. Divide and break up the problem into the smallest possible "subproblem", of the exact same type.
//2. Conquer and tackle the smallest subproblems first 
//Once you've figured out a solution that works, use the exact same technique to solve larger subproblems - in other words, solve the subproblems recursively
//3. Combine the answers and build up smaller subproblems until you finally end up applying the same solution to the larger, more complicated problem that you started with

//Why it Works Well
//A list with a single item in it is always going to be considered "sorted"
//Once we have at least two sorted lists, we can merge them together to create a single, sorted list
//By splitting up one large, unsorted list down into its individual parts, we can then begin merging those elements together
//effectively reconstructing our list into a sorted form

//Recursion in Effect
//The mergeSort function contains a merge function, which actually combines two lists together and sorts them in the correct order 
//In addition to a mergeSort function, which will continue to split the input array and call the merge function again and again recursively
//Since merge sort is implemented recursively, we can sort multiple elements/sections of the list at a time

//Merging Lists by Appending Elements
//Merging actually referring to is the act of appending an item in a sorted order to a temporary array structure which builds over time
//What it means is that when we merge a + b, we compare them using > + <, then we "append" the larger of the two to the end of the smaller  
//Remember that an "append" operation involves two steps
//First, comparing the items that we want to combine together && Second, inserting them into our temporary array in sorted order

//How Merging is Logarithmic
//If n is the number of items in our list that we are tryin to sort
//-> When n = 8, we must perform n * 3 (24) append operations | n = 8 : log2 8 = 3
//-> When n = 16, we must perform n * 4 (64) append operations | n = 16 : log2 16 = 4
//-> When n = 4, we must perform n * 2 (8) append operations | n = 4 : log2 4 = 8
//-> When n = 2, we must perform n * 1 (4) append operations | n = 2 : log2 2 = 2

//If we multiply the log on n by the value of n, the result ends up being the number of total append operations to perform

//Using this abstraction we can determine how many operations it would take to perform merge sort on any size list
//1. List of 16 items (n=16) = 16 * log2 16 | 16 * 4 | 64 operations
//2. List of 64 items (n=64) = 64 * log2 64 | 64 * 6 | 384 operations

//Given the fact that the amount of time that merge sort needs to run is (n * log n), there's clearly both linear and logarithmic aspects
//Merge sort's time complexity is a combination of linear and logarithmic time, this is referred to as Linearithmic time [O(n log n)]

//Big O Notation
//Time Complexity - Linearithmic Runtime O(n Log n), given the amount of time that merge sort needs there's clearly aspects of both at play
//Space Complexity - Constant Memory O(1) Out-of-Place, requires a temporary array structure in order to sort and append elements
//Stability - Stable, since it uses a comparison operator, if two elements are equal, it won’t change their order as it merges them together 
//Internal / External - External, often implemented to sort outside of main memory and then later pull sorted data into main memory
//Recursive / Non-Recursive - Recursive, it relies heavily upon it to divide the unsorted list into smaller sorted lists before merging them
//Comparison Sort - Comparison, since it uses a comparison operator to compare two elements