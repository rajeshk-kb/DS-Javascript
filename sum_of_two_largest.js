
(function () {
    var arr = [10, 20, 9, 21, 28, 19, -15, 25, -8];

    var first_largest_element = arr[0];
    var second_largest_element = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] >= first_largest_element) {
            second_largest_element = first_largest_element;
            first_largest_element = arr[i];
        }
        if (arr[i] > second_largest_element && arr[i] < first_largest_element) {
            second_largest_element = arr[i];
        }
    }
    
    console.log("First largest value : "+first_largest_element)
    console.log("Second largest value : "+second_largest_element)
    console.log("Sum of two largest value : "+(first_largest_element +second_largest_element))

})(); 




// Add without using +
 function Add(x, y) 
    { 
        // Iterate till there is no carry 
        while (y != 0)  { 
            // carry now contains common 
            // set bits of x and y 
            var carry = x & y; 
  
            
            // Sum of bits of x and  
            // y where at least one  
            // of the bits is not set 
            x = x ^ y; 
  
            // Carry is shifted by  
            // one so that adding it  
            // to x gives the required sum 
            y = carry << 1; 
        } 
        return x; 
    } 
      
console.log(Add(15, 32)); 







