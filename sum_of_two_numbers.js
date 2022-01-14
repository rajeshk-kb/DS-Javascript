function Add(a, b){
    while (b != 0){
        let sum = a^b; // sum
        let carry = (a&b)<<1;
        a = sum;
        b = carry;
    }
    return a;
}

let result = Add(5, 10);

console.log("Sum : ", result);