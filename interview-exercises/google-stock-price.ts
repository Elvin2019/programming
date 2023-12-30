const stockPrices = [10, 7, 5, 8, 11, 9];

const getMaxProfit = (stockPrices:number[]):number =>{
  if(stockPrices.length < 2) return 0;
  let min = stockPrices[0];
  let max = 0;
  for(let i = 1; i < stockPrices.length; i++){
    max = Math.max(max, stockPrices[i] - min);
    min = Math.min(min, stockPrices[i]);
  }
  return max
}

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)
