function findLongest(str) {
	const stringArray = str.split(" ");
	const longestWord = stringArray.reduce((a, b) => {

	if(b.length > a.length){
	return b;
	}else{
	return a;
	}

});
return longestWord;
}

console.log(findLongest("e)	Write a JavaScript function that accepts a string as a parameter and find the longest word within the string"));
