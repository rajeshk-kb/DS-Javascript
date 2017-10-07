
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14, 15, 16, 17];

var first = 0;
var last = arr.length-1;
var search = 17;
var serchedElement = binarySearch(arr, first, last, search);
console.log(serchedElement)



function binarySearch(arr, first, last, search){
    if(last <= 0){
        return -1; // element not found
    }
    var mid = first+last;
    if(search == arr[mid]){
        return mid;
    }
    else if(search<arr[mid]){
        last = mid-1;
        binarySearch(arr, first, last, search)
    }
    else if(search>arr[mid]){
        first = mid+1;
        binarySearch(arr, first, last, search)
    }else{
        return 0;
    }
}