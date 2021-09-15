import React from "react";
import { useDispatch } from "react-redux";
import {
  startAddingIncome,
  startAddingCountryTurn,
  startEditingCountry,
} from "./actions";

export function IPCs(props) {
  const dispatch = useDispatch();
  const country = props.country;
  const seasonYear = props.seasonYear;
  const turn = props.turn;

  const calculateIPCS = () => {
    let base = document.getElementById("base").value;
    let checkBoxes = document.getElementsByClassName("checkBox");
    let research = 0; //document.getElementById("research");
    let convoy = document.getElementById("convoy").value;
    let bonus = 0;
    let income = 0;
    if (base === "") {
      base = 0;
    }
    for (let i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i].checked) {
        bonus += parseInt(checkBoxes[i].value);
      }
    }
    if (country.c_id === 1) {
      bonus += parseInt(document.getElementById("russianSelect").value);
    }
    if (research === "") {
      research = 0;
    }
    if (convoy === "") {
      convoy = 0;
    }

    income =
      parseInt(base) + parseInt(bonus) + parseInt(research) - parseInt(convoy);
    addIncome(
      country,
      parseInt(base),
      parseInt(bonus),
      parseInt(research),
      parseInt(convoy),
      turn
    );
    editCountry(income);
    document.getElementById("base").value = "";
    document.getElementById("convoy").value = "";
  };

  const editCountry = (income) => {
    if (country.ipcs + income < 0) {
      dispatch(
        startEditingCountry({
          c_id: country.c_id,
          c_name: country.c_name,
          ipcs: 0,
        })
      );
    } else {
      dispatch(
        startEditingCountry({
          c_id: country.c_id,
          c_name: country.c_name,
          ipcs: country.ipcs + income,
        })
      );
    }
  };

  const addIncome = (country, base, bonus, research, convoy, turn) => {
    dispatch(
      startAddingIncome(country.c_id, base, bonus, research, convoy, turn)
    );
    dispatch(startAddingCountryTurn(country.c_id, turn, seasonYear));
  };

  return (
    <div>
      {country.c_id === 0 && (
        <div className="col-xs-12 col-sm-9">
          <input type="checkbox" value="5" className="checkBox" />
          <span>5 IPCs when Germany is not at war with the Soviet Union.</span>
          <p>When Germany is at War with the Soviet Union:</p>
          <input type="checkbox" value="5" className="checkBox" />
          <span>5 IPCs if Germany controls Leningrad.</span>
          <br />
          <input type="checkbox" value="5" className="checkBox" />
          <span>5 IPCs if Germany controls Stalingrad.</span>
          <br />
          <input type="checkbox" value="5" className="checkBox" />
          <span>5 IPCs if Germany controls Moscow.</span>
          <br />
          <input type="checkbox" value="5" className="checkBox" />
          <span>5 IPCs if an Axis power controls Caucasus.</span>
          <p>When Germany is at War with the United Kingdom and France:</p>
          <input type="checkbox" value="5" className="checkBox" />
          <span>
            5 IPCs if at least 1 German land unit is in Axis-controlled Egypt.
          </span>
          <br />
          <input type="checkbox" value="5" className="checkBox" />
          <span>
            5 IPCs if Germany controls both Denmark and Norway, while Sweden is
            neither pro-Allies, nor Allied-controlled.
          </span>
          <br />
          <input type="checkbox" value="2" className="checkBox" />
          <span>2 IPCs if Germany controls Iraq.</span>
          <br />
          <input type="checkbox" value="2" className="checkBox" />
          <span>2 IPCs if Germany controls Persia.</span>
          <br />
          <input type="checkbox" value="2" className="checkBox" />
          <span>2 IPCs if Germany controls Northwest Persia.</span>
        </div>
      )}
      {country.c_id === 1 && (
        <div className="col-xs-12 col-sm-9">
          <p>When the Soviet Union is at War in Europe:</p>
          <input type="checkbox" value="5" className="checkBox" />
          <span>
            5 IPCs if the convoy in sea zone 125 is free of Axis warchips,
            Archangel is controlled by the Soviet Union, and there are no units
            belonging to other Allied powers present in any territories
            originally controlled by the Soviet Union.
          </span>
          <br />
          <select id="russianSelect">
            <option value="0">0 territories</option>
            <option value="3">1 territory</option>
            <option value="6">2 territories</option>
            <option value="9">3 territories</option>
            <option value="12">4 territories</option>
            <option value="15">5 territories</option>
            <option value="18">6 territories</option>
            <option value="21">7 territories</option>
            <option value="24">8 territories</option>
            <option value="27">9 territories</option>
            <option value="30">10 territories</option>
            <option value="33">11 territories</option>
            <option value="36">12 territories</option>
            <option value="39">13 territories</option>
            <option value="42">14 territories</option>
            <option value="45">15 territories</option>
            <option value="48">16 territories</option>
            <option value="51">17 territories</option>
            <option value="54">18 territories</option>
            <option value="57">19 territories</option>
            <option value="60">20 territories</option>
            <option value="63">21 territories</option>
            <option value="66">22 territories</option>
            <option value="69">23 territories</option>
            <option value="72">24 territories</option>
            <option value="75">25 territories</option>
          </select>
          <span>
            {" "}
            3 IPCs for each original German, Italian, or pro-Axis neutral
            territory that the Soviet Union controls
          </span>
          <br />
          <input type="checkbox" value="10" className="checkBox" />
          <span>10 IPCs the first time the Soviet Union controls Berlin.</span>
        </div>
      )}
      {country.c_id === 2 && (
        <div className="col-xs-12 col-sm-9">
          <input type="checkbox" value="10" className="checkBox" />
          <span>
            10 IPCs if Japan is not at war with the United States, has not
            attacked French Indo-China, and has not made an unprovoked
            declaration of war against the United Kingdom or ANZAC.
          </span>
          <p>
            When Japan Is at War with the Western Allies (United States, United
            Kingdom/ANZAC and/or France):
          </p>
          <input type="checkbox" value="5" className="checkBox" />
          <span>
            5 IPCs if Axis powers control all of the following territories:
            Guam, Midway, Wake Island, Gilbert Islands, and Solomon Islands.
          </span>
          <br />
          <input type="checkbox" value="5" className="checkBox" />
          <span>5 IPCs if Axis powers control Calcutta.</span>
          <br />
          <input type="checkbox" value="5" className="checkBox" />
          <span>5 IPCs if Axis powers control Sydney.</span>
          <br />
          <input type="checkbox" value="5" className="checkBox" />
          <span>5 IPCs if Axis powers control Honolulu.</span>
          <br />
          <input type="checkbox" value="5" className="checkBox" />
          <span>5 IPCs if Axis powers control San Francisco.</span>
          <br />
          <input type="checkbox" value="5" className="checkBox" />
          <span>
            5 IPCs if Axis powers control all of the following territories:
            Sumatra, Java, Borneo, and Celebes.
          </span>
        </div>
      )}
      {country.c_id === 3 && (
        <div className="col-xs-12 col-sm-9">
          <p>When the United States Is at War:</p>
          <input type="checkbox" value="10" className="checkBox" />
          <span>
            10 IPCs if the United States controls all of the following
            territories: Eastern United States, Central United States, and
            Western United States.
          </span>
          <br />
          <input type="checkbox" value="5" className="checkBox" />
          <span>
            5 IPCs if the United States controls all of the following
            territories: Alaks, Aleutian Islands, Hawaiian Islands, Johnston
            Island, and Line Islands.
          </span>
          <br />
          <input type="checkbox" value="5" className="checkBox" />
          <span>
            5 IPCs if the United States controls all of the following
            territories: Mexico, South Eastern Mexico, Central America, and West
            Indies.
          </span>
          <br />
          <input type="checkbox" value="5" className="checkBox" />
          <span>5 IPCs if the United States controls Philippines.</span>
          <br />
          <input type="checkbox" value="5" className="checkBox" />
          <span>
            5 IPCs if there is at least 1 United States land unit in the
            territory France.
          </span>
        </div>
      )}
      {country.c_id === 4 && (
        <div className="col-xs-12 col-sm-9">
          <input type="checkbox" value="6" className="checkBox" />
          <span>
            6 IPCs if the Burma Road is totally open (India, Burma, Yunnan, and
            Szechwan), and China can purchase artillery units.
          </span>
        </div>
      )}
      {country.c_id === 5 && (
        <div className="col-xs-12 col-sm-9">
          <input type="checkbox" value="5" className="checkBox" />
          <span>
            5 IPCs if the United Kingdom controls all of its original
            territories.
          </span>
        </div>
      )}
      {country.c_id === 6 && (
        <div className="col-xs-12 col-sm-9">
          <input type="checkbox" value="5" className="checkBox" />
          <span>
            5 IPCs if the United Kingdom is at war with Japan and controls both
            Kwangtung and Malaya.
          </span>
        </div>
      )}
      {country.c_id === 7 && (
        <div className="col-xs-12 col-sm-9">
          <p>When Italy Is at War:</p>
          <input type="checkbox" value="5" className="checkBox" />
          <span>
            5 IPCs if Axis powers control at least 3 of the following
            territories: Gibraltar, Southern France, Greece, and Egypt.
          </span>
          <br />
          <input type="checkbox" value="5" className="checkBox" />
          <span>
            5 IPCs if there are no Allied surface warships in the Mediterranean
            sea (sea zones 92 through 99).
          </span>
          <br />
          <input type="checkbox" value="5" className="checkBox" />
          <span>
            5 IPCs if Axis powers control all of the following territories:
            Morocco, Algeria, Tunisia, Libya, Tobruk, and Alexandria.
          </span>
          <br />
          <input type="checkbox" value="2" className="checkBox" />
          <span>2 IPCs if Italy controls Iraq.</span>
          <br />
          <input type="checkbox" value="2" className="checkBox" />
          <span>2 IPCs if Italy controls Persia.</span>
          <br />
          <input type="checkbox" value="2" className="checkBox" />
          <span>2 IPCs if Italy controls Northwest Persia.</span>
        </div>
      )}
      {country.c_id === 8 && (
        <div className="col-xs-12 col-sm-9">
          <p>When ANZAC Is at War with Japan:</p>
          <input type="checkbox" value="5" className="checkBox" />
          <span>
            5 IPCs if an Allied power controls Malaya and ANZAC controls all of
            its original territories.
          </span>
          <br />
          <input type="checkbox" value="5" className="checkBox" />
          <span>
            5 IPCs if the Allies (not including the Dutch) control Dutch New
            Guinea, New Guinea, New Britain, and the Solomon Islands.
          </span>
        </div>
      )}
      {country.c_id === 9 && (
        <div className="col-xs-12 col-sm-9">
          <p>
            When the territory France is liberated by the Allies, the player
            controlling France immediately places their choice of up to 12 IPCs'
            worth of any French units on the territory France for free. This
            happens only once per game.
          </p>
        </div>
      )}

      <div className="col-xs-12 col-sm-3">
        <h2>Calculate IPCs</h2>
        <input type="text" id="base" placeholder="Enter IPC Base Amount" />
        <br />
        <br />
        <input type="text" id="convoy" placeholder="Enter Convoy Disruptions" />
        <br />
        <br />
        <button type="button" onClick={() => calculateIPCS()}>
          Calculate
        </button>
      </div>
    </div>
  );
}
