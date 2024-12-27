function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0, start = 0, seen = new Map();
    
    for (let end = 0; end < s.length; end++) {
      if (seen.has(s[end])) {
        start = Math.max(start, seen.get(s[end]) + 1);
      }
      seen.set(s[end], end);
      console.log(seen)
      console.log(end, start)
      maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
  }
  
  console.log(lengthOfLongestSubstring("abcabcbb"));
