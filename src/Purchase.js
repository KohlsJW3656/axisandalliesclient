import React from 'react';

export function Purchase(props) {
  const purchase = props.purchase;

  return (
    <div className="purchase">
      <p>{purchase.amount} x {purchase.p_name}</p>
    </div>
  );
}