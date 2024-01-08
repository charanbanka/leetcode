/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    if (n <= 0) {
        return false;
    }

    const primes = [2, 3, 5];

    for (const prime of primes) {
        while (n % prime === 0) {
            n /= prime;
        }
    }

    return n === 1;
};

console.log(isUgly(140));

// console.log(isUgly(-2147483648));
