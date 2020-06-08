import React from 'react';
import {useDispatch} from 'react-redux';
import {startAddingIncome, startEditingCountry} from './actions';

export function IPCs(props) {
  const dispatch = useDispatch();
  const country = props.country;
  const seasonYear = props.seasonYear;
  const turn = props.turn;

  const calculateIPCS = () => {
    let revenue = document.getElementById("revenue").value;
    let convoy = document.getElementById("convoy").value;
    let income = 0;
    if (convoy === "") {
      convoy = 0;
    }
    if (revenue === "") {
      revenue = 0;
    }
    income = revenue - convoy;
    editCountry(income);
    addIncome(country, revenue, convoy, seasonYear, turn);
  }

  const editCountry = (income) => {
    if (country.ipcs + income < 0) {
      dispatch(startEditingCountry({
        c_id: country.c_id,
        c_name: country.c_name,
        ipcs: 0,
      }));
    }
    else {
      dispatch(startEditingCountry({
        c_id: country.c_id,
        c_name: country.c_name,
        ipcs: country.ipcs + income,
      }));
    }
  }

  const addIncome = (country, revenue, lost, seasonYear, turn) => {
    dispatch(startAddingIncome(country.c_id, revenue, lost, seasonYear, turn));
  }

  return (
    <div>
      <div className="col-xs-12 col-sm-9">
        <p>Bonus IPCs coming soon</p>
      </div>

      <div className="col-xs-12 col-sm-3">
        <h2>Calculate IPCs</h2>
        <input type="text" id="revenue" placeholder="Enter IPC Revenue"/>
        <br/>
        <br/>
        <input type="text" id="convoy" placeholder="Enter Convoy Disruptions"/>
        <br/>
        <br/>
        <button type="button" onClick={() => calculateIPCS()}>Calculate</button>
      </div>
    </div>
  );
}