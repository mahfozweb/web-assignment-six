## 1. What is the difference between var, let, and const?

*Answer:*

**var**
-  Function-Scoped , can be re-declared $ re-assigned, hoisted with undefined


**let**
- Block-scoped , cannot be re-declared , can be assigned, hoisted but not initialized


**const**
- Block-scoped, cannot be re-declared or re-assigned , hoisted but not initialized




## 3. What is the difference between map(), forEach(), and filter()?

*Answer:*
**map()**
- Loops through each element
- Returns a new array with transformed values
- use for transformation
**forEach()**
- loops through each element of an array
- Does not return a new array 
- used for executing code 

**filter()**
- Loops through each element
- returns a new array with elements that pass a condition
- used for filtering data 




## 4. What are arrow functions in ES6?

*Answer:*

- In ES6, destructuring assignment allows you to extract values from arrays or objects and assign them to variables in a simpler way

with array :

const num = [1, 2, 3];
const [x, y, z] = num;
console.log(a)
console.log(b)
console.log(c)

array object : 

const per = { name: "rahim", age: 20 };
const { name, age } = per;

## 5. What are arrow functions in ES6?


- It was introduced in ES6, which provides a more flexible and readable way to work with strings. Unlike traditional string concatenation, template literals simplify the process of embedding expressions, multi-line strings, and variable interpolation. Backticks (``): Used to define a template literal