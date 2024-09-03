// Solution 1
function longest(s1, s2) {
  const mergedArr = (s1 + s2).split("");
  const sorted = mergedArr.sort();

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      sorted.splice(i, 1);
      i--;
    }
  }

  return sorted.join("");
}

// Solution 2
// Here we use Set. It's used to store only unique values, so any duplicate letters will automatically be removed.
// Spread operator (...): This is used to convert the set back into an array.

function longest(s1, s2) {
  const combined = s1 + s2;
  const uniqueChars = [...new Set(combined)];

  uniqueChars.sort();
  return uniqueChars.join("");
}
