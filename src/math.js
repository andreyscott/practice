function sumAll(arr) {
    
    
   let largest = Math.max(...arr);
   let smallest = Math.min(...arr);
    let sum = arr.reduce((a, b) => a + b, 0);
    let sum = 0;
    for (let i = smallest; i <= largest; i++) {
        sum += i;
    }
    return sum;

  }
  
  sumAll([1, 4]);