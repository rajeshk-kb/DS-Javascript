

var points = [[-1, 1], [0, 0], [1, 1], [2, 2], [3, 3], [2, 2], [10, 10], [3, 4]];
maxPoints(points);
function maxPoints(points){
  if (points == null || points.length === 0) return 0;

  let max = 0;
  for (let i = 0; i < points.length; i++) {
    const map = {};
    let samePointCount = 0;
    let sameSlopeCount = 0;

    for (let j = i + 1; j < points.length; j++) {
      if (isEqual(points[i], points[j])) {
        // console.log(points[i], points[j], '--')
        samePointCount++;
        continue;
      }

      const slope = getSlope(points[i], points[j]);
      // console.log(slope)
      if (map[slope] == null){
        map[slope] = 0;
      }

       map[slope]++;
      // console.log(map)
      sameSlopeCount = Math.max(sameSlopeCount, map[slope]);
    }
    max = Math.max(max, sameSlopeCount + samePointCount + 1);
  }
  return max;
};

function isEqual([x1, y1], [x2, y2]){
 return (x1 === x2 && y1 === y2);
} 

function getSlope([x1, y1], [x2, y2]){
  if (x1 === x2) return Infinity;
  return 1000000000000 * (y1 - y2) / (x1 - x2); // overcome JavaScript division precision issue by multiplying a large number
};



// ref :  https://www.geeksforgeeks.org/count-maximum-points-on-same-line/
