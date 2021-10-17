# Expose - Part 2
1. What will happen at line 12 and why? If the code causes an error, explain why. 

    * Line 12 will log the number 3 because the loop will break when i >= 3.

2. What will happen at line 13 and why? If the code causes an error, explain why.

    * Line 13 will log the number 150 because discontedPrice is still equal to the last discounted price. 300 discounted by 50% is 150.
  
3. What will happen at line 14 and why? If the code causes an error, explain why.

   * Line 13 will log the number 150 because finalPrice is still equal to the last discounted price. 300 discounted by 50% is 150.

4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.

    * The function will return the array [ 50, 100, 150 ] because the function discounts all values in an array by (1 - discount) * 100%.

5. What will happen at line 12 and why?  If the code causes an error, explain why.(assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).

    * Line 12 will throw an error because i is no longer defined due to the use of the keyword let. The keyword let causes i to go out of scope at the end of the loop.

6. What will happen at line 13 and why? If the code causes an error, explain why. 

    * This will cause an error because discountedPrice will no longer be in scope. The keyword let will cause discountedPrice to go out of scope at the end of the loop.

7. What will happen at line 14 and why? If the code causes an error, explain why.

    * Line 14 will log the number 150 because finalPrice is still equal to the last discounted price. 300 discounted by 50% is 150. finalPrice was declared in the same scope as console.log.

8. What will this function return? Give a brief explanation. If the code causes an error, explain why.

   * The function will return the array [ 50, 100, 150 ] because the function discounts all values in an array by (1 - discount) * 100%. The scope of discounted is the same as the scope of the return statement.

9.  What will happen at line 11 and why? If the code causes an error, explain why.

    * i will be out of scope because the use of the keyword let in its declaration keeps its scope restricted to the for loop. This will cause an error.

10.  What will happen at line 12 and why? If the code causes an error, explain why. 

     * The function will print "3" because the length of the array is 3. A constant can be assigned to once (its initialization);

11.  What will this function return? Give a brief explanation. If the code causes an error, explain why.

     * The function will return the array [ 50, 100, 150 ] because the contents of a const array can be modified, but the const array itself cannot be reassigned. The for loop will discount prices and push the discounted prices to the array.

12.  Given the above Object, write the notation for:  (These should be in your part2.md)
    
     * Accessing the value of the name property in the student object

        * `student.name`

     * Accessing the value of the Grad Year property in the student object

        * `student["Grad Year"]`

     * Calling the function for the greeting property in the student object

        * `student.greeting()`

     * Accessing the name property of the object in the Favorite Teacher property in student

        * `student["Favorite Teacher"].name`

     * Access the first index in the array of the courseLoad property of the student object

        * `student.courseLoad[0]`

1.   Arithmetic

```
> '3' + 2
'32'
Given because string 3 was concatenated with string 2. Explicit conversions of strings to numbers would be required to add.

> '3' - 2
1
Number 3 minus number 2

> 3 + null
3
3 plus number null (0) is 3. Explicit conversions of strings to numbers would be required to add.

> '3' + null
'3null'
The string 3 concatenated with the string "null" gives "3null"

> true + 3
4
true is 1, so 1 + 3 is 4

> false + null
0
false and null are converted to 0, so false + null = 0. Explicit conversions of strings to numbers would be required to add.

> '3' + undefined
'3undefined'
string 3 concatenates with the string "undefined" to make "3undefined"

> '3' - undefined
NaN
The number 3 minus undefined isn't a number (NaN)
```

14.    Comparison
```
> '2' > 1
true
Number 2 is greater than number 1

> '2' < '12'
false
Compare first character, "2" is greater than "1"

> 2 == '2'
true
Compare number 2 with string converted to number 2, they are equal

> 2 === '2'
false
Compare 2 to "2" without type conversion - they are not the same

> true == 2
false
Convert true to number 1, that is not equal to 2

> true == Boolean(2)
true
Convert 2 to boolean, 2 > 0 so it's true, true == true is true
```
15. The == operator will do type conversion if necessary to complete the operation. The === operator will not. Any type mismatch with === will result in false.
16. See file
17. The output will be [ 2, 4, 6 ]. I know this because the callback function, doSomething, will be called on every element of the array as the for loop iterates. The newArr is then returned.
18. See file
19. The function will print the following because setTimeout with a delay of 1000ms will cause the 2 to be printed after the other numbers. The 3 has a delay of 0ms, so one would expect it to be printed before the 4. However, it takes time for the setTimeout to process and the 4 is printed in this time.
```
1
4
3
2
```



