import React, {useState} from 'react';
import {ResearchDisplay} from './ResearchDisplay';

export function Research(props) {
  const [researchIcons, setResearchIcons] =  useState([]);
  const country = props.country;
  const turn = props.turn;
  
  const addCountryResearch = (newResearch) => {

  }

  return (
    <div>
      <h2 className="center">Research Chart 1</h2>

      <div className="container center">  
        <div className="tooltip">
          <div id="advancedArtillery" className="research" onClick={() => addCountryResearch({c_id: country.c_id, id: 0, turn: turn})}>
            <div className="researchText">
              <ResearchDisplay />
              <p>Advanced Artillery</p>
            </div>
            <span className="tooltiptext">Each of your artillery units can now provide greater support. One artillery unit can support up to 2 infantry and/or mechanized infantry units per attack. Up to 2 infantry and/or mechanized infantry units when coupled with 1 artillery unit have attack values of 2.</span>
          </div>
        </div>

        <div className="tooltip">
          <div id="rockets" className="research">
            <div className="researchText">
              <div className="researchDisplay"></div>
              <p>Rockets</p>
            </div>
            <span className="tooltiptext">Your air bases can now launch rockets. During the Strategic and Tactical Bombing Raids step of your Conduct Combat phase each turn, each of your operative air bases can make a single rocket attack against an enemy industrial complex, air base, or naval base within 4 spaces of it. This attack does one die roll of damage to that facility. Rockets may not be fired over neutral territories.</span>
          </div>
        </div>

        <div className="tooltip">
          <div id="paratroopers" className="research">
            <div className="researchText">
              <div className="researchDisplay"></div>
              <p>Paratroopers</p>
            </div>
            <span className="tooltiptext">Up to 2 of your infantry units in each territory with an air base can be moved to an enemycontrolled territory 3 or fewer spaces away that is being attacked by your land units from adjacent territories and/or by amphibious assault. When moving, paratroopers must obey the same restrictions that air units do. If the territory being attacked has AAA (antiaircraft artillery) units, the paratrooper infantry units are subject to antiaircraft fire in the same way as air units. If attacking along with land units from adjacent territories, paratroopers may retreat as normal.</span>
          </div>
        </div>

        <div className="tooltip">
          <div id="increasedFactoryProduction" className="research">
            <div className="researchText">
              <div className="researchDisplay"></div>
              <p>Increased Factory Production</p>
            </div>
            <span className="tooltiptext">Each of your industrial complexes can now produce additional units beyond their normal production ability. Major industrial complexes can mobilize up to 12 units, and minor ones can mobilize up to 4 units. Also, when repairing a damaged industrial complex, you can remove 2 damage markers for the cost of 1 IPC (in other words, half price). The maximum damage that can be applied to your industrial complexes is not increased.</span>
          </div>
        </div>

        <div className="tooltip">
          <div id="warBonds" className="research">
            <div className="researchText">
              <div className="researchDisplay"></div>
              <p>War Bonds</p>
            </div>
            <span className="tooltiptext">During your Collect Income phase, roll a die and collect that many additional IPCs.</span>
          </div>
        </div>

        <div className="tooltip">
          <div id="improvedMechanizedInfantry" className="research">
            <div className="researchText">
              <div className="researchDisplay"></div>
              <p>Improved Mechanized Infantry</p>
            </div>
            <span className="tooltiptext">Each of your mechanized infantry units that is paired up with a tank or an artillery now has an attack value of 2. Also, your mechanized infantry may now blitz without being paired with a tank.</span>
          </div>
        </div>
      </div>

      <h2 className="center">Research Chart 2</h2>

      <div className="container center">
        <div className="tooltiptop">
          <div id="superSubmarines" className="research">
            <div className="researchText">
              <div className="researchDisplay"></div>
              <p>Super Submarines</p>
            </div>
            <span className="tooltiptexttop">The attack value of your submarines is now 3 instead of 2.</span>
          </div>
        </div>

        <div className="tooltiptop">
          <div id="jetFighters" className="research">
            <div className="researchText">
              <div className="researchDisplay"></div>
              <p>Jet Fighters</p>
            </div>
            <span className="tooltiptexttop">The attack value of your fighters is now 4 instead of 3. In addition, during bombing raids your escorting or intercepting fighters now hit on a “1” or “2” instead of just a “1”.</span>
          </div>
        </div>

        <div className="tooltiptop">
          <div id="improvedShipyards" className="research">
            <div className="researchText">
              <div className="researchDisplay"></div>
              <p>Improved Shipyards</p>
            </div>
            <span className="tooltiptexttop">Your sea units are now cheaper to build.</span>
          </div>
        </div>

        <div className="tooltiptop">
          <div id="radar" className="research">
            <div className="researchText">
              <div className="researchDisplay"></div>
              <p>Radar</p>
            </div>
            <span className="tooltiptexttop">Your antiaircraft fire, both from AAA (antiaircraft artillery) units and facilities, now hits on a “1” or “2” instead of just a “1”.</span>
          </div>
        </div>

        <div className="tooltiptop">
          <div id="longRangeAircraft" className="research">
            <div className="researchText">
              <div className="researchDisplay"></div>
              <p>Long-Range Aircraft</p>
            </div>
            <span className="tooltiptexttop">All of your air units’ ranges are increased by 1 space.</span>
          </div>
        </div>

        <div className="tooltiptop">
          <div id="heavyBombers" className="research">
            <div className="researchText">
              <div className="researchDisplay"></div>
              <p>Heavy Bombers</p>
            </div>
            <span className="tooltiptexttop">Your strategic bombers are now heavy bombers. When attacking, whether in a battle or a strategic bombing raid, roll two dice for each bomber and select the best result.</span>
          </div>
        </div>
      </div>
    </div>
  );
}