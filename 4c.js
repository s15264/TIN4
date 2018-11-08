function palindrome(p){

var checkPalindrome = p.split('').reverse().join('');

if(p === checkPalindrome){
  return true;
}else{
  return false;
}
}
console.log(palindrome('"kajak"'));
