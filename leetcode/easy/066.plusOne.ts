function plusOne(digits: number[]): number[] {
    const n = digits.length;
    let carry = 1;
  
    for (let i = n - 1; i >= 0; i--) {
      digits[i] += carry;
      if (digits[i] <= 9) {
        // No carry-over, so we can return the updated digits
        return digits;
      }
      digits[i] = 0;
    }
  
    // If we reach here, it means there was a carry-over from the most significant digit
    digits.unshift(1);
    return digits;
  }
  