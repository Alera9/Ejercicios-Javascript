/**
 * Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */

const arr3 = [1, 2, 3, 4];

const sumAndProductOfNumbers = (arr =[]) => `The sum is ${arr.reduce((acc,curr) =>acc +(curr*1),0 )}. The product is ${arr.reduce((acc,curr) =>acc *curr,1 )}`

printSolution("three",sumAndProductOfNumbers);