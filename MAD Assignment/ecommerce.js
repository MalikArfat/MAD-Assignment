// Initialize an empty cart
let cart = [];

// 1. Add Items to the Cart
const addItemToCart = (productId, productName, quantity, price) => {
  const newProduct = { productId, productName, quantity, price };
  cart.push(newProduct);
};

// 2. Remove and Update Items
const removeItemFromCart = (productId) => {
  const index = cart.findIndex((product) => product.productId === productId);
  if (index !== -1) {
    cart.splice(index, 1);
  }
};

const updateItemQuantity = (productId, newQuantity) => {
  const product = cart.find((product) => product.productId === productId);
  if (product) {
    product.quantity = newQuantity;
  }
};

// 3. Calculate Total Cost
const calculateTotalCost = () => {
  return cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
};

// 4. Display Cart Summary
const generateCartSummary = () => {
  const cartSummary = cart
    .filter((product) => product.quantity > 0)
    .map((product) => ({
      productName: product.productName,
      quantity: product.quantity,
      totalPrice: product.price * product.quantity,
    }));
  return cartSummary;
};

// 5. Bonus (Optional): Apply Discount Code
const applyDiscountCode = (discountCode) => {
  const discountAmount = getDiscountAmount(discountCode);
  return calculateTotalCost() - discountAmount;
};

const getDiscountAmount = (discountCode) => {
  // Implement logic to retrieve discount amount based on discount code
  // For demonstration purposes, assume a 10% discount for code "SUMMER10"
  if (discountCode === "SUMMER10") {
    return calculateTotalCost() * 0.1;
  }
  return 0;
};

// Example usage:
addItemToCart(1, "EarPods", 2, 10.99);
addItemToCart(2, "C-type Charger", 1, 5.99);
addItemToCart(3, "Mobile Phone", 3, 7.99);

console.log("Cart Summary:");
console.log(generateCartSummary());

removeItemFromCart(2);
console.log("Cart Summary after removing Product B:");
console.log(generateCartSummary());

updateItemQuantity(1, 3);
console.log("Cart Summary after updating Product A quantity:");
console.log(generateCartSummary());

console.log("Total Cost:", calculateTotalCost());

console.log("Total Cost with discount code SUMMER10:", applyDiscountCode("SUMMER10"));