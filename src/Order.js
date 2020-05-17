import React from 'react';

export function Order(props) {
  const order = props.order;

  return (
    <div className="order">
      <p>{order.amount} x {order.name}</p>
    </div>
  );
}