function palindrome(p){

var removeChar = p.replace(/[^A-Z0-9]/ig, "").toLowerCase();
var checkPalindrome = removeChar.split('').reverse().join('');

if(removeChar === checkPalindrome){
  document.write("<div>"+ p + "a Palindrome <div>");
}else{
  document.write("<div>" + p + "not a Palindrome </div>");
}
}
palindrome('"kajak"')
palindrome('"skok"')


