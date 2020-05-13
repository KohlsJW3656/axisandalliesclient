import React from 'react';
import './App.css';
import {Purchase} from './Purchase';
import {useSelector, useDispatch} from 'react-redux';
import {loadPurchase, startAddingPurchase} from './actions';

function App() {

  const purchases = useSelector(state => state.purchases);
  const dispatch = useDispatch();

  const onLoad = () => {
    dispatch(loadPurchase());
  };

  const onAdd = () => {
    dispatch(startAddingPurchase(0, 2, 0, "Spring/Summer 1940", 1));
  }

  return (
    <div id="purchase-root">
      <button onClick={onLoad}>Purchase</button>
      <button onClick={onAdd}>Order</button>
      {purchases.map(purchase=> <Purchase key={purchase.p_id} purchase={purchase} />)}
    </div>
  );
}

export default App;