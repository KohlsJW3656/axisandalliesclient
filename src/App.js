import React from 'react';
import './App.css';
import {Purchase} from './Purchase';
import {Header} from './Header';
import {useSelector, useDispatch} from 'react-redux';
import {loadPurchase, startAddingPurchase} from './actions';

function App() {

  const purchases = useSelector(state => state.purchases);
  const country = useSelector(state => state.country);
  const seasons = useSelector(state => state.seasons);
  let turn = useSelector(state => state.turn);
  let dateYear = useSelector(state => state.dateYear);
  let dateString = useSelector(state => state.dateString);
  
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
      turn--;
      setDateBackward();
    }
  }
  
  function rightArrow() {
    turn++;
    setDateForward()
  }

  function setDateForward() {
    if (turn === 1) {
      dateString = seasons[0] + " " +  dateYear; 
    }
    else {
      //If Spring/Summer set to Fall/Winter
      if (turn % 2 === 0) {
        dateString = seasons[1] + " " + dateYear;
      }
      else {
        dateYear++;
        dateString = seasons[0] + " " + dateYear; 
      }
    }
  }

  function setDateBackward() {
    if (turn % 2 === 0) {
      dateYear--;
      dateString = seasons[1] + " " + dateYear;
    }
    else {    
      dateString = seasons[0] + " " + dateYear;
    }  
  }

  return (
    <div>
      <div id="header-root">
        <Header turn={turn} dateString={dateString} country={country} leftArrow={leftArrow} rightArrow={rightArrow}/>
        {/* {countries.map(country=> <Header key={country.c_id} turnCounter={turnCounter} dateString={dateString} country={country} countrySelectLeftArrow={countrySelectLeftArrow} countrySelectRightArrow={countrySelectRightArrow}/>)} */}
      </div>

      <div id="purchase-root">
        <button onClick={onLoad}>Purchase</button>
        <button onClick={onAdd}>Order</button>
        {purchases.map(purchase=> <Purchase key={purchase.p_id} purchase={purchase} />)}
      </div>
    </div>
  );
}

export default App;