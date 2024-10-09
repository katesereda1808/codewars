function squareDigits(num) {
  return Number(
    String(num)
      .split("")
      .map((num) => Math.pow(Number(num), 2))
      .join("")
  );
}
