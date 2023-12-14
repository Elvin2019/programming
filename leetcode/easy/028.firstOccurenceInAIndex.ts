function strStr(haystack: string, needle: string): number {
    if( haystack.split(needle).length === 1){
        return -1
    }
    for(let i=0; i< haystack.split(needle).length; i++){
        if(haystack.split(needle)[i] === '' ){
            return i
        }
        if(haystack.split(needle)[i]){
            return haystack.split(needle)[i].length
        }
        return -1
     }
     return -1;
};
