function isPalindrome(s: string): boolean {
    const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const reverseStr = str.split('').reverse().join('')
    return str === reverseStr
}

const IsPalindrome = isPalindrome("race a car");
console.log(IsPalindrome);


