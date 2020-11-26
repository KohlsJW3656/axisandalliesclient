import React from 'react';

export function Order(props) {
  const order = props.order;

  return (
    <div className="order">
      <span>{order.amount}</span>
      <span> x </span>
      <span>{order.name}</span>
      <span className="deleteButton" onClick={() => props.remove(order.name, order.amount, order.cost)}>&#x2716;</span>
    </div>
  );
}

export function Purchase(props) {
  const purchase = props.purchase;

  return (
    <div className="purchase">
      <span>{purchase.amount}</span>
      <span> x </span>
      <span>{purchase.name}</span>
    </div>
  );
}