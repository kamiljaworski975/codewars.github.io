export const primesInNumbers = {
    title: "Primes in numbers",
    quest: "Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :",
    input: 86240,
    example: "Example: n = 86240 should return (2**5)(5)(7**2)(11)",
    solution: `const isPrime = num => {
        for(let i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num > 1;
      }`,
    notes: "Done"
}

