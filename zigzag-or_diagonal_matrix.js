
// https://www.geeksforgeeks.org/zigzag-or-diagonal-traversal-of-matrix/




var arr = [[1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [19, 21, 30, 52]]

  var ROW = 5;
  var COL = 4;

  console.log(arr)

  for (var k = 0; k < ROW; k++) {
    process.stdout.write(arr[k][0] + " ");
    var i = k - 1;    // set row index for next point in diagonal 
    var j = 1;       //  set column index for   next point in diagonal 
    /* Print Diagonally upward */
    while (isValid(i, j)) {
      process.stdout.write(arr[i][j] + " ");
      i--;
      j++;    // move in upright direction 
    }

    console.log("");
  }


  // Note : we start from k = 1 to C-1; 
  for (var k = 1; k < COL; k++) {
    process.stdout.write(arr[ROW - 1][k] + " ");
    var i = ROW - 2; // set row index for next  point in diagonal 
    var j = k + 1; // set column index for  next point in diagonal 

    /* Print Diagonally upward */
    while (isValid(i, j)) {
      process.stdout.write(arr[i][j] + " ");
      i--;
      j++; // move in upright direction 
    }
    console.log("");
  }

  function isValid(i, j) {
    if (i < 0 || i >= ROW || j >= COL || j < 0) return false;
    return true;

  }
