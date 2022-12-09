/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

const drawStairs = n => {
     if (n <= 0) return;
     str = "";
     for (let i = 1; i <= n; i++) {
          str += " ".repeat(n-i) + "*".repeat(i) + "\n";
     }
     return str;
};


 /* 
 
 Extension:
 Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
 number n where n must be an odd positive number. Note that each row of the star must
 be 'n' characters long. Be sure to include any leading/trailing spaces per row.
 
 Examples:
 drawStar(1) ->
 +
 
 drawStar(3) ->
 \|/
 -+-
 /|\
 
 drawStar(5) ->
 \ | /
 \|/ 
 --+--
 /|\ 
<<<<<<< HEAD
 / | \
 
 */
 
 const drawStar = n => {
     if (n%2 === 0) return;
     
     for (let i = 1; i <= n; i++) {
          let str = "";
          if (i < n/2 || i > (n/2)+1) {
               for (let j = 1; j <= n; j++) {
                    if (j === i) str += "\\";
                    else if (j === n-(i-1)) str+="/";
                    else if (j < Math.round(n/2)|| j > Math.round(n/2)) str+= " ";
                    if (j === Math.round(n/2)) str+= "|";
               }
=======
/ | \

*/

const drawStar = n => {
let str = "";
for (let i = 1; i <= n; i++) {

     if (i < n/2 || i > (n/2)+1) {
          for (let j = 1; j <= n; j++) {
               if (j === i) str += "\\";
               else if (j === n-(i-1)) str+="/";
               else if (j < Math.round(n/2)|| j > Math.round(n/2)) str+= " ";
               if (j === Math.round(n/2)) str+= "|";
               if (j === n) str+= "\n";
>>>>>>> 1818335 (completed hack hour 2 untested)
          }
     
     
          if (i === Math.round(n/2)) {
               for (let j = 1; j <= n; j++) {
                    if (j < n/2 || j > Math.round(n/2)) str += "-";
                    if (j === Math.round(n/2)) str += "+";
               }
          }
     }
<<<<<<< HEAD
 
 }
 
 module.exports = { drawStairs, drawStar };
 
=======
}
return str;  
}


module.exports = { drawStairs, drawStar };


>>>>>>> 1818335 (completed hack hour 2 untested)
