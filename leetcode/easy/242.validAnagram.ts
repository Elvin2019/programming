
//version 1 complexity O(n^2). and O(1) space
function isAnagram_1(s: string, t: string): boolean {
    for(const c of s){
        if(t.indexOf(c) < 0) return false
        t = t.replace(c,'')
    }
    return t.length === 0
 };


//version 2 complexity O(n) and O(n) space  
function isAnagram_2(s: string, t: string): boolean {
  let res = new Map();

  for (const c of s) {
    res.set(c, (res.get(c) || 0) + 1);
  }
  for (const c of t) {
    res.set(c, (res.get(c) || 0) - 1);
  }

  return [...res.values()].every((x) => x === 0);
}
