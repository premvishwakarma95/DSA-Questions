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
