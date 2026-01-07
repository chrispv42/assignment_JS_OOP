// Payment class
class Payment {
  constructor(payerName, amount, method, date) {
    this.payerName = payerName;
    this.amount = amount;
    this.method = method;
    this.date = date;
  }

  // Returns the summary of payment
  getSummary() {
    return `${this.payerName} paid $${this.amount} using ${this.method}.`;
  }

  // Checks if the payment is considered large
  isLargePayment() {
    return this.amount > 100;
  }
}

// Creating payment objects
const payment1 = new Payment('Alice', 150, 'Credit Card', new Date());
const payment2 = new Payment('John', 75, 'PayPal', new Date());
const payment3 = new Payment('Sarah', 200, 'Debit Card', new Date());

// Example usage
console.log(payment1.getSummary());
console.log(payment1.isLargePayment());

console.log(payment2.getSummary());
console.log(payment2.isLargePayment());

console.log(payment3.getSummary());
console.log(payment3.isLargePayment());
