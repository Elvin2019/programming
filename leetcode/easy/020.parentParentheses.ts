function isValid(s: string): boolean {
  const map: { [key: string]: string } = {')': '(', '}': '{', ']': '['}
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.length || stack[stack.length - 1] !==  map[s[i]]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }
  return stack.length === 0;
}
