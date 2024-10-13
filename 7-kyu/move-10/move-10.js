// option 1
function moveTen(s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let move10 = 'klmnopqrstuvwxyzabcdefghij';
    return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)]);
  }


// option 2

function moveTen(str){
    return str.toLowerCase().split('').map(char => {
      // Check if the character is a lowercase letter
      if (char >= 'a' && char <= 'z') {
        // Move character 10 places forward, wrapping around if necessary
        return String.fromCharCode(((char.charCodeAt(0) - 97 + 10) % 26) + 97);
      }
      // Return the character unchanged if it's not a letter
      return char;
    }).join('');
  }
//   Lowercase Letters (a-z):
//   Convert each letter to its ASCII code (charCodeAt(0)), shift it forward by 10 positions, and wrap around using the modulo operator (% 26).
//   Convert back to a character using String.fromCharCode().


// String.fromCharCode(((char.charCodeAt(0) - 97 + 10) % 26) + 97);
// Breakdown
// 1. char.charCodeAt(0):

// This method retrieves the ASCII (or Unicode) value of the character char at the specified index, which is 0 here (since we're only dealing with one character).
// For example, if char is 'a', char.charCodeAt(0) returns 97 (the ASCII code for 'a').
// If char is 'z', it returns 122 (the ASCII code for 'z').

// 2. - 97:

// This subtraction converts the ASCII value of the letter into a zero-based index for the alphabet.
// The letter 'a' (ASCII 97) becomes 0, 'b' (ASCII 98) becomes 1, and so on up to 'z' (ASCII 122) which becomes 25.
// So:
// For 'a': 97 - 97 = 0
// For 'z': 122 - 97 = 25

// 3. + 10:

// This adds 10 to the zero-based index calculated in the previous step.
// This effectively shifts the letter forward by 10 positions in the alphabet.
// For example:
// For 'a': 0 + 10 = 10 (which corresponds to the letter 'k')
// For 'z': 25 + 10 = 35 (which will be handled in the next step)

// 4. % 26:

// The modulo operator % 26 is used to wrap around the alphabet. Since there are 26 letters in the alphabet, this ensures that if the index exceeds 25, it wraps around to start from 0 again.
// Continuing from the previous example:
// For 'a': 10 % 26 = 10 (remains 10)
// For 'z': 35 % 26 = 9 (wraps around to 9, which corresponds to 'j')

// 5. + 97:

// This converts the zero-based index back to the ASCII value of the corresponding letter.
// By adding 97 to the index, we convert it back to the ASCII value of the lowercase letter.
// For example:
// For 'a' (which became 10): 10 + 97 = 107 (ASCII for 'k')
// For 'z' (which wrapped to 9): 9 + 97 = 106 (ASCII for 'j')

// 6. String.fromCharCode(...):

// Finally, this method takes the ASCII value computed in the previous step and converts it back to a character.
// For example:
// For 'k': String.fromCharCode(107) returns 'k'
// For 'j': String.fromCharCode(106) returns 'j'

//   Uppercase Letters (A-Z): Handled similarly to lowercase letters but with a different base (65 instead of 97). In this case ignore them by converting the string to the lower case but if necessary:
// if (char >= 'A' && char <= 'Z') {
//     return String.fromCharCode(((char.charCodeAt(0) - 65 + 10) % 26) + 65);
//   }