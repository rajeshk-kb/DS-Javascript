function gcd(a, b) 
{ 
    if (b == 0) 
        return a; 
    
    console.log(a, b,  a % b)
    return gcd(b, a % b);  
}


console.log(gcd(98, 56));


// See this also
// https://www.geeksforgeeks.org/gcd-two-array-numbers/