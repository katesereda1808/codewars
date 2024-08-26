function isAlt(word) {
    if (word.length <= 1) return true;

    const vowels = 'a, e, i, o, u';
    let prevIsVowel = vowels.includes(word[0]);

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (vowels.includes(letter) === prevIsVowel) return false;

        prevIsVowel = vowels.includes(letter);
    }
}
