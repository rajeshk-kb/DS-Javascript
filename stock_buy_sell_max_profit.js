// https://www.geeksforgeeks.org/cpp-program-for-stock-buy-sell-to-maximize-profit/

function stockbuySell(price, n){
    // Prices must be given for at 
     // least two days
     if (n == 1)
         return;
   
     // Traverse through given price array
     let i = 0;
     while (i < n - 1) 
     {
         // Find Local Minima
         // Note that the limit is (n-2) as we are
         // comparing present element to the next element
         while ((i < n - 1) && 
                (price[i + 1] <= price[i]))
             i++;
   
         // If we reached the end, break
         // as no further solution possible
         // Anyway if have the stock at this index, we can't sell that
         if (i == n - 1)
             break;
   
         // Store the index of minima
         let buy = i++;
   
         // Find Local Maxima
         // Note that the limit is (n-1) as we are
         // comparing to previous element
         while ((i < n) && 
                (price[i] >= price[i - 1]))
             i++;
   
         // Store the index of maxima
         let sell = i - 1;
   
         console.log("Buy on day: ", buy, " Sell on day: ", sell);
     }
 }
 
 let stockPrice = [100, 180, 260, 310, 40, 535, 695];
 let n = stockPrice.length;
 stockbuySell(stockPrice, n);