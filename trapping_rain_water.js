// https://www.geeksforgeeks.org/trapping-rain-water/


var arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log('rajesh')
findWater(arr);
function findWater(arr){

    var ln = arr.length;

    var left = [];

    var right = [];

    var water = 0;

    left[0] = arr[0];;
    for(var i = 1; i<ln; i++){
        left[i] = Math.max(left[i-1], arr[i]);
        // console.log(left[i], "===")
    }

    right[ln-1] = arr[ln-1];;
    for(var i = ln-2; i>=0; i--){
        right[i] = Math.max(right[i+1], arr[i]);
       
    }

    for(var i = 0; i<ln; i++){
        water += Math.min(left[i], right[i]) - arr[i];
    }

    console.log(arr);
    console.log(left);
    console.log(right);
    console.log(water);


    // initialize output 
    var result = 0;
  
    // maximum element on left and right 
    var left_max = 0;
    var right_max = 0; 
  
    // indices to traverse the array 
    var lo = 0;
    var hi = ln - 1; 
  
    while (lo <= hi) { 
        if (arr[lo] < arr[hi]) { 
            if (arr[lo] > left_max) 
                // update max in left 
                left_max = arr[lo]; 
            else
                // water on curr element = max - curr 
                result += left_max - arr[lo]; 

          console.log(lo, hi, left_max,right_max, result, '--<')

            lo++; 
        } 
        else { 
            if (arr[hi] > right_max) 
                // update right maximum 
                right_max = arr[hi]; 
            else
                result += right_max - arr[hi]; 


          console.log(lo, hi, left_max, right_max, result, "==>")

            hi--; 
        } 
    } 
    console.log(result);
}