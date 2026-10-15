function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, item, quantity) {
  if(quantity===0 || item.stock < quantity)
    {
      throw new RangeError();
    }
  const targetItem = cart.find(it => it.id === item.id);
  if(targetItem){
    targetItem.quantity+=quantity;
  }else{
  cart.push({...item,quantity })
}
   return cart; }
function changeQuantity(cart, id, quantity) { 
  const targetItem = cart.find(it => it.id === id);
  if(targetItem){
    if(quantity===0 || targetItem.stock < quantity)
      {
        throw new RangeError();
      }
  
    targetItem.quantity=quantity;
  }
  return cart; }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
