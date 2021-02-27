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

//Basics of Merge Sort
//1. It contains a merge function, which actually combines two lists together and sorts them in correct order
//2. There's also a mergeSort function within, which will continue to split the input array and call the merge function again and again
//3. A list with a single item in it is always going to be considered sorted
//4. By splitting up one large, unsorted list down into at least two sorted lists, we can merge them together to create one sorted list
//5. From its individual parts, we can then begin merging those elements together, effectively reconstructing our list into a sorted form
//6. Merging actually referring to is the act of appending an item in a sorted order to a temporary array structure which builds over time
//7. If we multiply the log on n by the value of n, the result ends up being the number of total append operations to perform

//Big O Notation
//Time Complexity - Linearithmic Runtime O(n Log n), given the amount of time that merge sort needs there's clearly aspects of both at play
//Space Complexity - Constant Memory O(1) Out-of-Place, requires a temporary array structure in order to sort and append elements
//Stability - Stable, since it uses a comparison operator, if two elements are equal, it won’t change their order as it merges them together 
//Internal / External - External, often implemented to sort outside of main memory and then later pull sorted data into main memory
//Recursive / Non-Recursive - Recursive, it relies heavily upon it to divide the unsorted list into smaller sorted lists before merging them
//Comparison Sort - Comparison, since it uses a comparison operator to compare two elements