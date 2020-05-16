import React from 'react';


export function Table(props) {
  return (
    <div className="col-10"  id="tableColumn">
      <div id="backgroundContainer"></div>
      <table id="unitTable" class="center">
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

        <tr>
          <td id="infantryIcon"></td><td><p>Infantry</p><p>Cost: 3</p></td>
          <td><button type="button" id="infantry" onclick="purchaseInfantry()">Order</button></td>
          <td id="fighterIcon"></td>
          <td><p>Fighter</p><p>Cost: 10</p></td>
          <td><button type="button" id="fighter" onclick="purchaseFighter()">Order</button></td>
          <td id="battleshipIcon"></td>
          <td><p>Battleship</p><p id="battleshipCost"></p></td>
          <td><button type="button" id="battleship" onclick="purchaseBattleship()">Order</button></td>
          <td><img src="images/Facilities/MajorIC.png" alt="Major IC icon"/></td>
          <td><p>Major Industrial Complex</p><p>Cost: 30</p></td>
          <td><button type="button" id="majorIC" onclick="purchaseMajorIC()">Order</button></td>
          <td><img class="utilities" src="images/Utilities/Research.png" alt="Research icon"/></td>
          <td><p>Research</p><p>Cost: 5</p></td>
          <td><button type="button" id="research" onclick="purchaseResearch()">Order</button></td>
        </tr>

        <tr>
          <td id="artilleryIcon"></td>
          <td><p>Artillery</p><p>Cost: 4</p></td>
          <td><button type="button" id="artillery" onclick="purchaseArtillery()">Order</button></td>
          <td id="tacBomberIcon"></td>
          <td><p>Tactical Bomber</p><p>Cost: 11</p></td>
          <td><button type="button" id="tacBomber" onclick="purchaseTacBomber()">Order</button></td>
          <td id="carrierIcon"></td>
          <td><p>Aircraft Carrier</p><p id="carrierCost"></p></td>
          <td><button type="button" id="carrier" onclick="purchaseCarrier()">Order</button></td>
          <td><img src="images/Facilities/MinorIC.png" alt="Minor IC icon"/></td>
          <td>Minor Industrial Complex<p></p><p>Cost: 12</p></td>
          <td><button type="button" id="minorIC" onclick="purchaseMinorIC()">Order</button></td>
          <td><img class="utilities" src="images/Utilities/Wrench.jpg" alt="Major IC icon"/></td>
          <td><p>Repair</p><p>Cost: 1</p></td>
          <td><button type="button" id="repair" onclick="purchaseRepair()">Order</button></td>
        </tr>

        <tr>
          <td id="mechIcon"></td>
          <td><p>Mechanized Infantry</p><p>Cost: 4</p></td>
          <td><button type="button" id="mecInfantry" onclick="purchaseMechInfantry()">Order</button></td>
          <td id="stratBomberIcon"></td>
          <td><p>Strategic Bomber</p><p>Cost: 12</p></td>
          <td><button type="button" id="stratBomber" onclick="purchaseStratBomber()">Order</button></td>
          <td id="cruiserIcon"></td>
          <td><p>Cruiser</p><p id="cruiserCost"></p></td>
          <td><button type="button" id="cruiser" onclick="purchaseCruiser()">Order</button></td>

          <td><img src="images/Facilities/UpgradeIC.png" alt="Upgrade IC icon"/></td>
          <td><p>Upgrade Minor Industrial Complex</p><p>Cost: 20</p></td>
          <td><button type="button" id="upgradeIC" onclick="purchaseUpgradeIC()">Order</button></td>

          <td><img class="utilities" src="images/Utilities/airlift.png" alt="Airlift icon"/></td>
          <td><p>Airlift</p><p>Cost: 5</p></td>
          <td><button type="button" id="airlift" onclick="purchaseAirlift()">Order</button></td>
        </tr>

        <tr>
          <td id="tankIcon"></td>
          <td><p>Tank</p><p>Cost: 6</p></td>
          <td><button type="button" id="tank" onclick="purchaseTank()">Order</button></td>
          <td></td>
          <td></td>
          <td></td>
          <td id="destroyerIcon"></td>
          <td><p>Destroyer</p><p id="destroyerCost"></p></td>
          <td><button type="button" id="destroyer" onclick="purchaseDestroyer()">Order</button></td>
          <td><img src="images/Facilities/AirBase.png" alt="Airbase icon"/></td>
          <td><p>Air Base</p><p>Cost: 15</p></td>
          <td><button type="button" id="airBase" onclick="purchaseAirBase()">Order</button></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td id="aaaIcon"></td>
          <td><p>AAA</p><p>Cost: 5</p></td>
          <td><button type="button" id="aaa" onclick="purchaseAAA()">Order</button></td>
          <td></td>
          <td></td>
          <td></td>
          <td id="subIcon"></td>
          <td><p>Submarine</p><p id="subCost"></p></td>
          <td><button type="button" id="sub" onclick="purchaseSub()">Order</button></td>
          <td><img src="images/Facilities/NavalBase.png" alt="Navalbase icon"/></td>
          <td><p>Naval Base</p><p>Cost: 15</p></td>
          <td><button type="button" id="navalBase" onclick="purchaseNavalBase()">Order</button></td>
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
          <td id="transportIcon"></td>
          <td><p>Transport</p><p id="transportCost"></p></td>
          <td><button type="button" id="transport" onclick="purchaseTransport()">Order</button></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>

  );
}