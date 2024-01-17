function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map();
    for(const num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }
    const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, k).map(el => el[0])
};

export default topKFrequent;

topKFrequent([1,1,1,2,2,3, 4, 4, 4, 4, 4], 2)


function topKFrequent_2(nums: number[], k: number): number[] {
    const freqMap = new Map()
    
    nums.forEach((num)=>{
        // create a map with number as key and frequency as value 
        return freqMap.get(num) ? freqMap.set(num, freqMap.get(num) + 1) : freqMap.set(num, 1)
    })
    
    let bucket: Array<Array<number>> = Array(nums.length)
    // bucket hold an array of array; the index of the item indicates the frequency i.e. bucket[2] showed up twice 
    console.log(freqMap)
    freqMap.forEach((value, key) => {
        // put the numbers with same freq in the same bucket 
        bucket[value] ? bucket[value].push(key) : bucket[value] = [key]
    })
    console.log(bucket)
    // flat the bucket and return the last k elements
    return bucket.flat().slice(-k)
};

topKFrequent_2([1,1,1,2,2,3, 4, 4, 4, 4, 4], 2)
