function calculateTotalEarnings(initialMonthlyEarnings: number, increaseRate: number, years: number): number {
    let annualEarnings: number = initialMonthlyEarnings * 12;
    let totalEarnings: number = 0;
  
    for (let year: number = 1; year <= years; year++) {
      totalEarnings += annualEarnings; 
      annualEarnings *= (1 + increaseRate);
    }
  
    return totalEarnings;
  }
  
  // Example usage
  const initialMonthlyEarnings: number = 250;
  const increaseRate: number = 0.07; // 7% annual increase
  const years: number = 18;
  const totalEarnings: number = calculateTotalEarnings(initialMonthlyEarnings, increaseRate, years);
  
  console.log("Total earnings over 18 years: ", totalEarnings);
  