// Notice that we needed to know the max/min value in order to use counting sort at all!
function countingSort(array, minimumValue, maximumValue) {
    let i;
    let z = 0;
    let count = [];
    // Count the instances of each element.
    for (i = minimumValue; i <= maximumValue; i++) {
      count[i] = 0;
    }
    // We now have a placeholder array that we'll use to keep
    // track of which element will be sorted into each index.
    console.log(count);
    // Build up our index count array.
    for (i=0; i < array.length; i++) {
      count[array[i]]++;
    }
    console.log(count);
    // Modify array and move elements into their sorted location.
    for (i = minimumValue; i <= maximumValue; i++) {
      while (count[i]-- > 0) {
        console.log('Item at index ' + z + ' is: ', array[z]);
        array[z++] = i;
        console.log('Moving item ' + i + ' to correct location');
      }
    }
    console.log("Array is now sorted!");
    return array;
  }

//Algorithm Description
//The counting sort algorithm takes advantage of situations when we know the range of elements that must be sorted and we know that the 
//elements are all integers - the algorithm counts the number of unique objects, and uses some math to determine their sorted order

//Basics of Count Sort
//1. Counting sort operates only on integers
//2. Counting sort assumes that you know the range of your input (the integers you are trying to sort)
//3. Counting sort works best if the range of the integers to be sorted isn't too wide
//That is to say, not greater than the number of items to be sorted - generally, it works at its best on smaller integers

//Steps to Count Sort
//1. Create a "count array", which is populated by tallying/hashing all the elements in the original array by how many times they appear
//2. Accumulatively add the values in the populated count array
//3. Shift over the array by incrementing the index of each value, by one
//4. Iterate over the original array by translating values using the count array - be sure to increment the count array as you sort

//Understanding Counting Sort Time Complexity
//Items - n = Number of total items in the array
//Range - k = Range of items in the array
//O(n + k) - Counting sort works best if k isn't larger than n, in that scenario, the complexity becomes close ot O(n), or linear
//Ideally if the range of input values isn't greater than the number of values to be sorted

//Big O Notation
//Time Complexity - Linear Runtime O(n + k), when implemented correctly
//Space Complexity - Out-of-place, because it requires a duplicate array - and doesn't always operate on the original array  
//Stability - Stable, it does manage to maintain the order of elements as they appeared in the original array
//Internal / External - Internal, it doesn't require additional external memory and can sort small amounts of data in internal memory
//Recursive / Non-Recursive - Non-recursive, it's implementation runs iteratively 
//Comparison Sort - Non-comparison, unlike most other algorithms it does not make use of a comparison operator to sort 
