function generateCombinations(str) {
  function helper(prefix, remaining) {
    if (remaining.length === 0) {
      console.log(prefix);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        helper(prefix + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
      }
    }
  }

  helper('', str);
}
