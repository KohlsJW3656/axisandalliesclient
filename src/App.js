import React, {useState, useEffect} from 'react';
import './App.css';
import {Header} from './Header';
import {Body} from './Body';
import {useSelector, useDispatch} from 'react-redux';
import {getCountry, getPurchase, getIncome, getCountryTurn, getCountryResearch, deletePurchase, deleteIncome, deleteCountryTurn, deleteCountryResearch} from './actions';
import {Report} from './Report';
import {IPCs} from './IPCs';
import {Research} from './Research';

function App() {
  const dispatch = useDispatch();
  const seasons = ["Spring/Summer, ", "Fall/Winter, "];
  const [turn, setTurn] = useState(3);
  const [year, setYear] = useState(1941);
  const [seasonYear, setSeasonYear] = useState(seasons[0] + year);
  const [i, setI] = useState(0);

  const countrySrc = ["germany", "sovietunion", "japan", "usa", "china", "ukeurope", "ukpacific", "italy", "anzac", "france"];

  const country = useSelector(state => state.country);
  const isWaiting = useSelector(state => state.isWaiting);
  const purchases = useSelector(state => state.purchases);
  const incomes = useSelector(state => state.incomes);
  const countryTurns = useSelector(state => state.countryTurns);
  const countryResearches = useSelector(state => state.countryResearches);

  useEffect(() => {
    dispatch(getCountryResearch());
    dispatch(getCountry(i));
  }, [dispatch, i]);

  useEffect(() => {
    setFavicon(i);
  });

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

  //function activeResearch() {
    //this.refs.Body.activeResearch(countryResearches);
  //}

  const resetDatabase = () => {
    dispatch(deleteCountryTurn());
    dispatch(deleteIncome());
    dispatch(deletePurchase());
    dispatch(deleteCountryResearch());
  }

  const viewReport = () => {
    dispatch(getCountryTurn());
    dispatch(getIncome());
    dispatch(getPurchase());
    dispatch(getCountryResearch());
  }

  const setFavicon = (i) => {
    document.getElementById("favicon").setAttribute("href", "images/icons/" + countrySrc[i] + ".png");
  }

  return (
    <div>
      <div id="headerRoot">
        <Header turn={turn} seasonYear={seasonYear} country={country} leftArrow={leftArrow} rightArrow={rightArrow} resetDatabase={resetDatabase} viewReport={viewReport}/>
      </div>
      {isWaiting && <div className="spinner" />}
      <div id="purchaseRoot" className="row">
        <Body country={country} seasonYear={seasonYear} turn={turn} countryResearches={countryResearches}/>
      </div>
      <div id="incomeRoot" className="row">
        <IPCs country={country} turn={turn} seasonYear={seasonYear}/>
      </div>
      <div id="researchRoot" className="row">
        <Research country={country} turn={turn} seasonYear={seasonYear} countryResearches={countryResearches} /*activeResearch={activeResearch}*//>
      </div>
      <div id="reportRoot">
        {countryTurns.map(countryTurn => <Report key={countryTurn.c_id + "" + countryTurn.turn} countryTurn={countryTurn} purchases={purchases} incomes={incomes} countryResearches={countryResearches}/>)}
      </div>
      <div>
        <p className="center">&copy; 2020 All rights reserved.<br/>This page is not authorized, endorsed or affiliated with Axis and Allies or its subsidiaries.</p>
      </div>
    </div>
  );
}

export default App;