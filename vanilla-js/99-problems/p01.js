/**
 * Problem #1
 * 
 * Find the last element of an array
 * 
 */

// NOTE: Solutions all assume that we're getting a populated array

// Solution #1
const last = (arr) => arr[arr.length - 1]; 


// Solution #2
const last = (arr) => {
  const [lastItem] = arr.slice(-1);
  return lastItem;
};


// Solution #3
const last = (arr) => [...arr].pop();
