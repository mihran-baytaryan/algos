/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

const highestProfit = stock => {

    if (!Array.isArray(stock)) return 0;
    const min = {val: stock[0], index: 0};
    let profit = 0;

    for (let i = 0; i < stock.length; i++) {
        if (stock[i] < min.val) {
            min.val = stock[i];
            min.index = i;
        }
        if (stock[i] > min.val && i > min.index && stock[i]- min.val > profit) {
            profit = stock[i] - min.val;
        }
    }

    return profit;

}


module.exports = {highestProfit}