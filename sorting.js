// 1. Selection sorting
let arr = [4,3,6,8,9];

for(let i=0; i<arr.length-1; i++) {
  let currentIndex = i;
  for(let j=i+1; j<arr.length-1; j++) {
    if(arr[currentIndex] > arr[j]) {
      currentIndex = j;
    }
  }
  let swap = arr[i];
  arr[i] = arr[currentIndex];
  arr[currentIndex] = swap;
}

console.log(arr)
