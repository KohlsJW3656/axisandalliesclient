import React from 'react';
import {useDispatch} from 'react-redux';
import {startAddingIncome, startEditingCountry} from './actions';

export function IPCs(props) {
  const dispatch = useDispatch();
  const country = props.country;
  const seasonYear = props.seasonYear;
  const turn = props.turn;

  const calculateIPCS = () => {
    let base = document.getElementById("base").value;
    let checkBoxes = document.getElementsByClassName("checkBox");
    let research = 0 //document.getElementById("research");
    let convoy = document.getElementById("convoy").value;
    let bonus = 0;
    let income = 0;
    if (base === "") {
      base = 0;
    }
    for (let i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i].checked) {
        bonus+= parseInt(checkBoxes[i].value);
      }
    }
    if (research === "") {
      research = 0;
    }
    if (convoy === "") {
      convoy = 0;
    }

    income = parseInt(base) + parseInt(bonus) + parseInt(research)- parseInt(convoy);
    editCountry(income);
    addIncome(country, base, bonus, research, convoy, seasonYear, turn);
    document.getElementById("base").value = "";
    document.getElementById("convoy").value = "";
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

  const addIncome = (country, base, bonus, research, convoy, seasonYear, turn) => {
    dispatch(startAddingIncome(country.c_id, base, bonus, research, convoy, seasonYear, turn));
  }

  return (
    <div>
      {country.c_id === 0 &&
        <div className="col-xs-12 col-sm-9">
          <input type="checkbox" value="5" className="checkBox"/><span>5 IPCs when Germany is not at war with the Soviet Union.</span>
          <p>When Germany is at War with the Soviet Union:</p>
          <input type="checkbox" value="5" className="checkBox"/><span>5 IPCs if Germany controls Leningrad.</span><br/>
          <input type="checkbox" value="5" className="checkBox"/><span>5 IPCs if Germany controls Stalingrad.</span><br/>
          <input type="checkbox" value="5" className="checkBox"/><span>5 IPCs if Germany controls Moscow.</span><br/>
          <input type="checkbox" value="5" className="checkBox"/><span>5 IPCs if an Axis power controls Caucasus.</span>
          <p>When Germany is at War with the United Kingdom and France:</p>
          <input type="checkbox" value="5" className="checkBox"/><span>5 IPCs if at least 1 German land unit is in Axis-controlled Egypt.</span><br/>
          <input type="checkbox" value="5" className="checkBox"/><span>5 IPCs if Germany controls both Denmark and Norway, while Sweden is neither pro-Allies, nor Allied-controlled.</span><br/>
          <input type="checkbox" value="2" className="checkBox"/><span>2 IPCs if Germany controls Iraq.</span><br/>
          <input type="checkbox" value="2" className="checkBox"/><span>2 IPCs if Germany controls Persia.</span><br/>
          <input type="checkbox" value="2" className="checkBox"/><span>2 IPCs if Germany controls Northwest Persia.</span>
        </div>
      }

      <div className="col-xs-12 col-sm-3">
        <h2>Calculate IPCs</h2>
        <input type="text" id="base" placeholder="Enter IPC Base Amount"/>
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