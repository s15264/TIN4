	function isPrime(x){
		if (x===1){
		return false;
		}
		if (x===2){
		return true;
		}
		else{
		for(var i = 2; i < x; i++){
			if(x % i == 0){ 
			return false;
			}	
			if (x !== 1 && x !== 0){
			return true;
			}
		}
		}
}
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
