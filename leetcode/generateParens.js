var generateParenthesis = function(n) {
  const result = [];
  compose(n,n);

  function compose (l, r, str = '') {
    if (!l && !r && str.length) {
      result.push(str)
    }

    if (l) {
      compose(l - 1, r, str + '(')
    }

    if (l < r) {
      compose(l, r - 1, str + ')')
    }
  }
  return result;
};
