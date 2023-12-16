/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  /*
  var start=0;
  var end = str.length-1;

  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  while(start<end) {
    if (cleanStr[start] !== cleanStr[end]) {
      return false;
    }
    start++;
    end--;
    }
  return true;
  */
 
 const str2 = str.toLowerCase();
 const str3 = str2.replace(/[^a-zA-Z0-9]/g,'');
 const str4 = str3.split('').reverse().join('');
 return str3 == str4;
 
}
//console.log(isPalindrome("Kanak"));
module.exports = isPalindrome;


