function groupAnagrams(strs: string[]): string[][] {
    const wordMap = new Map();
    for(const s of strs){
        const sorted = s.split('').sort().join('');
        if(wordMap.has(sorted)){
            wordMap.set(sorted, [...wordMap.get(sorted), s])
        }
        else{
            wordMap.set(sorted, [s])
        }
    }
    const res: string[][] = []
    wordMap.forEach((value, key) => {
        res.push(value)
    })
    return res;
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])

function groupAnagrams_2(strs: string[]): string[][] {
    let map = new Map<string, string[]>();
    for (let s of strs) {
        let charFreq = Array.from({ length: 26 }, () => 0);
        for (let i = 0; i < s.length; i++)charFreq[s.charCodeAt(i) - 97]++;
        let keyStr = charFreq.toString();
        console.log(keyStr)
        if (!map.has(keyStr)) map.set(keyStr, []);
        map.get(keyStr)?.push(s);
    }
    console.log(map)
    return Array.from(map.values());
}
groupAnagrams_2(["eat", "tea", "tan", "ate", "nat", "bat"])