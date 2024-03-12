/**
 * Exercise #4 (sugerencia filter() e includes() )
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */

const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];

const filterDatabetweenTwoArrays = (arr1, arr2) => arr1.filter(e=> arr2.includes(e));

printSolution("four",filterDatabetweenTwoArrays);
// console.log(filterDatabetweenTwoArrays(student1Courses,student2Courses));
