# DSA-Questions

## 1 Find the Largest element in an array.
```js
// first approach
let arr = [4,6,3,9,1];
let max = arr.sort((a,b) => b-a)[0]
console.log(max) 

// second approach
let arr = [4,6,3,9,1];
let max = arr[0];

for(let i=0; i<arr.length; i++) {
    if(arr[i]>max) {
        max = arr[i];
    }
}
console.log(max)
```

---

## 2 Find second largest and second smallest number in the array?
```js
// First Approach
let arr = [4,6,3,9,1];
let length = arr.length;
let second_larget = arr.sort((a,b) => b-a)[1];
let second_smallest = arr.sort((a,b) => a-b)[1];
console.log(second_larget, second_smallest);

// Second Approach
const arr = [1, 2, 4, 6, 7, 5]

// Here Infinity is greate number of all and -Infinity is small number of all
let small = Infinity, second_small = Infinity;
let large = -Infinity, second_large = -Infinity;

for(let i=0; i<arr.length; i++) {
    if(small > arr[i]) {
        small = arr[i];
    }
    if(large < arr[i]) {
        large = arr[i];
    }
}
for(let i=0; i<arr.length; i++) {
    if(second_small > arr[i] && arr[i] !== small) {
        second_small = arr[i];
    }
    if(second_large < arr[i] && arr[i] !== large) {
        second_large = arr[i];
    }
}
console.log(second_small, second_large)
```

---

## 3 Find out is array sorted or not?
```js
// first approach
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// Second approach
const arr = [1, 2, 4, 6, 7, 5, 3]
const sortArr = JSON.parse(JSON.stringify(arr)).sort((a,b)=> a-b);
let isSorted = true;
console.log(sortArr, arr)
for(let i=0; i<arr.length; i++) {
    if(arr[i] !== sortArr[i]) {
        isSorted = false;
    }
}
console.log(isSorted ? "sorted" : "not sorted");
```

---

## 4 Remove Duplicates in-place from Sorted Array?
```js
function removeDuplicates(arr) {
  if (arr.length === 0) return [];

  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
    }
  }

  return result;
}
```

---

## 4 move all zero elements of array at the end?
```js
// First Approach
let arr = [1,3,0,4,0,5]
let sortedArr = [];
let zeroArr = [];
for(let i=0; i<arr.length; i++){
    if(arr[i] == 0){
        sortedArr.push(arr[i]);
    } else {
        zeroArr.push(arr[i]);
    }
}
sortedArr=[...sortedArr, ...zeroArr];
console.log(sortedArr);

// second approach
function moveZeros(arr) {
  let k = 0; // position for next non-zero

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[k] = arr[i];
      k++;
    }
  }
  // fill remaining positions with 0
  while (k < arr.length) {
    arr[k] = 0;
    k++;
  }
  return arr;
}
```
