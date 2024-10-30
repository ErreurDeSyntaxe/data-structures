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
