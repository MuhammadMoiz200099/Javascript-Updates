// JavaScript New Array Methods
// The ES2023 specification has included new array methods which performs 
// operation on the copy of your original array leaving original array 
// unchanged which makes it more maintainable and predictable.

// - FindLast()
// This method returns the last element in the array that
// satisfies the testing function provided.
// In case of no matching element, it returns undefined.
const arr = [10, 20, 30, 80, 10];
const result = arr.findLast(item => item > 10);
console.log(result); // 80

// - findLastIndex()
// This method returns the index of last element in the array that 
// satisfies the testing function provided.
// In case of no matching element, it returns -1.
const arr = [10, 20, 30, 80, 10];
const result = arr.findLastIndex(item => item > 10);
console.log(result); // 3

// - toSpliced()
// This method returns a new array with some elements removed 
// or/and replaced at a given index. It mutates the original array.
const arr = [10, 20, 30, 40, 50];
const result = arr.toSpliced(1, 2, 80, 90, 100);
console.log(result) // [10, 80, 90, 100, 40, 50]

// - toSorted()
// This method returns a new array with items sorted.
const arr = [2, 4, 3, 1, 5];
const result = arr.toSorted();
console.log(result) // [1, 2, 3, 4, 5]

// - toReversed()
// This method returns a new array with the elements in the reversed order.
const arr = [2, 4, 3, 1, 5];
const result = arr.toReversed();
console.log(result) // [5, 1, 3, 4, 2]

// - with()
// This method returns a new array with the element at the given index replaced with the given value.
// It accepts two parameters, index and value

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.with(4, 10)); // [1, 2, 3, 4, 10, 6]





