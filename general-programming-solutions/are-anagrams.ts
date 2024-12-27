function areAnagrams(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;
    const count: { [key: string]: number } = {};
    
    for (let char of str1) {
      count[char] = (count[char] || 0) + 1;
    }
    console.log(count)
    
    for (let char of str2) {
      if (!count[char]) return false;
      count[char]--;
      console.log(count)
    }
    
    return true;
  }
  
 console.log(areAnagrams('listene', 'silente'));