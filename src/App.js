import React, {useState, useEffect} from 'react';
import './App.css';
//import {Purchase} from './Purchase';
import {Header} from './Header';
import {Body} from './Body';
import {useSelector, useDispatch} from 'react-redux';
import {getCountry, getPurchase} from './actions';
import {Report} from './Report';

function App() {
  const dispatch = useDispatch();
  let [turn, setTurn] = useState(1);
  const seasons = ["Spring/Summer", "Fall/Winter"];
  let [dateYear, setDateYear] = useState(1940);
  let [dateString, setDateString] = useState(seasons[0] + " " + dateYear);
  let [i, setI] = useState(0);

  const country = useSelector(state => state.country);
  const isWaiting = useSelector(state => state.isWaiting);
  const purchases = useSelector(state => state.purchases);

  useEffect(() => {
    dispatch(getCountry(i));
  }, [dispatch, i]);
  
  const displayCountry = () => {
    dispatch(getCountry(i));
  };

  function leftArrow() {
    if (turn !== 1 || i !== 0) {
      if (i - 1 === -1) {
        setI(i => 9);
        setTurn(turn => turn - 1);
        setDateBackward();
      }
      else {
        setI(i => i - 1);
      }
      displayCountry();
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
    displayCountry();
  }

  function setDateBackward() {
    if (turn % 2 === 0) {
      setDateYear(dateYear => dateYear - 1);
      setDateString(dateString => seasons[1] + " " + dateYear);
    }
    else {    
      setDateString(dateString => seasons[0] + " " + dateYear);
    }  
  }

  function setDateForward() {
    if (turn === 1) {
      setDateString(dateString => seasons[0] + " " + dateYear);
    }
    else {
      //If Spring/Summer set to Fall/Winter
      if (turn % 2 === 0) {
        setDateString(dateString => seasons[1] + " " + dateYear);
      }
      else {
        setDateYear(dateYear => dateYear + 1);
        setDateString(dateString => seasons[0] + " " + dateYear);
      }
    }
  }

  const resetPurchases = () => {

  }

  const viewPurchases = () => {
    dispatch(getPurchase());
  }

  return (
    <div>
      <div id="headerRoot">
        <Header turn={turn} dateString={dateString} country={country} leftArrow={leftArrow} rightArrow={rightArrow} resetPurchases={resetPurchases} viewPurchases={viewPurchases}/>
      </div>
      {isWaiting && <div className="spinner" />}
      <div id="middleRoot" className="row">
        <Body country={country} dateString={dateString} turn={turn}/>
      </div>
      <div id="reportRoot">
        {purchases.map(purchase => <Report purchase={purchase}/>)}
      </div>
    </div>
  );
}

export default App;