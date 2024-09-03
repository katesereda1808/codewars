function solution(string) {
    const arr = [];

    for (let i = 0; i < string.length; i++) {
        let curLetter = string[i];

        if (curLetter === curLetter.toUpperCase()) {
            arr.push(' ');
        }
        arr.push(curLetter);
    };

    return arr.join('');
}
