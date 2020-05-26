import React, {useState, useEffect} from 'react';
import './App.css';
import {Header} from './Header';
import {Body} from './Body';
import {useSelector, useDispatch} from 'react-redux';
import {getCountry, getPurchase, deletePurchase} from './actions';
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
      setDateYear(dateYear => dateYear - 1);
      setDateString(seasons[1] + " " + (dateYear - 1));
    }
    else {    
      setDateString(seasons[0] + " " + dateYear);
    }  
  }

  function setDateForward() {
    let tempTurn = turn + 1;
    if (tempTurn === 1) {
      setDateString(seasons[0] + " " + dateYear);
    }
    else {
      if (tempTurn % 2 === 1) {
        setDateYear(dateYear => dateYear + 1);
        setDateString(seasons[0] + " " + (dateYear + 1));
      }
      else {
        setDateString(seasons[1] + " " + dateYear);
      }
    }
  }

  const resetPurchases = () => {
    dispatch(deletePurchase());
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
        {purchases.map(purchase => <Report key={Math.random()  * (+1000 - +1) + +1000} purchase={purchase}/>)}
      </div>
      <div>
        <p className="center">&copy; 2020</p>
      </div>
    </div>
  );
}

export default App;