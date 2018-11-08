function IFactorial(x){
var a = 1;
	for(i=1;i<=x;i++){
		a *= i;	
	}
	return a;

	}

function  RFactorial(n){
	if (n <= 1) return 1;
	return n * RFactorial(n - 1);
}


console.log(IFactorial(4));
console.log(RFactorial(5));

