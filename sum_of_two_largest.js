
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