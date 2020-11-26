import React from 'react';

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