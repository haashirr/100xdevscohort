/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  var counter=0;
  // not a good way ->
  /*
  for(let i=0;i<str.length;i++) {
    if(str[i]=='a' || str[i]=='e' || str[i] == 'i' || str[i] =='o' || str[i] =='u' || str[i]=='A' || str[i] == 'E' || str[i]=='O' || str[i]=='I' || str[i]=='U') {
      counter++;
    }
  }
  */
 const vowels = new Set(["a","e","i","o","u"]);
 for(let i=0;i<str.length;i++) {
  var char = str.toLowerCase()[i];
  if(vowels.has(char)) {
    counter++;
  }
 }
  return counter;
}
//console.log(countVowels("ali"));
module.exports = countVowels;