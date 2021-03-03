//Algorithm Description
//The radix sorting algorithm sorts integers by grouping them usng individual digits as keys 
//often using counting sort to implement the work of sorting

//Basics of Count Sort
//1. A radix is another term for "base" - represents how many digits are used in the number system
//The binary number system has a radix of 2, while the hexidecimal number system has a radix of 16
//2. Radix sort handles sorting one digit at a time, and even thought it is an integer sorting algorithm 
//it is possible to use it to sort fixed-length strings
//3. The number of passes corresponds directly to the largest number we have in our input data
//When dealing with numbers with a radix of 3, we had to make 3 passes in order to sort our dataset
//If we were dealing with numbers of 5 digits (radix of 5), we'd have to make 5 passes in order to sort
//This makes Radix sort's runtime O(kn), where k is the number of digits/radix of the largest number

//Two Variations of Radix Sort MSD and LSD
//Most Significant Digit, radix sort works by processing an integer or integer representation starting from the greatest digit, and moving
//towards the least significant digit - this method is usually solved by recursion
//Least Significant Digit, radix sort works by processing the least significant/smallest digit first, and moving towards the greater, more
//siginficant digit as it continues to sort - this method is usually solved iteratively, using counting sort or bucket sort internally 

//Steps to Radix Sort (LSD)
//1. We'll sort by tbe least significant digit (or the first base digit) - the tens, and use counting sort to sort according to the LSD
//After we run our dataset through counting sort, the numbers will be sorted according to the LSD
//2. Next, we'll do the same thing to the next largest digit - the hundreds
//After we run counting sort on the numbers according to this digit, the numbers will be sorted according to the hundreds' digit
//3. Finally, we'll run counting sort again for a third time - this time on the most significant digit (or the last base digit)
//After we run a final counting sort, all the numbers are completely sorted, as we're finished sorting for each base of all the given numbers 

//Radix - k = Number of digits, or the radix, of the largest number in the array
//Input - n = Total number of elements in the array to be sorted

//Big O Notation
//Time Complexity - Linear Runtime O(kn), if we know the largest possible integer and therefore its length before we run its close to linear
//Space Complexity - Out-of-place, since it needs to create a second, copied array in order to handle the work of sorting by hashing  
//It is possible to implement radix sort as an in-place algorithm, but it then becomes very similar to quicksort, and is no longer stable
//Stability - Stable, it handles sorting one digit at a time ensuring that numbers will maintain their same order in the final sorted array
//Internal / External - Internal, it doesn't require additional external memory and can sort small amounts of data in internal memory
//Recursive / Non-Recursive - Recursive and Non-Recursive, it can be implementated both recursively (MSD) and iteratively (LSD)
//Comparison Sort - Non-comparison, unlike most other algorithms it does not make use of a comparison operator to sort 
