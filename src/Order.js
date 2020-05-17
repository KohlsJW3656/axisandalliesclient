import React from 'react';

export function Order(props) {
  const order = props.order;

  return (
    <div className="order">
      <span className="amount">{order.amount}</span>
      <span> x </span>
      <span className="unit">{order.name}</span>
      <span className="deleteButton" onClick={() => props.remove(order.name)}>&#x2716;</span>
    </div>
  );
}