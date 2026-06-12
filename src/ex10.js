/**
 * Create a summary of shopping cart items.
 * @param {{name: string, price: number, quantity: number}[]} items
 * @returns {{itemCount: number, totalQuantity: number, totalPrice: number}}
 */
function createCartSummary(items) {
  if(items === undefined){
    throw new Error('Cart cannot be undefined')
  } else if(!Array.isArray(items)){
    throw new Error('Cart must be an array')
  }
    
  items.forEach((item) => {
    if(item.name === undefined || item.price === undefined || item.quantity === undefined){
      throw new Error('Each item must have a name, price, and quantity')
    } 
    
    if(typeof item.price !== 'number' || typeof item.quantity !== 'number'){
    throw new Error('Price and quantity must be numbers');
  } else if(item.price < 0 || item.quantity < 0){
    throw new Error('Price and quantity cannot be negative') 
  } 
  })

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
