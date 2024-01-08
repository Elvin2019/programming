function numberOfBeams(bank: string[]): number {
    let current=0
    let prev=0;
    let res=0;
  
    for(const row of bank){
        if(current){
            prev = current;
        }
        current = 0;
        for(const char of row){
            if(char === '1'){
                current++ ;
            }
        }
        console.log(current, prev)
      
        if(prev && current){
            // console.log(current, prev)
            res += prev * current
        }
       

        // if(!current){
        //     //ignore
        //     continue    
        // }

    }
    console.log(res)
    return res;
    
}



numberOfBeams(["011001", "000000", "010100", "001000"])