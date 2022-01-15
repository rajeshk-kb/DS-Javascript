
    function getMaxArea(hist, n) {
        let s = [];
        let max_area = 0; // Initialize max area
        let tp;  // To store top of stack
        let area_with_top; // To store area with top bar as the smallest bar
        // Run through all bars of given histogram
        let i = 0;
        while (i < n)
        {
            let peak = s[s.length-1];
            if (s.length == 0 || hist[peak] <= hist[i]){
                s.push(i);
                i = i+1;
            } else {
                tp = s[s.length-1];  // store the top index
                s.pop();  // pop the top
      
                // Calculate the area with hist[tp] stack as smallest bar
                let peak2 = s[s.length-1];
                let b = (s.length == 0 ? i : i - peak2 - 1);
                area_with_top = hist[tp] * b;
                // update max area, if needed
                if (max_area < area_with_top){
                     max_area = area_with_top;
                }
            }
        }
      
        // Now pop the remaining bars from stack and calculate area with every
        // popped bar as the smallest bar
        while (s.length != 0)
        {
            tp = s[s.length-1]
            s.pop();
             let peak3 = s[s.length-1];
            area_with_top = hist[tp] * (s.length == 0 ? i : i - peak3 - 1);
      
            if (max_area < area_with_top)
                max_area = area_with_top;
        }
        return max_area;
    }
        
    let hist = [6, 2, 5, 4, 5, 1, 6];
    document.write("Area of maximum rectangle is "+ getMaxArea(hist, hist.length));