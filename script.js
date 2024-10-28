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
