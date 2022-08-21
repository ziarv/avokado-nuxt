export const getCartProductForOrder = state => {
  const rootCart = state.cart;
  if (rootCart.length > 0) {
    const cart = [];
    rootCart.forEach(item => {
      const obj = {
        id: item.id,
        qty: item.quantity
      };
      cart.push(obj);
    });
    return cart;
  }
  return [];
};
