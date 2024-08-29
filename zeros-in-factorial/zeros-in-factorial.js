function zeros(n) {
    let count = 0;
    let powerOfFive = 5;

    while (n >= powerOfFive) {
        count += Math.floor(n / powerOfFive);
        powerOfFive *= 5;
    }

    return count;
}
