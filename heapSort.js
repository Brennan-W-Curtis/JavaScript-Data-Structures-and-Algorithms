function heapSort(array) {
    // Build our max heap.
    buildMaxHeap(array);
    // Find last element.
    lastElement = array.length - 1;
    // Continue heap sorting until we have
    // just one element left in the array.
    while(lastElement > 0) {
      swap(array, 0, lastElement);
      heapify(array, 0, lastElement);
      lastElement -= 1
    }
  }

  function buildMaxHeap(array) {
    let i;
    i = array.length / 2 - 1;
    i = Math.floor(i);
    // Build a max heap out of
    // all array elements passed in.
    while (i >= 0) {
      heapify(array, i, array.length);
      i -= 1;
    }
  }

  function heapify(heap, i, max) {
    let index, leftChild, righChild;
    while(i < max) {
      index = i;
      leftChild = 2*i + 1;
      righChild = leftChild + 1;
      if (leftChild < max && heap[leftChild] > heap[index]) {
        index = leftChild;
      }
      if (righChild < max && heap[righChild] > heap[index]) {
        index = righChild;
      }
      if (index == i) {
        return;
      }
      swap(heap,i, index);
      i = index;
    }
  }

  function swap(array, firstItemIndex, lastItemInde) {
    var tmp = array[firstItemIndex];
    // Swap first and last items in the array.
    array[firstItemIndex] = array[lastItemInde];
    array[lastItemInde] = tmp;
  }

//Algorithm Description
//A heap sort algorithm is a sorting technique that is exclusively based upon a binary heap data structure 
//It involves finding the largest (maximum) element, and sorting it at the end of the unsorted collection

//Heap Rules
//1. It must always have a heap structure, where all the levels of the binary tree are filled up, from left to right
//2. It must either be ordered as a max heap or min heap where every parent node (including the root) is greather/less than or equal 
//to the value of its children nodes   

//Basics of Heap Sort
//1. Build a max heap from all of our unsorted array data, using a buildMaxHeap function
//2. Once the largest (max-value) item is at the root node of the heap, and every parent node is larger than its children
//We'll swap the largest value with the item at the end of the heap
//3. The last item might be in the right place, but the root node probably isn't 
//We'll move down the root node item to its correct place, using the heapify function 
//4. We can think of heap sort as an improved selection sort, it finds the largest element in an unsorted collection and orders at the back
//of the list - but achieves this in linearithmic time because it uses heaps

//Steps to Heap Sort
//1. We start of with an unsorted array
//2. We transform that unsorted array into a heap
//3. Since we need a max heap in order to implement heap sort, we'll transform our heap into a max heap
//4. Swap the root node with the last node - after we do this, the last node will hold the largest (max-value) item
//So it's considered sorted, and we can move it from the heap.
//5. We have one less node in our heap, but it is no longer a max heap 
//We'll need to move the current root node to its correct place to make this a max heap once again
//6. Now that we have a max heap again, we can repeat the same steps
//Swap the first node and the last node and heapify the tree until it is a max heap again
//7. Once we are back in a max heap state, we can continue repeating the same steps until we are left with a heap size of 1
//Swap the first and last elements, remove last node as it is already in its sorted position in the array, heapify until back at a max heap

//Why Heap Sort is Efficient
//1. We must first buildMaxHeap - which takes O(n) time
//2. Also, we must heapify all of the items in the heap except for the root node - which takes O(log n) time, with (n-1) calls to heapify 
//Binary trees are logarithmic in nature

//Big O Notation
//Time Complexity - Linearithmic Runtime O(n Log n), given the amount of time that merge sort needs there's clearly aspects of both at play
//Space Complexity - In-place, it transforms the array passed to it as it sorts and doesn't create an entirely separated copy of the input
//Stability - Unstable, because of the nature of a heapify function, if there are duplicate elements, we can't rely on them maintaining order 
//Internal / External - Internal, it doesn't need external memory
//Recursive / Non-Recursive - Non-recursive, it's implementation runs iteratively
//Comparison Sort - Comparison, it compares two elements at a time when it swaps and calls the heapify function 
