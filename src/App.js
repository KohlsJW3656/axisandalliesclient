import React, {useState, useEffect} from 'react';
import './App.css';
import {Header} from './Header';
import {Body} from './Body';
import {useSelector, useDispatch} from 'react-redux';
import {getCountry, getPurchase, getIncome, getCountryTurn, deletePurchase, deleteIncome, deleteCountryTurn} from './actions';
import {Report} from './Report';
import {IPCs} from './IPCs';

function App() {
  const dispatch = useDispatch();
  let [turn, setTurn] = useState(1);
  const seasons = ["Spring/Summer, ", "Fall/Winter, "];
  let [year, setYear] = useState(1940);
  let [seasonYear, setSeasonYear] = useState(seasons[0] + year);
  let [i, setI] = useState(0);

  const country = useSelector(state => state.country);
  const isWaiting = useSelector(state => state.isWaiting);
  const purchases = useSelector(state => state.purchases);
  const incomes = useSelector(state => state.incomes);
  const countryTurns = useSelector(state => state.countryTurns);

  useEffect(() => {
    dispatch(getCountry(i));
  }, [dispatch, i]);

  function leftArrow() {
    if (turn !== 1 || i !== 0) {
      if (i - 1 === -1) {
        setI(9);
        setTurn(turn => turn - 1);
        setDateBackward();
      }
      else {
        setI(i => i - 1);
      }
    }
  }
  
  function rightArrow() {
    if (i + 1 === 10) {
      setI(0);
      setTurn(turn => turn + 1);
      setDateForward();
    }
    else {
      setI(i => i + 1);
    }
  }

  function setDateBackward() {
    let tempTurn = turn - 1;
    if (tempTurn % 2 === 0) {
      setYear(year => year - 1);
      setSeasonYear(seasons[1] + (year - 1));
    }
    else {    
      setSeasonYear(seasons[0] + year);
    }
  }

  function setDateForward() {
    let tempTurn = turn - 1;
    if (tempTurn % 2 === 1) {
      setYear(year => year + 1);
      setSeasonYear(seasons[0] + (year + 1));
    }
    else {
      setSeasonYear(seasons[1] + year);
    }
  }

  const resetDatabase = () => {
    dispatch(deleteCountryTurn());
    dispatch(deleteIncome());
    dispatch(deletePurchase());
  }

  const viewReport = () => {
    dispatch(getCountryTurn());
    dispatch(getIncome());
    dispatch(getPurchase());
  }

  return (
    <div>
      <div id="headerRoot">
        <Header turn={turn} seasonYear={seasonYear} country={country} leftArrow={leftArrow} rightArrow={rightArrow} resetDatabase={resetDatabase} viewReport={viewReport}/>
      </div>
      {isWaiting && <div className="spinner" />}
      <div id="middleRoot" className="row">
        <Body country={country} seasonYear={seasonYear} turn={turn}/>
      </div>
      <div id="ipcRoot" className="row">
        <IPCs country={country} turn={turn} seasonYear={seasonYear}/>
      </div>
      <div id="reportRoot">
        {countryTurns.map(countryTurn => <Report key={countryTurn.c_id + "" + countryTurn.turn} countryTurn={countryTurn} purchases={purchases} incomes={incomes} />)}
        
        {/*([...new Set(purchases.map(purchase => ({c_id: purchase.c_id, cost: purchase.cost, turn: purchase.turn, season_year: purchase.season_year})).map(countryTurn => JSON.stringify(countryTurn)))].map(s => JSON.parse(s))).map(uniquePurchase => <Report key={uniquePurchase.c_id + "" + uniquePurchase.turn} uniquePurchase={uniquePurchase} incomes={incomes} purchases={purchases}/>)*/}
      </div>
      <div>
        <p className="center">&copy; 2020</p>
      </div>
    </div>
  );
}

export default App;