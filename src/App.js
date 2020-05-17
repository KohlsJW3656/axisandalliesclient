import React, {useState, useEffect} from 'react';
import './App.css';
//import {Purchase} from './Purchase';
import {Header} from './Header';
import {Body} from './Body';
import {useSelector, useDispatch} from 'react-redux';
import {getCountry} from './actions';

function App() {
  const dispatch = useDispatch();
  let [turn, setTurn] = useState(1);
  const seasons = ["Spring/Summer", "Fall/Winter"];
  let [dateYear, setDateYear] = useState(1940);
  let [dateString, setDateString] = useState(seasons[0] + " " + dateYear);
  let [i, setI] = useState(0);

  const country = useSelector(state => state.country);

  //setTurn(1);
  //setDateYear(1940);
  //setDateString(seasons[0] + " " + dateYear);

  useEffect(() => {
    dispatch(getCountry(i));
  }, [dispatch, i]);
  
  const displayCountry = () => {
    dispatch(getCountry(i));
  };

  // const onAdd = () => {
  //   dispatch(startAddingPurchase(0, 2, 0, "Spring/Summer 1940", 1));
  // }

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
      setDateString(seasons[1] + " " + dateYear);
    }
    else {    
      setDateString(seasons[0] + " " + dateYear);
    }  
  }

  function setDateForward() {
    if (turn === 1) {
      setDateString(seasons[0] + " " + dateYear);
      console.log("Turn 1");
    }
    else {
      //If Spring/Summer set to Fall/Winter
      console.log(turn % 2);
      if (turn % 2 === 0) {
        setDateString(seasons[1] + " " + dateYear);
        console.log("Turn % 2 === 0");
        console.log(dateYear);
        console.log(dateString);
      }
      else {
        console.log("Turn % 2 !=== 0");
        console.log(dateYear);
        console.log(dateString);
        setDateYear(dateYear => dateYear + 1);
        setDateString(seasons[0] + " " + dateYear);
        console.log(dateYear);
        console.log(dateString);
      }   
    }
    console.log(dateYear);
    console.log(dateString);
  }

  return (
    <div>
      <div id="header-root">
        <Header turn={turn} dateString={dateString} country={country} leftArrow={leftArrow} rightArrow={rightArrow}/>
        {/* {countries.map(country=> <Header key={country.c_id} turnCounter={turnCounter} dateString={dateString} country={country} countrySelectLeftArrow={countrySelectLeftArrow} countrySelectRightArrow={countrySelectRightArrow}/>)} */}
      </div>

      <div id="middle-root" className="row">
        <Body country={country}/>
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