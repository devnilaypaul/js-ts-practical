/*
Create a multiplication table (1 to 10) using a variable to store the base number.
The table will be automatically calculated based on the number variable.
Display the formatted multiplication table in the terminal.

Steps:
1. Create a variable called "number" to store the base number for the multiplication table
   This variable determines which multiplication table to generate (e.g., 2 for 2's table)

2. Generate multiplication table from 1 to 10:
   - Multiply the base number by each number from 1 to 10
   - Use template strings to format each line as "2 X 1 = 2"

3. Display each multiplication result using console.log()
   This will print a complete multiplication table to the terminal
   The output format will be: "number X multiplier = result"
*/

let num = 5;

console.log(`${num} x 1 = ${num * 1}`);
console.log(`${num} x 2 = ${num * 2}`);
console.log(`${num} x 3 = ${num * 3}`);
console.log(`${num} x 4 = ${num * 4}`);
console.log(`${num} x 5 = ${num * 5}`);
console.log(`${num} x 6 = ${num * 6}`);
console.log(`${num} x 7 = ${num * 7}`);
console.log(`${num} x 8 = ${num * 8}`);
console.log(`${num} x 9 = ${num * 9}`);
console.log(`${num} x 10 = ${num * 10}`);
