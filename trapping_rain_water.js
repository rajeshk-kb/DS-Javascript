// https://www.geeksforgeeks.org/trapping-rain-water/




var arr = [2, 0, 2];



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
    }

    right[ln-1] = arr[ln-1];;
    for(var i = ln-2; i>=0; i--){
        right[i] = Math.max(right[i+1], arr[i]);
    }

    for(var i = 0; i<ln; i++){
        water += Math.min(left[i], right[i]) - arr[i];
    }

    console.log(left)
    console.log(right)
    console.log(water)
}