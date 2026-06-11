/**
 * Create a summary of shopping cart items.
 * @param {{name: string, price: number, quantity: number}[]} items
 * @returns {{itemCount: number, totalQuantity: number, totalPrice: number}}
 */
function createCartSummary(items) {
  if(typeof price !== 'number' || typeof quantity !== 'number'){
    return 'Price and quantity must be numbers'
  } else if(price < 0 || quantity < 0){
    return 'Price and quantity cannot be negative'
  }
    
  

  return {
    itemCount: items.length,
    totalQuantity: items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    ),
  };
}

module.exports = createCartSummary;
