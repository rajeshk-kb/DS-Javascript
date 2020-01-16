function gcd(a, b) 
{ 
    if (b == 0) 
        return a; 
    
    // console.log(a, b,  a % b)
    return gcd(b, a % b);  
}


console.log(gcd(98, 56));





// GCD of array

// Function to find gcd of array of 
// numbers 


var arr = [2, 4, 6, 8]
console.log(findGCD(arr, 4));

function findGCD(arr, n) 
{ 
    var result = arr[0]; 
    for (var i = 1; i < n; i++) 
    { 
        result = gcd(arr[i], result); 
  
        if(result == 1) 
        { 
           return 1; 
        } 
    } 
    return result; 
}

// See this also
// https://www.geeksforgeeks.org/gcd-two-array-numbers/