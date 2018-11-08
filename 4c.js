function palindrome(p){
var checkPalindrome = removeChar.split('').reverse().join('');

if(removeChar === checkPalindrome){
  return true;
}else{
  return false;
}
}
console.log(palindrome('"kajak"'));


