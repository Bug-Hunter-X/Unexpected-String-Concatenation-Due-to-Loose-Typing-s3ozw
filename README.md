# Unexpected String Concatenation in JavaScript

This example demonstrates a common issue in JavaScript related to its loose typing system. When you use the + operator with a number and a string, JavaScript performs string concatenation instead of numerical addition.  This can lead to unexpected results if not carefully handled.

The `bug.js` file shows the problem, and `bugSolution.js` provides a solution using type checking or explicit type conversion.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js` in your terminal.