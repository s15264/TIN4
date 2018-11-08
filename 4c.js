function palindrome(p){
var removeChar = p.replace(/[^A-Z0-9]/ig, "").toLowerCase();
var checkPalindrome = removeChar.split('').reverse().join('');

if(removeChar === checkPalindrome){
  return true;
}else{
  return false;
}
}

console.log(palindrome('"Kajak"'));


