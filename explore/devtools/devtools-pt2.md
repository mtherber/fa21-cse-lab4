# Explore - DevTools Part 2
1. The bug was that the type of result was a string because num1 and num2 were strings. Adding strings together concatenated them instead of adding their numeric values.
2. I would fix this bug by parsing integers from the input strings. The `parseInt(...)` function does this.