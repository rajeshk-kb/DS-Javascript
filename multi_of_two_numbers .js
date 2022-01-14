function Muilt(a, b){
    // initialize result
  let res = 0; 
  while (b > 0){
      if ((b & 1) != 0){
          res = res + a;
      }
      a = a<<1;
      b = b>>1;
  }
  return res;
}

let result = Muilt(7, 3);

console.log("Result : ", result);