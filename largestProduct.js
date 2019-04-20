class LargestProduct {
  constructor(number) {
    this.number = number;
    this.maxProduct = 0;
    this.position = 0;

    for (let i = 0; i < number.length - 5; i++) {
      let maxProductCandidate = 1;

      for (let j = 0; j < 5; j++) {
        maxProductCandidate *= Number(number.charAt(i + j));
      }

      if (maxProductCandidate > this.maxProduct) {
        this.maxProduct = maxProductCandidate;
        this.position = i;
      }
    }
  }

  getLargestProduct() {
    return this.maxProduct;
  }

  getLargestProductPosition() {
    return this.position;
  }
}

module.exports = LargestProduct;
