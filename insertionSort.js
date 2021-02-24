function insertionSort(array) {
    // Traverse through length of array, starting with the element at index 0.
    for (let i = 0; i < array.length; i++) {
        // Our current place in the unsorted portion of the array.
        // currentUnsortedItem is the item we will be moving into the "sorted" subset of our array.
        let currentUnsortedItem = array[i];
        console.log('currentUnsortedItem is currently ' + currentUnsortedItem);
        // Iterate through sorted items.
        // If the current unsorted item is smaller than the item to its left,
        // move the current item back one position in the array.
        // This loop will never run for the very first unsorted item at index 0.
        for (let j = i; j > 0 && currentUnsortedItem < array[j - 1]; j--) {
          console.log(currentUnsortedItem + ' < ' + array[j-1] + ' is ' + (currentUnsortedItem < array[j - 1]));
          // Shift item left in the sorted subset of the array.
          array[j] = array[j - 1];
          console.log('* Inserting ' + array[j - 1] + ' at index ' + j);
        }
        // Shift item to the right in the sorted subset fo the array.
        array[j] = currentUnsortedItem;
        console.log('* Inserting ' + currentUnsortedItem + ' at index ' + j);
        console.log('Array is now: ' + array);
    } 
    return array;
}

//Algorithm Description
//An insertion sort algorithm maintains a sublist of the collection that it is initially given as the "sorted sublist"
//It iterates through a collection, and one by one, inserts elements into their correct spots in the sorted sublist

//Basics of Insertion Sort
//1. Initially elements at index 0 are considered sorted, and will make up the "sorted subset"
//If you have only one element in the subset, it is always considered sorted
//2. As we expand (and iterate through) the "unsorted subset", we will shift the values over in the sorted subset as needed

//Steps to Insertion Sort
//1. Assume the first item is sorted
//2. Find the next value to compare to the sorted value
//3. Shift over any necessary elements to make space for the value being added
//4. Insert value into sorted subset, and repeat steps 1-3

//Big O Notation
//Time Complexity - Quadratic Runtime O(n^2), as our array doubles in size the amount of time it would take to sort through quadruples)
//Space Complexity - Constant Memory O(1) In-Place, operates directly on input data
//Stability - Stable, it preserves the relative order of elements
//Internal / External - Internal, maintains all of its data main memory
//Recursive / Non-Recursive - Non-Recursive, iterative navigation through elements twice (Nested for Loop)
//Comparison Sort - Comparison, since it uses a comparison operator to compare two elements
