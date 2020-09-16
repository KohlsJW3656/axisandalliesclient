import React/*, {useState}*/ from 'react';

export function Research(props) {
  
/*
  const addResearch = () => {

  }
*/
  return (
    <div>
      <div className="row center">
        <div className="col-xs-12">
          <h2>Research Chart 1</h2>
        </div>
        
        <div className="col-lg-2 tooltip">
          <div id="advancedArtillery" className="research">
            <div className="researchText">
              <div className="researchDisplay">test</div>
              <p>Advanced Artillery</p>
            </div>
            <span className="tooltiptext">Each of your artillery units can now provide greater support. One artillery unit can support up to 2 infantry and/or mechanized infantry units per attack. Up to 2 infantry and/or mechanized infantry units when coupled with 1 artillery unit have attack values of 2.</span>
          </div>
        </div>

        <div className="col-lg-2 tooltip">
          <div id="advancedArtillery" className="research">
            <div className="researchText">
              <div className="researchDisplay">test</div>
              <p>Rockets</p>
            </div>
            <span className="tooltiptext">Your air bases can now launch rockets. During the Strategic and Tactical Bombing Raids step of your Conduct Combat phase each turn, each of your operative air bases can make a single rocket attack against an enemy industrial complex, air base, or naval base within 4 spaces of it. This attack does one die roll of damage to that facility. Rockets may not be fired over neutral territories.</span>
          </div>
        </div>

        <div className="col-lg-2 tooltip">
          <div id="advancedArtillery" className="research">
            <div className="researchText">
              <div className="researchDisplay">test</div>
              <p>Paratroopers</p>
            </div>
            <span className="tooltiptext">Up to 2 of your infantry units in each territory with an air base can be moved to an enemycontrolled territory 3 or fewer spaces away that is being attacked by your land units from adjacent territories and/or by amphibious assault. When moving, paratroopers must obey the same restrictions that air units do. If the territory being attacked has AAA (antiaircraft artillery) units, the paratrooper infantry units are subject to antiaircraft fire in the same way as air units. If attacking along with land units from adjacent territories, paratroopers may retreat as normal.</span>
          </div>
        </div>

        <div className="col-lg-2 tooltip">
          <div id="advancedArtillery" className="research">
            <div className="researchText">
              <div className="researchDisplay">test</div>
              <p>Increased Factory Production</p>
            </div>
            <span className="tooltiptext">Each of your industrial complexes can now produce additional units beyond their normal production ability. Major industrial complexes can mobilize up to 12 units, and minor ones can mobilize up to 4 units. Also, when repairing a damaged industrial complex, you can remove 2 damage markers for the cost of 1 IPC (in other words, half price). The maximum damage that can be applied to your industrial complexes is not increased.</span>
          </div>
        </div>

        <div className="col-lg-2 tooltip">
          <div id="advancedArtillery" className="research">
            <div className="researchText">
              <div className="researchDisplay">test</div>
              <p>War Bonds</p>
            </div>
            <span className="tooltiptext">During your Collect Income phase, roll a die and collect that many additional IPCs.</span>
          </div>
        </div>

        <div className="col-lg-2 tooltip">
          <div id="advancedArtillery" className="research">
            <div className="researchText">
              <div className="researchDisplay">test</div>
              <p>Improved Mechanized Infantry</p>
            </div>
            <span className="tooltiptext">Each of your mechanized infantry units that is paired up with a tank or an artillery now has an attack value of 2. Also, your mechanized infantry may now blitz without being paired with a tank.</span>
          </div>
        </div>
      </div>

      <div className="row center">
        <div className="col-xs-12">
          <h2>Research Chart 2</h2>
        </div>

        <div className="col-lg-2 tooltip">
          <div id="advancedArtillery" className="research">
            <div className="researchText">
              <div className="researchDisplay">test</div>
              <p>Super Submarines</p>
            </div>
            <span className="tooltiptext">The attack value of your submarines is now 3 instead of 2.</span>
          </div>
        </div>

        <div className="col-lg-2 tooltip">
          <div id="advancedArtillery" className="research">
            <div className="researchText">
              <div className="researchDisplay">test</div>
              <p>Jet Fighters</p>
            </div>
            <span className="tooltiptext">The attack value of your fighters is now 4 instead of 3. In addition, during bombing raids your escorting or intercepting fighters now hit on a “1” or “2” instead of just a “1”.</span>
          </div>
        </div>

        <div className="col-lg-2 tooltip">
          <div id="advancedArtillery" className="research">
            <div className="researchText">
              <div className="researchDisplay">test</div>
              <p>Improved Shipyards</p>
            </div>
            <span className="tooltiptext">Your sea units are now cheaper to build.</span>
          </div>
        </div>

        <div className="col-lg-2 tooltip">
          <div id="advancedArtillery" className="research">
            <div className="researchText">
              <div className="researchDisplay">test</div>
              <p>Radar</p>
            </div>
            <span className="tooltiptext">Your antiaircraft fire, both from AAA (antiaircraft artillery) units and facilities, now hits on a “1” or “2” instead of just a “1”.</span>
          </div>
        </div>

        <div className="col-lg-2 tooltip">
          <div id="advancedArtillery" className="research">
            <div className="researchText">
              <div className="researchDisplay">test</div>
              <p>Long-Range Aircraft</p>
            </div>
            <span className="tooltiptext">All of your air units’ ranges are increased by 1 space.</span>
          </div>
        </div>

        <div className="col-lg-2 tooltip">
          <div id="advancedArtillery" className="research">
            <div className="researchText">
              <div className="researchDisplay">test</div>
              <p>Heavy Bombers</p>
            </div>
            <span className="tooltiptext">Your strategic bombers are now heavy bombers. When attacking, whether in a battle or a strategic bombing raid, roll two dice for each bomber and select the best result.</span>
          </div>
        </div>
      </div>
    </div>
  );
}