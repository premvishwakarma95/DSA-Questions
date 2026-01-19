/*********************************
 STRING DSA QUESTIONS
*********************************/

// 1. Reverse a String
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// 2. Check Palindrome
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

// 3. Character Frequency
function charFrequency(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

// 4. First Non-Repeating Character
function firstUniqueChar(str) {
  let map = {};

  for (let ch of str) {
    map[ch] = (map[ch] || 0) + 1;
  }

  for (let ch of str) {
    if (map[ch] === 1) return ch;
  }

  return null;
}


/*********************************
 ARRAY DSA QUESTIONS
*********************************/

// 5. Find Maximum Element
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}

// 6. Remove Duplicates
function removeDuplicates(arr) {
  let result = [];
  for (let num of arr) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}

// 7. Second Largest Element
function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second;
}

// 8. Rotate Array by K
function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}


/*********************************
 OBJECT DSA QUESTIONS
*********************************/

// 9. Count Occurrences in Array
function countOccurrences(arr) {
  let obj = {};
  for (let num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }
  return obj;
}

// 10. Find Key with Maximum Value
function maxValueKey(obj) {
  let maxKey = null;
  let maxVal = -Infinity;

  for (let key in obj) {
    if (obj[key] > maxVal) {
      maxVal = obj[key];
      maxKey = key;
    }
  }
  return maxKey;
}

// 11. Convert Object to Array
function objectToArray(obj) {
  let result = [];
  for (let key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}

// 12. Merge Two Objects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// 13 function to arrange array elements in ascending order without using any built-in methods
function sortAscending(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap without using methods
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}
// Example
let numbers = [5, 2, 9, 1, 3];
console.log(sortAscending(numbers)); // [1, 2, 3, 5, 9]

// 14 Find Largest Number in Array
function findLargest(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findLargest([3, 7, 1, 9, 4])); // 9

// 15 Move Zeros to End
function moveZeros(arr) {
    let result = [];
    let zeroCount = 0;
 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            result[result.length] = arr[i];
        } else {
            zeroCount++;
        }
    }
    while (zeroCount > 0) {
        result[result.length] = 0;
        zeroCount--;
    }
    return result;
}
console.log(moveZeros([1, 0, 3, 0, 5]));


