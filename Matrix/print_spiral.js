
// Create matrix in spriral fill
var matrix = [];
var k = 0;
for (var i = 0; i < 4; i++) {
    var mat = [];
    for (var j = 0; j < 4; j++) {
        mat.push(k);
        // k++;
    }
    matrix.push(mat);
}

console.log(matrix);

var m = 4;// matrix rows
var n = 4; // matrix cols

var k = 0; // start row
var l = 0; // start cal
var val = 1;

while(k<m && l<n){
  for(var i = l; i<n; i++){
    matrix[k][i] = val++;
  }
  k++;

  for(var i = k; i<m;i++){
    matrix[i][n-1] = val++;
  }
  n--;


if(k<m){
  for(var i = n-1; i>=l; i--){
    matrix[m-1][i] = val++;
  }
  m--;
}

if(l<n){
  for(var i = m-1; i>=k; i--){
    matrix[i][l] = val++;
  }
  l++;
}

}

console.log(matrix);


// Print a given matrix in spiral
// ex - 1, 2, 3, 5, ....25....

var m = 4;// matrix rows
var n = 4; // matrix cols

var k = 0; // start row
var l = 0; // start cal

var output = [];

while(k < m && l < n){

  for(var i = l; i<n; i++){
    output.push(matrix[k][i]);
  }
  k++;

  for(var i = k; i<m; i++){
    output.push(matrix[i][n-1]);
  }
  n--;

  if(k<m){
    for(var i = n-1; i>=l; i--){
      output.push(matrix[m-1][i]);
    }
    m--
  }
  if(l<n){
    for(var i = m-1; i>=k; i--){
      output.push(matrix[i][l])
    }
    l++;
  }

}

console.log(output.join(' '));
