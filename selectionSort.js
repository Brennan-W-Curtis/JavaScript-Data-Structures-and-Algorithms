function selectionSort(numbers) {
    // Traverse through all the elements in the number array.
    for(let index = 0; index < numbers.length; index++) {
    // Set the current item to be the smallest/minimum.
    let smallestNumIndex = index;
    // Find the minimum element in remaining unsorted array.
    for(let nextNumIndex = index + 1; nextNumIndex < numbers.length; nextNumIndex++) {
      console.log('Comparing ' + numbers[smallestNumIndex] + ' and ' + numbers[nextNumIndex])
      // If the next number is smaller than the current number, reassign our reference to the the index of the smallest number
      if(numbers[nextNumIndex] < numbers[smallestNumIndex]) {
        smallestNumIndex = nextNumIndex;
      } 
    }
    if(smallestNumIndex != index) {
      let currentNumber = numbers[index];
      // If the number we're looking at is the smallest in size, swap it with the first element.
      console.log('Swapping the number ' + numbers[smallestNumIndex] + ' for the number ' + numbers[index]);
      numbers[index] = numbers[smallestNumIndex];
      numbers[smallestNumIndex] = currentNumber;
    }
    console.log('Numbers currently looks like: ' + numbers);
  }
  return numbers;
}

//Algorithm Description
//A selection sort finds the smallest element in a collection, and puts it at the beginning of a now, "sorted" list.
//It continues to find the smallest possible element, then it adds it to the new "sorted" list of elements.

//Basics of Selection Sort
//1. A selection sort will divide its input list into a sorted and unsorted section.
//2. A selectioon sort wil swap the smallest element it finds in each iteration and add it to the front of the sorted selection

//Steps to Selection Sort
//1. Set smallest number/minimum to first element (index 0) in the list
//2. Look for the smallest number/minimum element in the list
//3. Swap that value with item at index[min]
//4. Increment index of [min] to next element
//5. Repeat until last element/list is sorted

//Comparisons - C(n) = Number of comparisons made by the algorithm
//Moves - M(n) = Number of moves/swaps made by the algorithm

//Big O Notation
//Time Complexity - Quadratic Runtime O(n^2), as our array doubles in size the amount of time it would take to sort through quadruples
//Space Complexity - In-Place, operates directly on input data
//Stability - Unstable, exchanges nonadjacent elements
//Internal / External - Internal, maintains all of its data main memory
//Recursive / Non-Recursive - Non-Recursive, iterative navigation through elements twice (Nested for Loop)
//Comparison Sort - Comparison, since it uses a comparison operator to compare two elements 