function Subtract(a, b){
    while (b != 0){
        let sum = a^b; // sum
        let borrow = (~a)&b << 1;
        a = sum;
        b = borrow;
    }
    return a;
}

let result = Subtract(15, 7);

console.log("Result : ", result);