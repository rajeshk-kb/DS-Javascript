//https://practice.geeksforgeeks.org/problems/print-this-pattern/0

/*  n=4
 Output :
  4444444
  4333334
  4322234
  4321234
  4322234
  4333334
  4444444

n=3
   Output :
    33333
    32223
    32123
    32223
    33333 */



var num = 4;
var str = '';
var str1 = '';
var str2 = '';
for (var i = 0; i < num * 2 - 1; i++) {

  // sting repeated/top making
  for (var j = 0; j < num * 2 - 3 - i * 2 && i < num - 1; j++) {
    str = str + (num - i);
  }


  //sting left/right/ top making
  for (var k = 0; k < i + 1 && i < num - 1; k++) {
    str1 = str1 + (num - k);
    str2 = (num - k) + str2;
  }

  //sting mid making
  for (var m = 0; m < num - 1 && i == num - 1; m++) {
    str = '1'
    str1 = str1 + (num - m);
    str2 = (num - m) + str2;
  }


  // sting repeated/bottom making
  for (var j = 0; j < i * 2 - num * 2 + 1 && i > num - 1; j++) {
    str = str + (i - num + 2);
  }

  // sting left/right/ bottom making
  for (var k = 0; k < num * 2 - i - 1 && i > num - 1; k++) {
    str1 = str1 + (num - k);
    str2 = (num - k) + str2;
  }

  console.log(str1 + str + str2);
  str = str1 = str2 = '';
}