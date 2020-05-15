import React, {useState} from 'react';
import './App.css';
import {Purchase} from './Purchase';
import {Header} from './Header';
import {useSelector, useDispatch} from 'react-redux';
import {loadPurchase, startAddingPurchase} from './actions';

function App() {
  let [turn, setTurn] = useState(1);
  const seasons = ["Spring/Summer", "Fall/Winter"];
  let [dateYear, setDateYear] = useState(1940);
  let [dateString, setDateString] = useState("Spring/Summer 1940");
  
  const purchases = useSelector(state => state.purchases);
  const country = useSelector(state => state.country);
  //let turn = useSelector(state => state.turn);
  
  const dispatch = useDispatch();

  const onLoad = () => {
    dispatch(loadPurchase());
  };

  /*
  const getCountry = () => {
    
  }
  */
  const onAdd = () => {
    dispatch(startAddingPurchase(0, 2, 0, "Spring/Summer 1940", 1));
  }

  function leftArrow() {
    if (turn - 1 !== -1) {
      setTurn(turn--);
      //setDateBackward();
    }
  }
  
  function rightArrow() {
    setDateForward();
    setTurn(turn++);
  }

  function setDateBackward() {
    if (turn % 2 === 0) {
      setDateYear(dateYear--);
      setDateString(seasons[1] + " " + dateYear);
    }
    else {    
      setDateString(seasons[0] + " " + dateYear);
    }  
  }

  function setDateForward() {
    //If Spring/Summer set to Fall/Winter
    if (turn % 2 === 0) {
      setDateString(seasons[1] + " " + dateYear);
    }
    else {
      setDateYear(dateYear++);
      setDateString(seasons[0] + " " + dateYear);
    }   
  }

  return (
    <div>
      <div id="header-root">
        <Header turn={turn} dateString={dateString} country={country} leftArrow={leftArrow} rightArrow={rightArrow}/>
        {/* {countries.map(country=> <Header key={country.c_id} turnCounter={turnCounter} dateString={dateString} country={country} countrySelectLeftArrow={countrySelectLeftArrow} countrySelectRightArrow={countrySelectRightArrow}/>)} */}
      </div>

      {/*<div id="purchase-root">
        <button onClick={onLoad}>Purchase</button>
        <button onClick={onAdd}>Order</button>
        {purchases.map(purchase=> <Purchase key={purchase.p_id} purchase={purchase} />)}
  </div>*/}
    </div>
  );
}

export default App;