function bubbleSort(array) {
    let isSorted = false;
    while (!isSorted) {
      isSorted = true;
      // Iterate until we get to the last element
      for (let index = 1; index < array.length; index++) {
        console.log("Comparing " + array[index] + " and " + array[index - 1]);
        // If the element to the left is bigger, then swap the element
        // that we're currently looking at with its left neighbor.
        if (array[index - 1] > array[index]) {
          isSorted = false;
          console.log("Swapping " + array[index] + " and " + array[index - 1]);
          // Swap elements by creating a temporary reference.
          let temporaryReference = array[index - 1];
          array[index - 1] = array[index];
          array[index] = temporaryReference;
        }
        console.log('Array is now ', array);
      }
      console.log("*One full pass through array complete*");
      console.log("*Is array sorted? ", isSorted);
    }
    return array;
  }

//Algorithm Description
//A bubble sort walks through a collection (iterates) and compares two elements at a time.
//If the elements are out of order, it swaps them and continues to swap out-of-order elements until the entire collection is sorted

//Basics of Bubble Sort
//1. A single iteration through a collection puts one element in the correct location - usually the largest elements to start
//2. It takes n-1 passes through a collection, where n is the number of total elements, in order to sort the collection

//Iterations - n = Number of iterations through an array
//Input - n = Each iteration all elements in the array must be checked

//Big O Notation
//Time Complexity - Quadratic Runtime O(n^2), as our array doubles in size the amount of time it would take to sort through quadruples)
//Space Complexity - Constant Memory O(1), In-Place, operates directly on input data
//Stability - Stable, it preserves the relative order of elements
//Internal / External - Internal, maintains all of its data main memory
//Recursive / Non-Recursive - Non-Recursive, iterative navigation through elements twice (Nested for Loop)
//Comparison Sort - Comparison, since it uses a comparison operator to compare two elements