function swap(items, leftPointerIndex, rightPointerIndex){
    // Create a temporary reference for the left item.
    let tempReference = items[leftPointerIndex];
    // Move left item to the index that contains right item.
    // Move right item to the temporary reference.
    items[leftPointerIndex] = items[rightPointerIndex];
    items[rightPointerIndex] = tempReference;
  }

  function quickSort(items, leftIndex, rightIndex) {
    // Declare an index that will be our pivot reference.
    let pivotIndex;
    // If the array has only one item, it's already sorted!
    // If it has no items, we don't want to try to sort it!
    if (items.length > 1) {
      // As long as the array has two items, we can parition it.
      pivotIndex = partition(items, leftIndex, rightIndex);
      console.log('* Pivot is: ', items[pivotIndex]);
      // If the left reference hasn't been incremented to
      // reach the pivot yet, we want to keep comparing it.
      if (leftIndex < pivotIndex - 1) {
        quickSort(items, leftIndex, pivotIndex - 1);
      }
      // If the right reference hasn't reached the 
      // pivotIndex yet, we need to keep comparing it.
      if (pivotIndex < rightIndex) {
        quickSort(items, pivotIndex, rightIndex);
      }
    }
    return items;
  }

// The partition() method takes a list of items, and a left
// reference, as well as a right reference. Both left and right
// are indexes to indicate where the pointers should start.
function partition(items, left, right) {
  // Find the pivot by adding the two indexes together
  // and dividing by two (the middle element, effectively).
  let pivot = items[Math.floor((right + left) / 2)];
  let l = left;
  let r = right;
  console.log('* Pivot is: ', pivot);
  console.log('* Left is: ', items[left]);
  console.log('* Right is: ', items[right]);
  // Once the left reference is greater than the right reference,
  // we have finished sorting this set of items, and we can return.
  while (l <= r) {
    // If the left pointer is less than the pivot, increment it.
    // In other words, move the pointer to the right.
    while (items[l] < pivot) {
      l++;
      console.log('l is now pointing to: ', items[l]);
    }
    // If the right pointer is greater than the pivot, decrement it.
    // In other words, move the pointer to the left.
    while (items[r] > pivot) {
      r--;
      console.log('r is now pointing to: ', items[r]);
    }
    // If the left pointer is larger than the pivot, and the right
    // pointer is not bigger than the pivot, swap the two elements.
    if (l <= r) {
      console.log('* Now swapping l and r pointers: ', items[l], items[r]);
      swap(items, l, r);
      // After swapping, increment/decrement the pointers respectively.
      l++;
      r--;
      // console.log('l is now pointing to: ', items[l]);
      // console.log('r is now pointing to: ', items[r]);
    }
  }
  // The left item becomes the new pivot element.
  return l;
}

//Algorithm Description
//A quick sort is a divide and conquer algorithm, and chooses a pivot point in a collection of elements
//It partitions the collection around the pivot, so that it has elements smaller than the pivot are moved before it, and larger elements after

//Basics of Quick Sort
//1. Quick sort determines something called a pivot, which is a somewhat arbitrary element in the collection
//2. Using the pivot, it divides the larger unsorted collection into two smaller lists using smart logic to decide how do the paritioning 
//3. Than it moves all the elements smaller than the pivot to the left (before) of the element
//4. And moves all the elements larger than the pivot to the right (after) of the element
//5. Most quick sort implementations will choose either the first element or the last element as the pivot
//6. Ideally the pivot would always be the median element, so that when we partition the list into sublists, they'd be equal in size  
//7. Sorting is achieved by keeping reference to elements at either end of the array, and comparing them to the pivot element

//Steps to Quick Sort
//1. Start with an unsorted collection
//2. Choose an element as the pivot 
//3. Using the pivot, partition the collection into two parts, all other elements are moved left or right according to their relative value  
//4. It will continue to call on itself recursively until it has only one element in each list which is, by defintion, considered sorted

//Guide to Implementation
//1. Choose a pivot (usually the highest-index item)
//2. Create a left reference, pointing to an element at the lowest index
//3. Create a right reference, pointing to an element at the highest index
//4. While left reference is less than the pivot, move the pointer one element to the right
//5. While right reference is more than the pivot, move the pointer one element to the left
//6. If both left reference is greater than pivot AND right reference is smaller than pivot, swap the elements at the two references
//7. Once the index of the left reference is greater than (or equal to) the index of the right reference, 
//swap the pivot with the element at the left reference

//A Quick Sort Algorithm's Time Complexity is Dependant on
//1. What we choose to be our partition
//2. How sorted the list already is
//The average runtime for an unsorted list, and a partition close to the median is O(n log n)
//The average runtime for a sorted or nearly sorted list, or a partition that is far from the median is O(n^2)

//Optimal Conditions to Use Quick Sort
//1. We don't care abount maintaining the order of our items (stability isn't important to us)
//2. We need to use an algorithm that can fit all of our data to be sorted into memory, without using external memory
//3. We are sure that we'll never have to deal with data that's sorted = or even mostly sorted

//Optimizing Use of Quick Sort
//1. Paralleligation, since we run quicksort on both parititions independently we can run them in parallel, spawning 2 different tasks
//This is call parallel quicksort, and uses the same amount of space as a normal quicksort, but in half of the time
//2. Median point, rather than just sorting the last element as the point, we can look at the last few elements and select the median from
//amongst them - it helps to get an idea of what the entire collection looks like 

//Big O Notation
//Time Complexity - Linearithmic Runtime O(n Log n), given the amount of time that merge sort needs there's clearly aspects of both at play
//Space Complexity - Logarithmic O(log^2 n) In-place, it requires some extra space to allocate space for left and right pointer references 
//Stability - Unstable, it won't guarantee to preserve the order of elements as it reorders 
//Internal / External - Internal, it doesn't require external memory - instead, it can store its entire dataset without using external memory
//Recursive / Non-Recursive - Recursive, it recursively calls on itself to swap the elements at the left and right references to sort 
//Comparison Sort - Comparison, since it uses a comparison operator to compare two elements
