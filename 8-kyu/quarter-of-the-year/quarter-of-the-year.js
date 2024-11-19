// solution #1
const quarterOf = (month) => {
    // Your code here
    if(month <= 3) {
      return 1;
    }
    if(month <= 6) {
      return 2;
    }
    if(month <= 9){
      return 3;
    }
    return 4;
}

// solution #2
// const quarterOf = m => Math.ceil(m/3);