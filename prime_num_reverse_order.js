// Print prime numbers from 1 to N in reverse order
// https://www.geeksforgeeks.org/print-prime-numbers-1-n-reverse-order/
var num = 25;
var is_prime = false;
var prime = [];//boolean

for (let i = 0; i < num; i++) {
    prime[i] = true;
}

for (let i = 2; i*i <= num; i++) {
    if(prime[i] == true){
        for(var j = i*2; j<=num; j += i){
            prime[j] = false;
        }
    }
}

for (var k = num; k >=2 ; k--) {
    if(prime[k] == true){
        console.log(k)
    }
}