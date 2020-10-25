import React from 'react';
import {Unit} from './Unit';

export function Report(props) {
  const countryTurn = props.countryTurn;
  const countryResearches = props.countryResearches;
  const purchases = props.purchases;
  const incomes = props.incomes;
  const countries = ["Germany", "Soviet Union", "Japan", "United States", "China", "UK Europe", "UK Pacific", "Italy", "ANZAC", "France"];
  const backgroundSrc = ["germany.png", "sovietunion.png", "japan.png", "unitedstates.png", "china.png", "ukeurope.png", "ukpacific.png", "italy.png", "anzac.png", "france.png"];
  const flagSrc = ["germany.png", "sovietunion.jpg", "japan.png", "usa.jpg", "china.png", "ukeurope.png", "ukpacific.png", "italy.png", "anzac.jpg", "france.jpg"];
  const backgroundClass = ["backgroundGermany", "backgroundSovietUnion", "backgroundJapan", "backgroundUnitedStates", "", "", "", "", "", "backgroundFrance"];
  let flag, background;
  
  const purchaseTurnCountry = purchases.filter(purchase => purchase.c_id === countryTurn.c_id && purchase.turn === countryTurn.turn);

  if (countryTurn.c_id !== undefined) {
    flag = "images/flags/" + flagSrc[countryTurn.c_id];
    background = "images/background/" + backgroundSrc[countryTurn.c_id];
  }

  return (
    <div className="report">
      <div className="rowReport">
        <div className="col-xs-12 col-sm-10">
          <h1>{countries[countryTurn.c_id]}<img className="flag" src={flag} alt="Country Flag"/></h1>
        </div>
        <div className="col-xs-12 col-sm-2">
          <h3 className="right">{countryTurn.season_year}</h3> 
          <h3 className="right">Turn: {countryTurn.turn}</h3>
        </div>
      </div>
      <div className="purchaseReport">
        <h2>Purchased: <span>{purchaseTurnCountry.map(purchaseTurnCountry => <Unit key={purchaseTurnCountry.p_name} purchase={purchaseTurnCountry}/>)}</span></h2>
        <p>IPCs Spent: {Math.max.apply(null, purchaseTurnCountry.map(purchaseTurnCountry => purchaseTurnCountry.cost))}</p>
      </div>
      <img className={backgroundClass[countryTurn.c_id] + " backgroundImage"} src={background} alt="Country background"/>
      <div className="incomeReport">
        {incomes.filter(income => countryTurn.c_id === income.c_id && income.turn === countryTurn.turn).map(countryIncome => 
          <div key={countryIncome.c_id + countryIncome.turn}>
            <h2>Income Statement</h2>
            <h3>Revenue</h3>
            <p>Base: {countryIncome.base}</p>
            <p>Bonus: {countryIncome.bonus}</p>
            <p>Research: {countryIncome.research}</p>
            <p className="reportTotal">Total Revenue: {countryIncome.base + countryIncome.bonus + countryIncome.research}</p>
            <h3>Expenses</h3>
            <p>Convoy Disruptions: {countryIncome.convoy}</p>
            <p className="reportTotal">Total Expenses: {countryIncome.convoy}</p>
            <h3>New IPC Amount: {}</h3>
          </div>)}
      </div>
      {(countryResearches.filter(research => countryTurn.c_id === research.c_id && countryTurn.turn === research.turn).length >= 1) &&
      <div className="researchReport">
          <h2>Research Aquired</h2>
          {countryResearches.filter(research => countryTurn.c_id === research.c_id && countryTurn.turn === research.turn).map(countryResearch =>
          <p key={countryResearch.c_id + countryResearch.r_id}>
            {countryResearch.r_id}
          </p>)}
      </div>
      }
    </div>
  );
}
