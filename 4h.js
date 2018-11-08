function second(arr) {
	console.log(arr);
	arr.sort(function(a, b){return a - b});
	console.log(arr[1]);
	console.log(arr[arr.length-2]);
}

var num = [3, 21, 6, 4, 2, 1, 3, 12, 2];
second(num);

