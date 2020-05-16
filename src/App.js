import React, {useState} from 'react';
import './App.css';
//mport {Purchase} from './Purchase';
import {Header} from './Header';
import {Table} from './Table';
import {useSelector, useDispatch} from 'react-redux';
import {getCountry} from './actions';

function App() {
  const dispatch = useDispatch();
  let [turn, setTurn] = useState(1);
  const seasons = ["Spring/Summer", "Fall/Winter"];
  let [dateYear, setDateYear] = useState(1940);
  let [dateString, setDateString] = useState("Spring/Summer 1940");

  const country = useSelector(state => state.country);
  //let turn = useSelector(state => state.turn);
  
  

  const onLoad = () => {
    dispatch(getCountry(0));
  };

  /*
  const getCountry = () => {
    
  }
  */
  // const onAdd = () => {
  //   dispatch(startAddingPurchase(0, 2, 0, "Spring/Summer 1940", 1));
  // }

  function leftArrow() {
    if (turn - 1 !== 0) {
      setTurn(turn => turn - 1);
      setDateBackward();
    }
  }
  
  function rightArrow() {
    setTurn(turn => turn + 1);
    setDateForward();
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
    //If Spring/Summer set to Fall/Winter
    if (turn % 2 === 0) {
      setDateString(dateString => seasons[1] + " " + dateYear);
    }
    else {
      setDateYear(dateYear => dateYear + 1);
      setDateString(dateString => seasons[0] + " " + dateYear);
    }   
  }

  return (
    <div>
      <div id="header-root">
        <Header turn={turn} dateString={dateString} country={country} leftArrow={leftArrow} rightArrow={rightArrow}/>
        {/* {countries.map(country=> <Header key={country.c_id} turnCounter={turnCounter} dateString={dateString} country={country} countrySelectLeftArrow={countrySelectLeftArrow} countrySelectRightArrow={countrySelectRightArrow}/>)} */}
      </div>

      <div id="middle-root" className="row">
        <div className="col-2" id="unitColumn">
          <h2 id="costDisplay">Total Cost: 0</h2>
          <h3 id="purchasingPower">Purchasing Power: </h3>
          <button id="purchaseButton" type="button" onClick="purchaseButton()">Purchase</button>
          <button id="clearButton" type="button" onClick="clearButton()">Clear</button>
          <h3>Ordered:</h3>
          <div id="unitDisplay"></div>
          <h3>Purchased:</h3>
          <div id="purchasedDisplay"></div>
        </div>
        <Table country={country}/>
      </div>

      {/*<div id="purchase-root">
        <button onClick={onLoad}>Purchase</button>
        <button onClick={onAdd}>Order</button>
        {purchases.map(purchase=> <Purchase key={purchase.p_id} purchase={purchase} />)}
  </div>*/}
  <button onClick={onLoad}>Load</button>
    </div>
  );
}

export default App;