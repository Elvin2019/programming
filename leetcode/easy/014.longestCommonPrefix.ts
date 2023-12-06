function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
      const currentString = strs[i];
      let j = 0;
      
      while (j < prefix.length && j < currentString.length && prefix[j] === currentString[j]) {
        j++;
      }
      
      prefix = prefix.slice(0, j);
      
      if (prefix === '') {
        return prefix;
      }
    }
    
    return prefix;
  }
