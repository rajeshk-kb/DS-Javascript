// Given an array of integers, write a function that returns true if there is 
// a triplet (a, b, c) that satisfies a2 + b2 = c2.

var arr = [3, 1, 4, 6, 5]

// Use Sorting



let output = pythagoreanTriplet(arr);

console.log(output?'Triplet found':'Triplte not found')


function pythagoreanTriplet(arr){

	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i]*arr[i];
	}

	arr.sort((a, b)=> {return a-b});

	const len = arr.length;

	for (var i = len-1; i >=0; i--) {
		var l = 0;
		var r = i-1;

		while(l<r){
			 // triplet found here..
			if(arr[l]+arr[r] == arr[i]){
				return true;
			}else if(arr[l]+arr[r] < arr[i]){
				l++;
			}else{
				r--;
			}
		}
	}
	return false;

}


// Ref : https://www.geeksforgeeks.org/find-pythagorean-triplet-in-an-unsorted-array/

