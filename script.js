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
