// PayPal

// Replace element of an Array with nearest bigger number at right side of the Array in O(n) 
// For example if the input Array is 
// 7, 5, 6, 3, 4, 1, 2, 9, 11 
// output array should be 
// 9, 6, 9, 4, 9, 2, 9, 11, 11

// https://stackoverflow.com/questions/22233018/in-an-unsorted-array-replace-every-element-by-the-first-larger-element-to-the-r

//  Amazon --  http://www.geeksforgeeks.org/next-greater-element/
var arr = [7, 5, 6, 3, 4, 1, 2, 9, 11];

var N = arr.length;
var S = [];
S.push(arr[N - 1]);
arr[N - 1] = -1;

for (var i = N - 2; i >= 0; i--) {
    console.log("S")
    while (S.length != 0) {
        if(S[S.length - 1] >= arr[i]){
            var temp = S[S.length - 1];
            S.push(arr[i]);
            arr[i] = temp;
            break;
        }else{
            S.pop();
        }
        
    }
    if(S.length == 0){
        S.push(arr[i]);
        arr[i] = -1;
    }
}

console.log()
console.log(arr)







// Replace every element with the greatest element on right side
// http://www.geeksforgeeks.org/replace-every-element-with-the-greatest-on-right-side/

var arr = [3, 1, 2, 9, 8];

var length = arr.length;
var max_from_right = arr[length - 1];
arr[length - 1] = -1;

for (var i = length - 2; i >= 0; i--)  -[]
{
    var temp = arr[i];

    arr[i] = max_from_right;

    if (temp > max_from_right) {
        max_from_right = temp;
    }
}

//console.log(arr)




var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
  // sort by value
  items.sort(function (a, b) {
    return a.value - b.value;
  });


  console.log(items)