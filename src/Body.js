import React from 'react';
import {Order} from './Order';

const infantryIcons = ["images/Troops/Germany/Infantry.png",
                      "images/Troops/SovietUnion/Infantry.png",
                      "images/Troops/Japan/Infantry.png",
                      "images/Troops/UnitedStates/Infantry.png",
                      "images/Troops/China/Infantry.png",
                      "images/Troops/UnitedKingdom/Infantry.png",
                      "images/Troops/UnitedKingdom/Infantry.png",
                      "images/Troops/Italy/Infantry.png",
                      "images/Troops/ANZAC/Infantry.png",
                      "images/Troops/France/Infantry.png"];
                        
const artilleryIcons = ["images/Troops/Germany/Artillery.png",
                      "images/Troops/SovietUnion/Artillery.png",
                      "images/Troops/Japan/Artillery.png",
                      "images/Troops/UnitedStates/Artillery.png",
                      "images/Troops/UnitedStates/Artillery.png",
                      "images/Troops/UnitedKingdom/Artillery.png",
                      "images/Troops/UnitedKingdom/Artillery.png",
                      "images/Troops/Italy/Artillery.png",
                      "images/Troops/ANZAC/Artillery.png",
                      "images/Troops/France/Artillery.png"];

const mechIcons = ["images/Troops/Germany/Mech.png",
                  "images/Troops/SovietUnion/Mech.png",
                  "images/Troops/Japan/Mech.png",
                  "images/Troops/UnitedStates/Mech.png",
                  "images/Troops/China/Mech.png",
                  "images/Troops/UnitedKingdom/Mech.png",
                  "images/Troops/UnitedKingdom/Mech.png",
                  "images/Troops/Italy/Mech.png",
                  "images/Troops/ANZAC/Mech.png",
                  "images/Troops/France/Mech.png"];

const tankIcons = ["images/Troops/Germany/Tank.png",
                  "images/Troops/SovietUnion/Tank.png",
                  "images/Troops/Japan/Tank.png",
                  "images/Troops/UnitedStates/Tank.png",
                  "images/Troops/China/Tank.png",
                  "images/Troops/UnitedKingdom/Tank.png",
                  "images/Troops/UnitedKingdom/Tank.png",
                  "images/Troops/Italy/Tank.png",
                  "images/Troops/ANZAC/Tank.png",
                  "images/Troops/France/Tank.png"];

const aaaIcons = ["images/Troops/Germany/aaa.png",
                  "images/Troops/SovietUnion/aaa.png",
                  "images/Troops/Japan/aaa.png",
                  "images/Troops/UnitedStates/aaa.png",
                  "images/Troops/China/aaa.png",
                  "images/Troops/UnitedKingdom/aaa.png",
                  "images/Troops/UnitedKingdom/aaa.png",
                  "images/Troops/Italy/aaa.png",
                  "images/Troops/ANZAC/aaa.png",
                  "images/Troops/France/aaa.png"];

const fighterIcons = ["images/Troops/Germany/Fighter.png",
                    "images/Troops/SovietUnion/Fighter.png",
                    "images/Troops/Japan/Fighter.png",
                    "images/Troops/UnitedStates/Fighter.png",
                    "images/Troops/China/Fighter.png",
                    "images/Troops/UnitedKingdom/Fighter.png",
                    "images/Troops/UnitedKingdom/Fighter.png",
                    "images/Troops/Italy/Fighter.png",
                    "images/Troops/ANZAC/Fighter.png",
                    "images/Troops/France/Fighter.png"];

const tacBomberIcons = ["images/Troops/Germany/TacBomber.png",
                      "images/Troops/SovietUnion/TacBomber.png",
                      "images/Troops/Japan/TacBomber.png",
                      "images/Troops/UnitedStates/TacBomber.png",
                      "images/Troops/China/TacBomber.png",
                      "images/Troops/UnitedKingdom/TacBomber.png",
                      "images/Troops/UnitedKingdom/TacBomber.png",
                      "images/Troops/Italy/TacBomber.png",
                      "images/Troops/ANZAC/TacBomber.png",
                      "images/Troops/France/TacBomber.png"];

const stratBomberIcons = ["images/Troops/Germany/StratBomber.png",
                        "images/Troops/SovietUnion/StratBomber.png",
                        "images/Troops/Japan/StratBomber.png",
                        "images/Troops/UnitedStates/StratBomber.png",
                        "images/Troops/China/StratBomber.png",
                        "images/Troops/UnitedKingdom/StratBomber.png",
                        "images/Troops/UnitedKingdom/StratBomber.png",
                        "images/Troops/Italy/StratBomber.png",
                        "images/Troops/ANZAC/StratBomber.png",
                        "images/Troops/France/StratBomber.png"];

const battleshipIcons = ["images/Troops/Germany/Battleship.png",
                        "images/Troops/SovietUnion/Battleship.png",
                        "images/Troops/Japan/Battleship.png",
                        "images/Troops/UnitedStates/Battleship.png",
                        "images/Troops/China/Battleship.png",
                        "images/Troops/UnitedKingdom/Battleship.png",
                        "images/Troops/UnitedKingdom/Battleship.png",
                        "images/Troops/Italy/Battleship.png",
                        "images/Troops/ANZAC/Battleship.png",
                        "images/Troops/France/Battleship.png"];

const carrierIcons = ["images/Troops/Germany/Carrier.png",
                    "images/Troops/SovietUnion/Carrier.png",
                    "images/Troops/Japan/Carrier.png",
                    "images/Troops/UnitedStates/Carrier.png",
                    "images/Troops/China/Carrier.png",
                    "images/Troops/UnitedKingdom/Carrier.png",
                    "images/Troops/UnitedKingdom/Carrier.png",
                    "images/Troops/Italy/Carrier.png",
                    "images/Troops/ANZAC/Carrier.png",
                    "images/Troops/France/Carrier.png"];

const cruiserIcons = ["images/Troops/Germany/Cruiser.png",
                    "images/Troops/SovietUnion/Cruiser.png",
                    "images/Troops/Japan/Cruiser.png",
                    "images/Troops/UnitedStates/Cruiser.png",
                    "images/Troops/China/Cruiser.png",
                    "images/Troops/UnitedKingdom/Cruiser.png",
                    "images/Troops/UnitedKingdom/Cruiser.png",
                    "images/Troops/Italy/Cruiser.png",
                    "images/Troops/ANZAC/Cruiser.png",
                    "images/Troops/France/Cruiser.png"];

const destroyerIcons = ["images/Troops/Germany/Destroyer.png",
                      "images/Troops/SovietUnion/Destroyer.png",
                      "images/Troops/Japan/Destroyer.png",
                      "images/Troops/UnitedStates/Destroyer.png",
                      "images/Troops/China/Destroyer.png",
                      "images/Troops/UnitedKingdom/Destroyer.png",
                      "images/Troops/UnitedKingdom/Destroyer.png",
                      "images/Troops/Italy/Destroyer.png",
                      "images/Troops/ANZAC/Destroyer.png",
                      "images/Troops/France/Destroyer.png"];

const subIcons = ["images/Troops/Germany/Sub.png",
                "images/Troops/SovietUnion/Sub.png",
                "images/Troops/Japan/Sub.png",
                "images/Troops/UnitedStates/Sub.png",
                "images/Troops/China/Sub.png",
                "images/Troops/UnitedKingdom/Sub.png",
                "images/Troops/UnitedKingdom/Sub.png",
                "images/Troops/Italy/Sub.png",
                "images/Troops/ANZAC/Sub.png",
                "images/Troops/France/Sub.png"];

const transportIcons = ["images/Troops/Germany/Transport.png",
                      "images/Troops/SovietUnion/Transport.png",
                      "images/Troops/Japan/Transport.png",
                      "images/Troops/UnitedStates/Transport.png",
                      "images/Troops/China/Transport.png",
                      "images/Troops/UnitedKingdom/Transport.png",
                      "images/Troops/UnitedKingdom/Transport.png",
                      "images/Troops/Italy/Transport.png",
                      "images/Troops/ANZAC/Transport.png",
                      "images/Troops/France/Transport.png"];

const background = ["images/Background/Germany.png",
                  "images/Background/SovietUnion.png",
                  "images/Background/Japan.png",
                  "images/Background/UnitedStates.png",
                  "images/Background/",
                  "images/Background/",
                  "images/Background/",
                  "images/Background/",
                  "images/Background/",
                  "images/Background/France.png"];

const backgroundId = ["backgroundGermany",
                    "backgroundSovietUnion",
                    "backgroundJapan",
                    "backgroundUnitedStates",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "backgroundFrance"];

function order(name, cost) {
  
}

export function Body(props) {
  const country = props.country;
  
  return (
    <div>
      <div className="col-2" id="unitColumn">
        <h2 id="costDisplay">Total Cost: 0</h2>
        <h3 id="purchasingPower">Purchasing Power: </h3>
        <button id="purchaseButton" type="button" onClick="purchaseButton()">Purchase</button>
        <button id="clearButton" type="button" onClick="clearButton()">Clear</button>
        <h3>Ordered:</h3>
        
        <h3>Purchased:</h3>
        <div id="purchasedDisplay"></div>
      </div>

      <div className="col-10"  id="tableColumn">
        <div id="backgroundContainer"><img className="backgroundImage" id={backgroundId[country.c_id]} src={background[country.c_id]} alt=""/></div>
        <table id="unitTable" className="center">
          <thead>
            <tr>
              <th></th>
              <th>Land Units</th>
              <th>Order</th>
              <th></th>
              <th>Air Units</th>
              <th>Order</th>
              <th></th>
              <th>Sea Units</th>
              <th>Order</th>
              <th></th>
              <th>Facilities</th>
              <th>Order</th>
              <th></th>
              <th>Utilities</th>
              <th>Order</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={infantryIcons[country.c_id]} alt="Infantry icon"/></td>
              <td><p>Infantry</p><p>Cost: 3</p></td>
              <td><button type="button" onClick="purchaseInfantry()">Order</button></td>

              <td><img src={fighterIcons[country.c_id]} alt="Fighter icon"/></td>
              <td><p>Fighter</p><p>Cost: 10</p></td>
              <td><button type="button" onClick="purchaseFighter()">Order</button></td>

              <td><img src={battleshipIcons[country.c_id]} alt="Battleship icon"/></td>
              <td><p>Battleship</p><p>Cost: 20</p></td>
              <td><button type="button" onClick="purchaseBattleship()">Order</button></td>

              <td><img src="images/Facilities/MajorIC.png" alt="Major IC icon"/></td>
              <td><p>Major Industrial Complex</p><p>Cost: 30</p></td>
              <td><button type="button" onClick="purchaseMajorIC()">Order</button></td>

              <td><img className="utilities" src="images/Utilities/Research.png" alt="Research icon"/></td>
              <td><p>Research</p><p>Cost: 5</p></td>
              <td><button type="button" id="research" onClick="purchaseResearch()">Order</button></td>
            </tr>

            <tr>
              <td><img src={artilleryIcons[country.c_id]} alt="Artillery icon"/></td>
              <td><p>Artillery</p><p>Cost: 4</p></td>
              <td><button type="button" id="artillery" onClick="purchaseArtillery()">Order</button></td>

              <td><img src={tacBomberIcons[country.c_id]} alt="Tactical Bomber icon"/></td>
              <td><p>Tactical Bomber</p><p>Cost: 11</p></td>
              <td><button type="button" id="tacBomber" onClick="purchaseTacBomber()">Order</button></td>

              <td><img src={carrierIcons[country.c_id]} alt="Aircraft Carrier icon"/></td>
              <td><p>Aircraft Carrier</p><p id="carrierCost"></p></td>
              <td><button type="button" id="carrier" onClick="purchaseCarrier()">Order</button></td>

              <td><img src="images/Facilities/MinorIC.png" alt="Minor IC icon"/></td>
              <td>Minor Industrial Complex<p></p><p>Cost: 12</p></td>
              <td><button type="button" id="minorIC" onClick="purchaseMinorIC()">Order</button></td>

              <td><img className="utilities" src="images/Utilities/Wrench.jpg" alt="Major IC icon"/></td>
              <td><p>Repair</p><p>Cost: 1</p></td>
              <td><button type="button" id="repair" onClick="purchaseRepair()">Order</button></td>
            </tr>

            <tr>
              <td><img src={mechIcons[country.c_id]} alt="Mechanized Infantry icon"/></td>
              <td><p>Mechanized Infantry</p><p>Cost: 4</p></td>
              <td><button type="button" id="mecInfantry" onClick="purchaseMechInfantry()">Order</button></td>

              <td><img src={stratBomberIcons[country.c_id]} alt="Stategic Bomber icon"/></td>
              <td><p>Strategic Bomber</p><p>Cost: 12</p></td>
              <td><button type="button" id="stratBomber" onClick="purchaseStratBomber()">Order</button></td>

              <td><img src={cruiserIcons[country.c_id]} alt="Cruiser icon"/></td>
              <td><p>Cruiser</p><p id="cruiserCost"></p></td>
              <td><button type="button" id="cruiser" onClick="purchaseCruiser()">Order</button></td>

              <td><img src="images/Facilities/UpgradeIC.png" alt="Upgrade IC icon"/></td>
              <td><p>Upgrade Minor Industrial Complex</p><p>Cost: 20</p></td>
              <td><button type="button" id="upgradeIC" onClick="purchaseUpgradeIC()">Order</button></td>

              <td><img className="utilities" src="images/Utilities/airlift.png" alt="Airlift icon"/></td>
              <td><p>Airlift</p><p>Cost: 5</p></td>
              <td><button type="button" id="airlift" onClick="purchaseAirlift()">Order</button></td>
            </tr>

            <tr>
            <td><img src={tankIcons[country.c_id]} alt="Tank icon"/></td>
              <td><p>Tank</p><p>Cost: 6</p></td>
              <td><button type="button" id="tank" onClick="purchaseTank()">Order</button></td>

              <td></td>
              <td></td>
              <td></td>

              <td><img src={destroyerIcons[country.c_id]} alt="Destroyer icon"/></td>
              <td><p>Destroyer</p><p id="destroyerCost"></p></td>
              <td><button type="button" id="destroyer" onClick="purchaseDestroyer()">Order</button></td>

              <td><img src="images/Facilities/AirBase.png" alt="Airbase icon"/></td>
              <td><p>Air Base</p><p>Cost: 15</p></td>
              <td><button type="button" id="airBase" onClick="purchaseAirBase()">Order</button></td>

              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td><img src={aaaIcons[country.c_id]} alt="Anti Aircraft Artillery icon"/></td>
              <td><p>AAA</p><p>Cost: 5</p></td>
              <td><button type="button" id="aaa" onClick="purchaseAAA()">Order</button></td>

              <td></td>
              <td></td>
              <td></td>

              <td><img src={subIcons[country.c_id]} alt="Submarine icon"/></td>
              <td><p>Submarine</p><p id="subCost"></p></td>
              <td><button type="button" id="sub" onClick="purchaseSub()">Order</button></td>

              <td><img src="images/Facilities/NavalBase.png" alt="Navalbase icon"/></td>
              <td><p>Naval Base</p><p>Cost: 15</p></td>
              <td><button type="button" id="navalBase" onClick="purchaseNavalBase()">Order</button></td>

              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><img src={transportIcons[country.c_id]} alt="Transport icon"/></td>
              <td><p>Transport</p><p id="transportCost"></p></td>
              <td><button type="button" id="transport" onClick="purchaseTransport()">Order</button></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
}