function isPalindrome(s: string): boolean {
    const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const reverseStr = str.split('').reverse().join('')
    return str === reverseStr
}

let IsPalindrome = isPalindrome("race a car");
console.log(IsPalindrome);



const isAlphaNumeric = (c: string, i: number) => {
    const code = c.charCodeAt(i);
    return (
        (code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123) // lower alpha (a-z)
    );
}

const isPalindrome_2 = (s: string): boolean => {
    let left = 0
    let right = s.length - 1
    while (left < right) {
        while (left < right && !isAlphaNumeric(s, left)) {
            left++
        }
        while (left < right && !isAlphaNumeric(s, right)) {
            right--
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false
        }
        left++
        right--
    }
    return true
}

IsPalindrome = isPalindrome("race a car");
console.log(IsPalindrome);
