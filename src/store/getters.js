export const orderTotalPrice = (state) => {
  let total = 0;
  state.orderDetails.forEach((item) => (total += item.price * item.quantity));
  return total;
};

export const toTalProducts = (state) => {
  return state.products.length;
};


