'use strict';

/**
 * Take notes about big O notation
 */
const section2 = function () {
  const timingOurCode = function () {
    // We want to add numbers up to number n (1 + 2 + 3 + ... + n)
    function addUpToFirst(n) {
      let total = 0;
      for (let i = 0; i <= n; i++) total += i;
      return total;
    }
    function addUpToSecond(n) {
      return (n * (n + 1)) / 2;
    }
    console.log(addUpToFirst(6));
    console.log(addUpToSecond(6));
    // Which one is better? What does better mean?
    // Better = faster? less memory? more readily?

    let t1 = performance.now();
    addUpToFirst(1_000_000_000);
    let t2 = performance.now();
    addUpToSecond(1_000_000_000);
    let t3 = performance.now();

    console.log(`Frist Algorithm: ${(t2 - t1) / 1000} seconds`);
    console.log(`Secon Algorithm: ${(t3 - t2) / 1000} seconds`);
    // The second algorithm is much faster
    // But calulating the time it takes is not always the best way to assess things
    // What if a process takes 4 hours and another take 3 hours? We don't want to
    // run them for 7 hours. Big O notation counts the number of small/simple
    // operations a computer makes, making O a more reliable standard
  };
  timingOurCode();

  const countingOperations = function () {
    function addUpToFirst(n) {
      let total = 0;
      for (let i = 0; i <= n; i++) total += i;
      return total;
      // assignment: 1 (let total)
      // assignment: 1 (let i)
      // above are one offs. below are n times
      // comparison: 1
      // ++: 1
      // addition: 1
      // assignment: 1 (total +=)
      // loop: n * 5 = LARGE number
      // O(n)
    }
    function addUpToSecond(n) {
      return (n * (n + 1)) / 2;
      // multiplication: 1
      // addition: 1
      // division: 1
      // 1 + 1 + 1 = 3 simple operations
      // O(1)
    }
    // addUpToFirst's performance is directly porportional to n, making it terrible
    // addUpToSecond's performance is stable: 3 operations
  };
  countingOperations();

  const bigOnotation = function () {
    // big O notation is a way to formalize fuzzy counting
    // it allows to talk formally about how the runtime of an algorithm grows as
    // input grows, caring only about the trend (not the notty gritty details)

    // a few examples:
    // f(n) = n // linear
    // f(n) = n^2 // quadratic
    // f(n) = c // constant

    const printAllPairs = function () {
      // O(n)
      for (let i = 0; i < n; i++) {
        // O(n)
        for (let j = 0; j < n; j++) {
          console.log(i, j);
        }
      }
    };
    // O(n^2) because O(n) is nested inside another O(n)
  };
  bigOnotation();

  const spaceComplexity = function () {
    // booleans, numbers, undefined, null take constant space
    // string, arrays, objects depend on the length
    function sum(arr) {
      let total = 0; // one number (total)
      for (let i = 0; i < arr.length; i++) {
        // one number (i)
        total += arr[i];
      }
      return total;
      // O(1) space
    }

    function double(arr) {
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
      }
      return newArr;
      // O(n) space
    }
  };
};
// section2();

/**
 * Take notes about Array & Object performance
 */
const section3 = function () {
  const ObjectBigO = function () {
    // Nice & Bad thing about {}, they are unordered
    let instructor = {
      firstName: 'Kelly',
      isInstructor: true,
      favoriteNumbers: [1, 2, 3, 4],
    };
    // accessing key O(1)
    // removing key O(1)
    // inserting key O(1)
    // searching value O(n)
    // searching requires checking potentially all the keys and values

    const keys = Object.keys(instructor); // O(n)
    const values = Object.values(instructor); // O(n)
    const entries = Object.entries(instructor); // O(n)
    console.log(keys);
    console.log(values);
    console.log(entries);
    // each entry needs checking, so proportional, aka O(n)

    const check = Object.hasOwn(instructor, 'fullName'); // O(1)
    console.log(check);
  };
  // ObjectBigO();

  const arrayBigO = function () {
    // Nice & Bad thing about [], they are ordered
    let names = ['Michael', 'Melissa', 'Andrea'];
    let values = [true, {}, 2, 'awesome'];
    // accessing O(1)
    // removing DEPENDS
    // inserting DEPENDS
    // searching value O(n)

    names.push('Raj'); // O(1) super simple
    names.pop(); // O(1)
    names.unshift('Xavier'); // O(n) all items must be rearranged
    names.shift(); // O(n) all items must be rearranged (reindexed)
  };
  // arrayBigO();

  const arrayMethods = function () {
    const numbers = ['one', 'two', 'three', 'four'];
    const names = ['Jim', 'Joe', 'Jill'];
    const together = numbers.concat(numbers, names);
    console.log(together); // merges two array, goes thru all elements O(n)
    const lady = names.slice(2);
    console.log(names); // slice does NOT modify the original array
    console.log(lady); // copies all designated elements O(n)
    const numberTwo = numbers.splice(1, 1);
    console.log(numbers); // splice modifies the original array
    console.log(numberTwo); // copies all designated elements O(n)
    // forEach, map, filter, reduce O(n)
    const sorted = numbers.sort(); // O(n*log n)
    console.log(sorted);
  };
  arrayMethods();
};
// section3();

/**
 * Take notes about problem solving approach
 */
const section4 = function () {
  const algorithm = function () {
    console.log('an algorithm is a set of steps to accomplish a task');
    console.log('To solve a problem, there are steps (an algorithm)');
    console.log('1. understanding the problem');
    console.log('2. exploring concrete examples');
    console.log('3. breaking the problem down in smaller/easier chunks');
    console.log('4. solving each piece');
    console.log('5. refactoring the code');
  };
  // algorithm();

  const understanding = function () {
    console.log('To understand the problem, follow this algorithm:');
    console.log('1. Restate the problem in your own words');
    console.log('2. Study the inputs of the problem');
    console.log('3. Study the outputs');
    console.log('4. Make sure you have enough info to solve the problem');
    console.log('5. Label the crucial parts of the problem');

    console.log('Ex: A function that takes 2 numbers and returns the sum');
    console.log('1. Add two numbers and give the answer');
    console.log('2. The inputs are two numbers (floats, how big, decimal?)');
    console.log('3. Int? Float? String?');
    console.log('4. What if the input is incomplete?');
    console.log('5. Name the variables & functions');
  };
  // understanding();

  const exploreExamples = function () {
    console.log('Concrete examples help visualize/understand problems');
    console.log('They can be substituted by user stories');
    console.log('1. Start with simple examples');
    console.log('2. Move to more complex examples');
    console.log('3. Move to empty inputs');
    console.log('4. Move to invalid inputs');

    console.log('A function that takes a str & tracks character count');
    console.log('1. "aaa"');
    console.log('2. "apple"');
    console.log('3. "aPple"');
    console.log('4. ""');
    console.log('5. 嗨');
  };
  // exploreExamples();

  const divideConquer = function () {
    console.log('Ex: A function that takes a str & tracks character count');
    console.log('Divide the problems into easy chunks');
    console.log('Write steps in comments');
    function charCount(str) {
      // tack numbers and letters (all lowercase), no punctuation or spaces
      // make object to return at end
      const counts = {};
      // loop over string
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // if the char is a key in {}, add 1, else, add to object
        if (counts[char]) counts[char]++;
        else counts[char] = 1;
        // to do:
        // ignore spaces, bring UPPER to lowercase, ignore special chars
      }
      // return object
      return counts;
    }
    const result = charCount('Hello hi !1!');
    console.log(result); //{"1": 1,"H": 1,"e": 1,"l": 2,"o": 1," ": 2,"h": 1,"i": 1,"!": 2}
  };
  // divideConquer();

  const solveSimplify = function () {
    console.log('If something is too difficult, put it on hold');
    console.log('Solve the rest, then come back to the difficult task');
    console.log('9'.charCodeAt(0)); // a = 97 z = 122 0 = 48 9 = 57
    // use a regular expression

    function charCount(str) {
      const obj = {};
      for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
          if (obj[char] > 0) obj[char]++;
          else obj[char] = 1;
        }
      }
      return obj;
    }
    const result = charCount('Hello hi !1!');
    console.log(result);
  };
  // solveSimplify();

  const refactor = function () {
    // console.log('Look back and refactor your code');
    // console.log('Ask yourself questions');
    // console.log('======================');
    // console.log('Can I check the results (code works)?');
    // console.log('Is there another way to arrive at the same results?');
    // console.log('It the solution easily legible?');
    // console.log('Is this solution applicable to other problems?');
    // console.log('Can the performance be improved?');
    // console.log('How can the code be refactored/slimmed down?');
    // console.log('Are the company guidelines respected?');
    // console.log('How would others solve the same problem?');

    // function charCount(str) {
    //   const obj = {};
    //   for (let i = 0; i < str.length; i++) {
    //     const char = str[i].toLowerCase();
    //     if (/[a-z0-9]/.test(char)) {
    //       if (obj[char] > 0) obj[char]++;
    //       else obj[char] = 1;
    //     }
    //   }
    //   return obj;
    // }
    // const result = charCount('Hello hi !1!');
    // console.log(result);

    function charCount(str) {
      const obj = {};
      const lowCase = str.toLowerCase();
      // could change regEx to .charCodeAt(0)
      for (const char of lowCase)
        if (/[a-z0-9]/.test(char)) obj[char] = ++obj[char] || 1;
      return obj;
    }
    const result = charCount('Hello hi !1!');
    console.log(result);
  };
  // refactor();
};
// section4();

/**
 * Take notes about problem solving patterns
 */
const section5 = function () {
  // The previous section was about devising a plan to solve problems
  // This section focuses on common solving patterns
  const frequencyCounter = function () {
    // function called same takes 2 arrays
    // returns true if 2nd array contains the square of 1st array
    // same([1, 2, 3] , [4, 1, 9]) // true
    // same([1, 2, 3] , [1, 9]) // false
    // same([1, 2, 1] , [4, 4, 1]) // false (must have same frequency)
    const same = function (arr1, arr2) {
      // compare array lengths (easiest case)
      if (arr1.length !== arr2.length) return false;

      const array2 = [...arr2];

      // check if squared value is there
      let verdict = false;
      for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
          if (arr1[i] * arr1[i] === array2[j]) {
            verdict = true;
            array2[j] = 'used';
            break;
          } else {
            verdict = false;
          }
        }
      }
      return verdict;

      // todo: check for frequency match
    };
    // console.log(same([1, 2, 3], [1, 9]));
    // console.log(same([1, 2, 3], [1, 9, 4]));
    // console.log(same([1, 2, 3, 4, 5, 6], [25, 16, 1, 9, 36, 4]));
    // console.log(same([1, 2, 1], [4, 4, 1])); // false. should be [4, 1, 1]
    // this version is O(n^2) because of the nested loops

    const better = function (arr1, arr2) {
      if (arr1.length !== arr2.length) return false;

      const obj1 = {};
      const obj2 = {};

      for (const value of arr1) {
        obj1[value] = (obj1[value] || 0) + 1;
      }
      for (const value of arr2) {
        obj2[value] = (obj2[value] || 0) + 1;
      }
      console.log(obj1);
      console.log(obj2);
      for (const key in obj1) {
        const squared = key ** 2;
        if (obj1[key] !== obj2[squared]) return false;
      }
      return true;
      // check obj1 keys squared match with obj2 keys (check frequency)
    };
    // console.log(better([0, 5, 5, 4], [0, 25, 16, 25]));
    // console.log(better([0, 5, 5, 4], [0, 25, 16, 27]));
    // console.log(better([0, 5, 5, 4], [0, 25, 16, 16]));
    // console.log(better([0, 5, 5, 4], [0, 2, 16, 25]));
    // This version of the frequency counter is O(n)

    const anagram = function (str1, str2) {
      if (str1.length !== str2.length) return false;

      const obj1 = {};
      const obj2 = {};
      for (const char of str1) obj1[char] = (obj1[char] || 0) + 1;
      for (const char of str2) obj2[char] = (obj2[char] || 0) + 1;

      for (const key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
      }
      return true;
    };
    console.log('"zaz" and "zza"', anagram('zaz', 'zza')); // true
    console.log('"zaz" and "zzaa"', anagram('zaz', 'zzaa')); // flase
    console.log('"iceman" and "cinema"', anagram('iceman', 'cinema')); // true
    console.log('"" and ""', anagram('', '')); // true
  };
  // frequencyCounter();

  const multiplePointers = function () {
    const mySolution = function (arr) {
      const obj = {};
      for (const value of arr) obj[value] = 1;
      // console.log(obj);
      for (const key in obj) {
        const anti = -1 * key;
        if (obj[key] && obj[anti] && +key !== 0) return [+key, +anti];
      }
      return 'no match';
    };
    // console.log(mySolution([-3, -2, -1, 0, 1, 2, 3]));
    // console.log(mySolution([-2, 0, 1, 3]));
    // console.log(mySolution([1, 2, 3]));
    // console.log(mySolution([1, 2, 3, -2]));
    // O(n) but doesn't return the first pair. it returns the pair closest to 0

    const sumZero = function (arr) {
      let left = 0;
      let right = arr.length - 1;
      while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]];
        if (sum > 0) right--;
        if (sum < 0) left++;
      }
      return 'no match';
    };
    // console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
    // console.log(sumZero([-2, 0, 1, 3]));
    // console.log(sumZero([-8, -6, -4, -2, -1, 0, 1, 3]));
    // O(n)
  };
  // multiplePointers();

  const countUniqueValues = function () {
    const myUniqueValues = function (arr) {
      // array for unique values and variable for last unique value encountered
      const unique = [];
      let lastUnique;

      // read each value of arr
      for (const value of arr) {
        if (unique.length === 0 || lastUnique !== value) {
          // the first value in the array is unique
          // if it is new (no match), add to uniqueValueArray
          // see if the value matches previous values
          unique.push(value);
          lastUnique = value;
        }
      }
      // return the length of the uniqueValueArray
      return unique.length;
    };
    // console.log(myUniqueValues([1, 1, 1, 1, 1, 1, 2]));
    // console.log(myUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
    // console.log(myUniqueValues([]));
    // console.log(myUniqueValues([-2, -1, -1, 0, 1]));

    const otherUniqueValues = function (arr) {
      if (arr.length === 0) return 0;
      let i = 0;
      for (let j = 1; j < arr.length; j++) {
        if (arr[i] - arr[j] === 0) continue;
        if (arr[i] - arr[j] !== 0) {
          i++;
          arr[i] = arr[j];
        }
      }
      return ++i;
    };
    // console.log(otherUniqueValues([1, 1, 2, 3, 4]));
    // console.log(otherUniqueValues([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
    // console.log(otherUniqueValues([1, 2, 3, 4, 5, 6, 7, 8]));
    // console.log(otherUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]));
    // console.log(otherUniqueValues([]));
  };
  // countUniqueValues();

  const slidingWindow = function () {
    const mySubarrayMax = function (arr, count) {
      if (arr.length < count) return null;
      if (arr.length === count) return arr;

      let highestSum = -Infinity;
      let highestArray = [];

      // loop over array
      for (let position = 0; position < arr.length - count + 1; position++) {
        // loop over count elements and add their sum
        let currentSum = 0;
        let tempArray = [];
        for (let i = 0; i < count; i++) {
          // store highest sum and corresponding array
          if (typeof arr[position + i] !== 'number') break;
          currentSum += arr[position + i];
          tempArray.push(arr[position + i]); // presume the current loop found the correct array
        }
        // compare it to the highest previously obtained sum
        if (currentSum > highestSum) {
          highestSum = currentSum;
          highestArray = [...tempArray];
        }
        if (currentSum < highestSum) {
          tempArray = []; // review the presumption and empty the array
        }
      }
      // return the array that adds up to highest sum
      return highestArray;
    };
    // console.log(mySubarrayMax([1, 7, -1, 0], 4));
    // console.log(mySubarrayMax([1], 2));
    // console.log(mySubarrayMax([1, 7, -1, 0], 2));
    // console.log(mySubarrayMax([1, 7, -1, 0, 10], 2));
    // console.log(mySubarrayMax([1, 7, -1, 0, 10, 1, -8, 21, 1, -4, 87, -87], 8));
    // O(n^2) not super good

    const coltSubarrayMax = function (arr, num) {
      let maxSum = 0;
      let tempSum = 0;
      if (arr.length < num) return null;
      if (arr.length === num) return arr;

      // add num numbers together (shorter loop)
      for (let i = 0; i < num; i++) maxSum += arr[i];
      tempSum = maxSum;

      // loop over whole array (minus first)
      for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
      }
      return maxSum;
    };
    console.log(coltSubarrayMax([2, 6, 9, 1, 8, 3, 4, 1, 0, -1, 11, 8, 0], 3));
    // O(n)
  };
  // slidingWindow();

  const divideAndConquer = function () {
    // divide and conquer will come back in later sections
    const binarySearch = function (arr, val) {
      let min = 0;
      let max = arr.length - 1;

      while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        // this variable is useless for now: awaiting section 14 (I guess)
        let currentElement = arr[middle];

        if (arr[middle] < val) min = middle + 1;
        else if (arr[middle] > val) max = middle - 1;
        else return middle;
      }

      return -1;
    };
    console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
    // O(log(n))
  };
  divideAndConquer();
};
// section5();

/**
 * Take on challenges
 */
const section6 = function () {
  const challenge1 = function () {
    function sameFrequency(num1, num2) {
      // good luck. Add any arguments you deem necessary.
      if (num1.toString().length !== num2.toString().length) return false;

      const obj1 = {};
      const obj2 = {};
      for (const char of num1 + '') obj1[char] = (obj1[char] || 0) + 1;
      for (const char of num2 + '') obj2[char] = (obj2[char] || 0) + 1;

      for (const key in obj1) if (obj1[key] !== obj2[key]) return false;

      return true;
    }
    console.log(sameFrequency(1234, 4311));
    console.log(sameFrequency(1234, 4321));
    console.log(sameFrequency('abcaa', 'aaacb'));
  };
  // challenge1();

  const challenge2 = function () {
    function areThereDuplicates(...arr) {
      // good luck. (supply any arguments you deem necessary.)
      const obj = {};
      for (const value of arr) {
        obj[value] = (obj[value] || 0) + 1;
      }
      for (const key in obj) {
        if (obj[key] > 1) return true;
      }
      return false;
    }
    console.log(areThereDuplicates(1, 2, 3, 4));
    console.log(areThereDuplicates(1, 2, 2, 4));
  };
  // challenge2();

  const challenge3 = function () {
    function averagePair(arr, average) {
      if (arr.length === 0) return false;
      // multiple pointers method

      // a pointer at the end of the array
      let right = arr.length - 1;
      // loop over array with a pointer at the beginning
      for (let left = 0; left <= right; left++) {
        // check average of left & right
        if ((arr[left] + arr[right]) / 2 > average) right--;
        if ((arr[left] + arr[right]) / 2 < average) continue;
        if ((arr[left] + arr[right]) / 2 === average) return true;
      }

      return false;
    }
    console.log(averagePair([1, 2, 3], 2.5));
    console.log(averagePair([], 4));
    console.log(averagePair([1, 5, 9], 4));
    console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
  };
  // challenge3();

  const challenge4 = function () {
    function isSubsequence(str1, str2) {
      if (str1.length > str2.length) return false;
      if (!str1) return false;

      let i = 0;
      let j = 0;

      while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
      }
      return false;
    }
    console.log(isSubsequence('abc', 'acb'));
    console.log(isSubsequence('abc', 'abracadaba'));
    console.log(isSubsequence('sing', 'string'));
  };
  // challenge4();

  const challenge5 = function () {
    function maxSubarraySum(arr, size) {
      if (arr.length < size) return null;

      let maxSum = 0;
      // calculate the first sum
      for (let i = 0; i < size; i++) maxSum += arr[i];

      // calculate the new num (remove first #, add new #)
      let tempSum = maxSum;
      for (let i = size; i < arr.length; i++) {
        tempSum = tempSum - arr[i - size] + arr[i];
        if (tempSum > maxSum) maxSum = tempSum;
      }

      return maxSum;
    }
    console.log(maxSubarraySum([1, 2, 3, 4, 5, 6, 7, 8], 2));
    console.log(maxSubarraySum([-6, 8, 5, 1, 3, 4, 7, 2], 2));
    console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
  };
  // challenge5();

  const challenge6 = function () {
    function minSubArrayLen(nums, sum) {
      let total = 0;
      let start = 0;
      let end = 0;
      let minLen = Infinity;

      while (start < nums.length) {
        // if current window doesn't add up to the given sum then
        // move the window to right
        if (total < sum && end < nums.length) {
          total += nums[end];
          end++;
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window
        else if (total >= sum) {
          minLen = Math.min(minLen, end - start);
          total -= nums[start];
          start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
        else {
          break;
        }
      }

      return minLen === Infinity ? 0 : minLen;
    }
  };
  // challenge6();

  const challenge7 = function () {
    function findLongestSubstring(str) {
      let longest = 0;
      let seen = {};
      let start = 0;

      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (seen[char]) start = Math.max(start, seen[char]);
        longest = Math.max(longest, i - start + 1);
        seen[char] = i + 1;
      }

      return longest;
    }
    console.log(findLongestSubstring('ab'));
    console.log(findLongestSubstring('aa'));
    console.log(findLongestSubstring('thisishowwedoit'));
  };
  // challenge7();
};
section6();

/**
 * Take notes about Recursion
 */
const section7 = function () {
  // recursion is a function/method that calls itself
  const calculateFactorial = function (number) {
    // the base case is the end of the line (when recursion ends)
    if (number > 1) return number * calculateFactorial(number - 1);
    return 1;
  };
  // console.log(calculateFactorial(6));

  const countdownReturn = function (number) {
    // base case
    if (number <= 0) {
      return '\nLAUNCH!';
    }
    return `\n${number}${countdownReturn(number - 1)}`;
  };
  // console.log(countdownReturn(5));

  const countdown = function (number) {
    // base case
    if (number <= 0) {
      console.log('LAUNCH!');
      return;
    }
    console.log(number + '');
    countdown(number - 1);
  };
  // countdown(5);

  /**
   * Explain the concept of helper function recursion
   */
  const helperMethodRecursion = function () {
    // most recursion happens in more complicated settings than the ones above
    // so the recursion process is encapsulated in a function/method

    // collectOddValues is the outer function
    const collectOddValues = function (arr) {
      let result = [];

      // this is the recursive function
      const helper = function (helperInput) {
        // base case
        if (helperInput.length === 0) return;
        if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
        helper(helperInput.slice(1));
      };
      helper(arr); // calling itself
      return result;
    };
    console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  };
  // helperMethodRecursion();

  /**
   * Explain the concept of pure recursion
   */
  const pureRecursion = function () {
    const collectOddValues = function (arr) {
      let newArr = [];
      // base case
      if (arr.length === 0) return newArr;
      if (arr[0] % 2 !== 0) newArr.push(arr[0]);

      console.log(arr[0], newArr);

      newArr = newArr.concat(collectOddValues(arr.slice(1)));
      return newArr;
    };
    console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  };
  // pureRecursion();
};
section7();

/**
 * Take on Recursion (easy) challenges
 */
const section8 = function () {
  const challenge1 = function () {
    const power = function (base, expo) {
      if (expo === 0) return 1;
      return base * power(base, expo - 1);
    };
    console.log(power(10, 4));
  };
  // challenge1();

  const challenge2 = function () {
    const factorial = function (num) {
      if (num < 0) return 0;
      if (num <= 1) return 1;

      return num * factorial(num - 1);
    };
    console.log(factorial(5));
  };
  // challenge2();

  const challenge3 = function () {
    const productOfArray = function (arr) {
      if (arr.length === 0) return 1;
      return arr[0] * productOfArray(arr.slice(1));
    };
    console.log(productOfArray([1, 2, 3, 4, 10]));
  };
  // challenge3();

  const challenge4 = function () {
    const recursiveRange = function (num) {
      if (num === 0) return 0;

      return num + recursiveRange(num - 1);
    };
    console.log(recursiveRange(6));
  };
  // challenge4();

  const challenge5 = function () {
    const fibonacciIterative = function (num) {
      let fib = [1, 1];
      let total = 0;

      if (num === 0) return null;
      if (num === 1 || num === 2) return 1;

      for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
      }

      return fib;
    };
    // console.log(fibonacciIterative(10));

    const fibonacci = function (num, fib = [1, 1]) {
      if (num === 0) return null;
      if (num === 1 || num === 2) return 1;
      if (num === fib.length) return fib[fib.length - 1];

      fib[fib.length] = fib[fib.length - 1] + fib[fib.length - 2];
      return fibonacci(num, fib);
    };
    // console.log(fibonacci(28));

    const fibonacciColt = function (n) {
      if (n <= 2) return 1;
      return fibonacciColt(n - 1) + fibonacciColt(n - 2);
    };
    // console.log(fibonacciColt(10));
  };
  challenge5();
};
// section8();

/**
 * Take on Recursion (hard) challenges
 */
const section9 = function () {
  const challenge1 = function () {
    const reverse = function (str) {
      if (str.length === 1) return str;
      return (
        str.substring(str.length - 1) +
        reverse(str.substring(0, str.length - 1))
      );
    };
    console.log(reverse('rithmschool'));
  };
  // challenge1();

  const challenge2 = function () {
    const isPalindrome = function (str) {
      if (str[0] !== str[str.length - 1]) return false;
      if (str.length <= 1) return true;

      return isPalindrome(str.substring(1, str.length - 1));
    };
    console.log(isPalindrome('amanaplanacanalpanama'));
    console.log(isPalindrome('bb'));
  };
  // challenge2();

  const challenge3 = function () {
    const callback = (val) => val % 2 !== 0;
    const someRecursive = function (arr, callback) {
      if (arr.length === 0) return false;
      if (callback(arr[0])) return true;

      return someRecursive(arr.slice(1), callback);
    };
    console.log(someRecursive([2, 4, 6, 8, 10, 1, 12], callback));
    console.log(someRecursive([2, 4, 6, 8, 10, 0, 12], callback));
  };
  // challenge3();

  const challenge4 = function () {
    const flatten = function (arr) {
      let newArr = [];
      // if arr is a number (and not an array), leave it
      if (typeof arr === 'number') {
        newArr.push(arr);
        return newArr;
      }
      // check each elements of the array
      arr.forEach((element) => {
        // if the element is a number, leave it
        if (typeof element === 'number') {
          newArr.push(element);
          return element;
        }
        // if the element is an array, flatten it
        newArr = newArr.concat(flatten(element));
      });

      return newArr;
    };
    // console.log(flatten([1]));
    // console.log(flatten([1, [2, 3]]));
    // console.log(flatten([1, 2, [[3]], [4, 5]]));
    console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
  };
  // challenge4();

  const challenge5 = function () {
    const capitalizeFirst = function (arr) {
      if (arr.length === 0) return [];

      let newArr = [];
      newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
      newArr = newArr.concat(capitalizeFirst(arr.splice(1)));
      return newArr;
    };
    console.log(capitalizeFirst(['car', 'taco', 'banana']));
  };
  // challenge5();

  const challenge6 = function () {
    const obj1 = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: 'yup',
        },
      },
    };

    const obj2 = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
      d: 1,
      e: { e: { e: 2 }, ee: 'car' },
    };

    const nestedEvenSum = function (nested) {
      // assuming we are passed an object
      let total = 0;
      for (const key in nested) {
        if (nested[key] % 2 === 0) total += nested[key];
        if (typeof nested[key] === 'object')
          total += nestedEvenSum(nested[key]);
      }
      return total;
    };
    console.log(nestedEvenSum({ a: { v: { q: 6 } } }));
    console.log(nestedEvenSum(obj1));
    console.log(nestedEvenSum(obj2));
  };
  // challenge6();

  const challenge7 = function () {
    const capitalizeWords = function (arr) {
      if (arr.length === 0) return [];

      let newArr = [];
      // use .toUpperCase() on arr[0]
      newArr.push(arr[0].toUpperCase());
      // call capitalizeWords on arr.splice(1);
      newArr = newArr.concat(capitalizeWords(arr.splice(1)));
      // put the array together
      return newArr;
    };
    console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));
  };
  // challenge7();

  const challenge8 = function () {
    const testObj = {
      num: 1,
      test: [],
      data: {
        val: 4,
        info: {
          isRight: true,
          random: 66,
        },
      },
    };

    const stringifyNumbers = function (obj) {
      const newObj = {};
      // for each key of obj
      for (const key in obj) {
        // if it is a number, add an empty string to it
        if (typeof obj[key] === 'number') newObj[key] = obj[key] + '';
        // if it is an array, copy it using the spread operator
        else if (Array.isArray(obj[key])) newObj[key] = [...obj[key]];
        // if it is an object, recursively take care of it
        else if (typeof obj[key] === 'object' && !Array.isArray(obj[key]))
          newObj[key] = stringifyNumbers(obj[key]);
        else newObj[key] = obj[key];
      }
      // return the new object
      return newObj;
    };
    console.log(stringifyNumbers(testObj));
  };
  // challenge8();

  const challenge9 = function () {
    const testObj = {
      stuff: 'foo',
      data: {
        val: {
          thing: {
            info: 'bar',
            moreInfo: {
              evenMoreInfo: {
                weMadeIt: 'baz',
              },
            },
          },
        },
      },
    };

    const collectStrings = function (obj) {
      let arr = [];

      // loop over each key:value pair of obj
      for (const key in obj) {
        // if value is a string, push it to the array
        if (typeof obj[key] === 'string') arr.push(obj[key]);
        // if the value is an object, recursively deal with it
        // concatenate the array
        if (typeof obj[key] === 'object')
          arr = arr.concat(collectStrings(obj[key]));
      }
      // return the array
      return arr;
    };
    console.log(collectStrings(testObj));
  };
  challenge9();
};
// section9();

/**
 * Take notes about Search Algorithms
 */
const section10 = function () {
  const numbers = [2, 5, 6, 9, 13, 15, 28, 30];
  // linear search O(n)
  const linearSearch = function (arr, value) {
    for (let i = 0; i < arr.length; i++) if (arr[i] === value) return i;
    return -1;
  };
  // console.log(linearSearch(numbers, 7));
  // console.log(linearSearch(numbers, 17));

  // binary search O(log(n)) (only works on sorted arrays)
  const binarySearch = function (arr, value) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      // console.log(left, middle, right); // visualizing the steps
      if (arr[middle] === value) return middle;
      if (arr[middle] < value) left = middle + 1;
      if (arr[middle] > value) right = middle - 1;
    }
    // not found
    return -1;
  };
  // console.log(binarySearch(numbers, 3));

  const naiveStringSearch = function (longStr, pattern) {
    let counter = 0;
    // loop over long string
    for (let i = 0; i < longStr.length; i++) {
      // loop over short string
      for (let j = 0; j < pattern.length; j++) {
        // if chars don't match, break out of short loop
        if (pattern[j] !== longStr[i + j]) break;
        // if chars match, keep going
        // if short loop is over, increment counter
        if (j === pattern.length - 1) counter++;
      }
    }
    return counter;
  };
  // console.log(naiveStringSearch('qefomgqweeqnomgqweggoommmgomg', 'omg'));
};
// section10();

/**
 * Take notes about Bubble Sort
 */
const section11 = function () {
  const introSorting = function () {
    // sorting is common in programming
    // understanding the algorithm of built-in sorting methods is important
    // each sorting algorithm has pros and cons
    // interview topic that comes up a lot

    // in JS, sort compares strings, not numbers (by default)
    console.log(['d', 'a', 'c', 'b'].sort()); // [a, b, c, d]
    console.log([10, 4, 6, 15, 50].sort()); // [10, 15, 4, 50, 6]
    console.log([10, 4, 6, 15, 50].sort((a, b) => a - b)); // [4, 6, 10, 15, 50]
    console.log(['apple', 'ball', 'cat'].sort((a, b) => a.length - b.length)); // ['cat', 'ball', 'apple']
  };
  // introSorting();

  const bubbleSort = function (arr) {
    // not efficient or commonly used
    // O(n^2) , right?
    // it has one great use case
    const copy = [...arr];
    let noSawps;
    for (let i = copy.length; i >= 0; i--) {
      noSawps = true;
      for (let j = 0; j < i - 1; j++) {
        if (copy[j] > copy[j + 1]) {
          [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
          noSawps = false;
        }
      }
      if (noSawps) break;
    }
    return copy;
  };
  console.log(bubbleSort([3, 4, 2, 0, 1]));
  console.log(bubbleSort([9, 0, 1, 2, 3, 4, 5, 6, 7, 8]));
};
// section11();

/**
 * Take notes about Selection Sort
 */
const section12 = function () {
  const selectionSort = function (arr) {
    // O(n^2)
    // not very efficient or commonly used
    // good for minimizing the number of swaps made
    const copy = [...arr];
    // loop over the array
    for (let i = 0; i < copy.length; i++) {
      let minIndex = i;
      let start = i;
      // loop over the array to find a smaller value
      for (let j = i + 1; j < copy.length; j++) {
        if (copy[j] < copy[minIndex]) minIndex = j; // a smaller value was found
      }
      // switch values
      if (minIndex !== start)
        [copy[minIndex], copy[start]] = [copy[start], copy[minIndex]];
    }
    return copy;
  };
  console.log(selectionSort([2, 4, 3, 1, 0]));
  console.log(selectionSort([7, 5, 3, 2, 0, 8, 1, 4, 6]));
};
// section12();

/**
 * Take notes about Insertion Sort
 */
const section13 = function () {
  const insertionSort = function (arr) {
    // O(n^2)
    // great use case: almost sorted array
    // best use case: the data is being sorted (nearly) every time data is added
    const copy = [...arr];

    // loop over the array
    for (let i = 0; i < copy.length; i++) {
      // store the target (current) value (not its index)
      let currentVal = copy[i];
      let j;
      // go back in the array (towards index 0)
      for (j = i - 1; j >= 0 && copy[j] > currentVal; j--) {
        // switch the values until the beginning of the array (unsorted part anyway)
        copy[j + 1] = copy[j];
      }
      // paste the target value in the last suitable index
      copy[j + 1] = currentVal;
    }
    return copy;
  };
  console.log([1, 2, 0, 4, 3]);
  console.log(insertionSort([1, 2, 0, 4, 3]));
};
// section13();

/**
 * Recap three previous section's algorithms
 */
const section14 = function () {};
// section14();

/**
 * Take notes about Merge Sort
 */
const section15 = function () {
  // Previous algorithms work well on small scales but poorly on large scales
  // They are sometimes called quadratic algorithms
  // Upcoming algorithms are much more efficient with O(n*log(n))
  const introMergeSort = function (arr) {
    // combination of splitting, sorting, and merging
    // it divides an array into subarrays until it gets single-item arrays
    console.log('[8, 3, 5, 4, 7, 6, 1, 2]');
    console.log('[8, 3, 5, 4] [7, 6, 1, 2]');
    console.log('[8, 3] [5, 4] [7, 6] [1, 2]');
    console.log('[8] [3] [5] [4] [7] [6] [1] [2]');
    console.log('[3, 8] [4, 5] [6, 7] [1, 2]');
    console.log('[3, 4, 5, 8] [1, 2, 6, 7]');
    console.log('[1, 2, 3, 4, 5, 6, 7, 8]');
  };
  // console.log(introMergeSort([8, 3, 5, 4, 7, 6, 1, 2]));

  const merge = function (arr1, arr2) {
    // Implementing the merging part of Merge Sort
    const sorted = [];
    let i = 0;
    let j = 0;

    // comparing the already-sorted subarrays
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        sorted.push(arr1[i]);
        i++;
      } else {
        sorted.push(arr2[j]);
        j++;
      }
    }
    // the remaining elements (if the arrays are of unequal sizes)
    while (i < arr1.length) {
      sorted.push(arr1[i]);
      i++;
    }
    // the remaining elements (if the arrays are of unequal sizes)
    while (j < arr2.length) {
      sorted.push(arr2[j]);
      j++;
    }
    return sorted;
  };
  console.log(merge([1, 10, 50], [2, 14, 99, 100]));

  const mergeSort = function (arr) {
    // O(n*log(n)) always!
    // merge sort does NOT have a best/worst case
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  };
  console.log(mergeSort([3, 1, 2, 0]));
  console.log(mergeSort([9, 0, 1, 6, 5, 4, 7, 2, 3, 8]));
};
// section15();

/**
 * Take notes about Quick Sort
 */
const section16 = function () {
  const intro = function () {
    // like Merge Sort, it works through recursion
    // but it uses a pivot to move many elements 'at once'
    // O(n*log(n))
    // best case:
    // worst case:
    console.log('[5, 2, 1, 8, 4, 7, 6, 3]');
    console.log('choose 5 as the pivot');
    console.log('[2, 1, 3, 4, 5, 7, 6, 8]');
    console.log('5 is sorted');
    console.log('recursively repeat the process for the left and right sides');
    console.log('choose 2 as the pivot');
    console.log('[1, 2, 3, 4, 5, 7, 6, 8]');
    console.log('recursively repeat');
    console.log('choose 1 as the pivot');
  };
  // intro();

  // helper function for swapping values in an array
  const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
  // helper function for pivoting values
  const quickPivot = function (arr, start = 0, end = arr.length - 1) {
    // set the pivot to the first element of the range
    let pivotValue = arr[start];
    let pivotIndex = start;

    // loop through the portion of the array
    for (let i = start + 1; i <= end; i++) {
      if (pivotValue > arr[i]) {
        pivotIndex++;
        swap(arr, i, pivotIndex);
      }
    }
    // place the pivot in its correct position
    swap(arr, start, pivotIndex);
    return pivotIndex;
  };

  // main function for sorting arrays
  const quickSort = function (arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      // pivot one value
      let pivotIndex = quickPivot(arr, left, right);
      // recursively sort the left and right sides of the subarrays
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  };
  // console.log(quickSort([6, 3, 0, 8, 7, 1, 2, 5, 4]));
};
// section16();

/**
 * Take notes about Radix Sort
 */
const section17 = function () {
  // helper function to find a digit in any position (using strings)
  const getDigitString = function (num, place) {
    let string = num + '';
    let digit = +string[(place - string.length + 1) * -1];
    if (Number.isNaN(digit)) digit = 0;
    return digit;
  };
  // console.log(getDigitString(12345, 0)); // 5
  // console.log(getDigitString(12345, 1)); // 4
  // console.log(getDigitString(12345, 2)); // 3
  // console.log(getDigitString(12345, 3)); // 2
  // console.log(getDigitString(12345, 4)); // 1
  // console.log(getDigitString(12345, 5)); // 0

  // helper function to find a digit in any position (using math)
  const getDigitMath = function (num, place) {
    let divider = 10 ** place;
    return Math.floor(Math.abs(num / divider)) % 10;
  };
  // console.log(getDigitMath(12345, 0)); // 5
  // console.log(getDigitMath(12345, 1)); // 4
  // console.log(getDigitMath(12345, 2)); // 3
  // console.log(getDigitMath(12345, 3)); // 2
  // console.log(getDigitMath(12345, 4)); // 1
  // console.log(getDigitMath(12345, 5)); // 0

  // helper function to find the length of a number (how many digits)
  const digitCount = function (num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  };

  // helper function to find the length of the longest number
  // this determines how many times Radix Sort must loop over its 'buckets'
  const mostDigits = function (arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++)
      maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    return maxDigits;
  };

  // main function to sort number
  const radixSort = function (arr) {
    // find the longest (not largest) number (100 is as long as 999)
    const atMost = mostDigits(arr);
    for (let k = 0; k < atMost; k++) {
      // create an array of 10 arrays
      let digitBuckets = Array.from({ length: 10 }, () => []);
      // run the loop for all the numbers in arr
      for (let i = 0; i < arr.length; i++) {
        // find the 1's, 10's, 100's
        const digit = getDigitMath(arr[i], k);
        // sort the numbers by 1's, then 10's, then 100's...
        digitBuckets[digit].push(arr[i]);
      }
      // resort (temporarily, then permanently) in array
      arr = [].concat(...digitBuckets);
    }
    return arr;
  };
  console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
};
// section17();
