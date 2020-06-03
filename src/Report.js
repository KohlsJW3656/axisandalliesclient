import React from 'react';
import {Unit} from './Unit';

export function Report(props) {
  const purchases = props.purchases;
  const uniquePurchase = props.uniquePurchase;
  const countries = ["Germany", "Soviet Union", "Japan", "United States", "China", "UK Europe", "UK Pacific", "Italy", "ANZAC", "France"];

  return (
    <div className="report">
      <h1>{countries[uniquePurchase.c_id]}</h1>
      <p>Units: <span>{purchases.filter(purchase => purchase.c_id === uniquePurchase.c_id && purchase.turn === uniquePurchase.turn).map(purchaseTurnCountry => <Unit key={purchaseTurnCountry.p_name} purchase={purchaseTurnCountry}/>)}</span></p>
      <p>{uniquePurchase.season_year}</p>
      <p>Turn: {uniquePurchase.turn}</p>
    </div>
  );
}
