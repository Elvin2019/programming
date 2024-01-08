function isAnagram(s: string, t: string): boolean {
   for(const c of s){
       if(t.indexOf(c) < 0) return false
       t = t.replace(c,'')
   }
   return t.length === 0
};
