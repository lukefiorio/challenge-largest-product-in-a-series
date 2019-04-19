class LargestProduct {
  constructor(number) {
    this.number = number;
  }

  getLargestProduct() {
    let maxProduct = 0;
    for (let i = 0; i < this.number.length - 5; i++) {
      let maxProductCandidate = 1;
      for (let j = 0; j < 5; j++) {
        maxProductCandidate *= Number(this.number.charAt(i + j));
      }
      if (maxProductCandidate > maxProduct) {
        maxProduct = maxProductCandidate;
      }
    }
    return maxProduct;
  }

  getLargestProductPosition() {
    let maxProduct = 0;
    let position = 0;
    for (let i = 0; i < this.number.length - 5; i++) {
      let maxProductCandidate = 1;
      for (let j = 0; j < 5; j++) {
        maxProductCandidate *= Number(this.number.charAt(i + j));
      }
      if (maxProductCandidate > maxProduct) {
        maxProduct = maxProductCandidate;
        position = i;
      }
    }
    return position;
  }
}

module.exports = LargestProduct;
