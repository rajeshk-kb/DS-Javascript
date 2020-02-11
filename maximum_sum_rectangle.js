
// Maximum sum rectangle in a 2D matrix | DP-27

class MaximumSumRectangle {
    // Function to find the maximum sum rectangular sub-matrix
    getMaximumSumRect(mat) {

        // Base case
        if(mat.length == 0)
            return 0

        const m = matrix.length; // rows
        const n = matrix[0].length; // columns

        let preSum = Array(m).fill(0); // Previous sum of column
        let cords = {
            maxSum: -Infinity,
            maxLeft: 0,
            maxRight: 0,
            maxUp: 0,
            maxDown: 0
        }
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                // Update preSum
                for (let k = 0; k < preSum.length; k++) {
                    preSum[k] = preSum[k] + matrix[k][j];
                }
                // Get longest sum contiguous array - Kedane's algorithm
                let values = this.getLongestSumCont(preSum);
                if (values.max > cords.maxSum) {
                    cords.maxSum = values.max;
                    cords.maxLeft = i;
                    cords.maxRight = j;
                    cords.maxUp = values.start;
                    cords.maxDown = values.end;
                }
            }
            preSum = Array(m).fill(0); // Clean preSum
        }
        return cords;
    }

    getLongestSumCont(arr) {
        let max_so_far = [0];
        let max_ending_here = 0;
        let start = 0;
        let end = 0;
        for (let i = 0; i < arr.length; i++) {
            max_ending_here = max_ending_here + arr[i];
            if (max_ending_here > max_so_far) {
                max_so_far = max_ending_here;
                end = i;
            }
            if (max_ending_here < 0) {
                max_ending_here = 0;
                start = start + 1;
            }
        }
        return { max: max_so_far, start: start, end: end }
    }

}


var msr = new MaximumSumRectangle();


let matrix = [
    [1, 2, -1, -4, -20],
    [-8, -3, 4, 2, 1],
    [3, 8, 10, 1, 3],
    [-4, -1, 1, 7, -6]
]
console.log(msr.getMaximumSumRect(matrix));