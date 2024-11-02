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
