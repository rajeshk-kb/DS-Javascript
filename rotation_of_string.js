// http://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/


// A Program to check if strings are rotations of each other or not

(function() {
    var string1 = 'ABCDE';
    var string2 = 'DEAB';
    var string3 = string1 + string1;

    if (string3.indexOf(string2) != -1) {
        // Strings are rotations of each other
        console.log("yes")
    } else {
        // Strings are not rotations of each other
        console.log("No")
    }
})();