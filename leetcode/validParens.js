function isValid (s) {
  const stack = [];
  const chars = s.split("");
  const dict = {
    '(' : ')',
    '{' : '}',
    '[' : ']',
  };

  for (let i = 0; i < chars.length; i++) {
    if (dict[chars[i]]) {
      stack.push(chars[i]);
    } else if (chars[i] === dict[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return (!stack.length)
}



console.log(isValid('[{()}]'))