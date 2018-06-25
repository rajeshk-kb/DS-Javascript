//Maximum Sum Path in Two Arrays
//  --AMAZON-
//https://www.geeksforgeeks.org/maximum-sum-path-across-two-arrays/
var arr1 = [2, 3, 7, 10, 12, 15, 30, 34]
var arr2 = [1, 5, 7, 8, 10, 15, 16, 19]

//Output: 122

var m = arr1.length;
var n = arr2.length;

var i = 0, j = 0, sum1 = 0, sum2 = 0, result = 0;

while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
        sum1 += arr1[i++];
    } else if (arr1[i] > arr2[j]) {
        sum2 += arr2[j++];
    } else {
        result += Math.max(sum1, sum2);
        sum1 = 0; sum2 = 0;
        while(i < m && j < n && arr1[i] == arr2[j]){
            result += arr1[i++];
            j++;
        }

    }
}

while(i<m){
    sum1 += arr1[i++];
}
while(j<m){
    sum2 += arr2[i++];
}
result += Math.max(sum1, sum2);
console.log(result)