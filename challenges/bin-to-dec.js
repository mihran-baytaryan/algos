/* 

Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 

For example: 

binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary

*/

function binToDec(binString){
    let binDec = 0;
    for (let i = 0; i < binString.length; i++) {
        binDec += binString[binString.length - (i + 1)] * (2 ** i)
    }
    return binDec;
}



module.exports = {binToDec};