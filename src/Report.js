import React from 'react';

export function Report(props) {
  const purchase = props.purchase;

  const countries = ["Germany", "Soviet Union", "Japan", "United States", "China", "United Kingdom Europe", "United Kingdom Pacific", "Italy", "ANZAC", "France"];

  return (
    <div className="purchaseBlock">
      <h1>{countries[purchase.c_id]}</h1>
      <h2>Unit: {purchase.p_name}</h2>
      <p>Amount: {purchase.amount}</p>
      <p>{purchase.season_year}</p>
      <p>Turn: {purchase.turn}</p>
    </div>
  );
}