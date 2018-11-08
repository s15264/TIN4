		function binarySearch (arr, value) {
					let left = 0;
					let right = arr.length - 1;
					let mid = Math.floor((left + right) / 2);

					  while (arr[mid] !== value && left < right) {
						if (value < arr[mid]) {
						  right = mid - 1;
						} else {
						  left = mid + 1;
						}

						mid = Math.floor((left + right) / 2);
					  }

					if(arr[mid] !== value){
					return -1;
					}
					else{
					return mid;
					}
			
			}

			const arr = [2, 5, 8, 9, 13, 45, 67, 99];
			console.log(binarySearch(arr, 45));
