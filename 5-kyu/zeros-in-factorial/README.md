Description:
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 *  ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
N	Product	N factorial	Trailing zeros
6	1*2*3*4*5*6 | 720 | 1
12	1*2*3*4*5*6*7*8*9*10*11*12 | 479001600 | 2
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.


---------
solution: 10 = 2x5
We don't have to count 2 (because it's a factorial, every second number is even)
In contrast, multiples of 5 are less frequent. So, every time you find a factor of 5, there will almost certainly be a factor of 2 available to pair with it to create a trailing zero.
So we count zeros calculating how many multiples of the current powerOfFive (which is 5, 25, 125, etc.) exist within the range from 1 to n