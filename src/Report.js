import React from 'react';
import {Unit} from './Unit';

export function Report(props) {
  const countryTurn = props.countryTurn;
  const purchases = props.purchases;
  const incomes = props.incomes;
  const countries = ["Germany", "Soviet Union", "Japan", "United States", "China", "UK Europe", "UK Pacific", "Italy", "ANZAC", "France"];

  const purchaseTurnCountry = purchases.filter(purchase => purchase.c_id === countryTurn.c_id && purchase.turn === countryTurn.turn);

  return (
    <div className="report">
      <h1>{countries[countryTurn.c_id]}</h1>
      <h2>Units: <span>{purchaseTurnCountry.map(purchaseTurnCountry => <Unit key={purchaseTurnCountry.p_name} purchase={purchaseTurnCountry}/>)}</span></h2>
      <p>IPCs Spent: {purchaseTurnCountry.cost}</p>
      <div>
        <h2>Income Statement</h2>
        {incomes.filter(income => countryTurn.c_id === income.c_id && income.turn === countryTurn.turn).map(countryIncome => 
          <div>
            <h3>Revenue</h3>
            <p>Base: {countryIncome.base}</p>
            <p>Bonus: {countryIncome.bonus}</p>
            <p>Research: {countryIncome.research}</p>
            <p>Total Revenue: {countryIncome.base + countryIncome.bonus + countryIncome.research}</p>
            <h3>Expenses</h3>
            <p>Convoy Disruptions: {countryIncome.convoy}</p>
            <p>Total Expenses: {countryIncome.convoy}</p>
          </div>)}
      </div>
      <h3>{countryTurn.season_year}</h3> 
      <h3>Turn: {countryTurn.turn}</h3>
    </div>
  );
}
