/* Bonus: 

## Prime Numbers 

A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number).
To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.

### Step One

Write a function called `checkPrime` that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.

_Hint:_ Check every number up to the square root. To do this, try a _for loop_. */

const checkPrime = (num) => {
if (num === 3 || num === 2) return 'Prime'
  for (let i = 2; i <= Math.sqrt(num); i++) {
     if (num % i !== 0) {
      return 'Prime'
    }
    return 'Not prime'
  }
}
console.log(checkPrime(2375635453))

//There might be a better way to write this that doesn't hard code 2 and 3, but they return 'undefined' if I don't
//Starting i at 1 makes everything 'Not Prime' and starting it at 0 would destroy the world, so it has to start at 2

/*### Step Two
Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.

This function can **call on** the previous `checkPrime` function. */

printPrimes = (num) => {
    for (let i = num; i > 0; i--) {
      if (checkPrime(i) === 'Prime') console.log(i)
    }
    }
    
printPrimes(97)