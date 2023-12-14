function strStr(haystack: string, needle: string): number {
    const parts = haystack.split(needle)
    if(parts.length === 1){
        return -1
    }
    for(let i=0; i< parts.length; i++){
        if(parts[i] === '' ){
            return i
        }
        if(parts[i]){
            return parts[i].length
        }
        return -1
     }
     return -1;
};

console.log(strStr("leetcode", "leeto"));
