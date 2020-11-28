import React from 'react';

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div>
      <h1>this is cart item</h1>
    </div>
  );
};

export default CartItem;
