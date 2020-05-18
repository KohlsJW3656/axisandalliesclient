import React, {useState} from 'react';
//import {useDispatch} from 'react-redux';
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

export function Body(props) {
  //const dispatch = useDispatch();
  const country = props.country;
  const [orders, setOrders] =  useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [purchasingPower, setPP] = useState(country.ipcs);

  /*
  const removeOrder = name => {
    setOrders(orders => orders.filter(order => order.name !== name));
  }
  */
  const addOrder = (newOrder, unitCost) => {
    if (country.ipcs >= totalCost + unitCost) {
      if (orders => orders.fiilter(order => order.name !== newOrder.name)) {
        setOrders(orders => [newOrder, ...orders.filter(order => order.name !== newOrder.name)]);
        setTotalCost(totalCost => totalCost + unitCost);
        setPP(purchasingPower => purchasingPower - totalCost);
      }
    }
  }

  const clearOrders = () => {
    setOrders(orders => []);
    setTotalCost(totalCost => 0);
    setPP(country.ipcs);
  }

  /*
  const addPurchase = (orders, country, dateString, turn) => {
    dispatch(addingPurchase(orders.map(order => order.name, order.amount, country.c_id, dateString, turn)));
  }
*/
  return (
    <div>
      <div className="col-2" id="unitColumn">
        <h2>Total Cost: {totalCost}</h2>
        <h3>Purchasing Power: {purchasingPower}</h3>
        <button type="button" >Purchase</button>
        <button type="button" onClick={clearOrders}>Clear</button>
        <h3>Ordered:</h3>
        {orders.map(order => <Order key={order.name} order={order} /*remove={removeOrder}*//>)}
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
              <td><button type="button" onClick={orders => addOrder({name: "Infantry", amount: 1}, 3)}>Order</button></td>

              <td><img src={fighterIcons[country.c_id]} alt="Fighter icon"/></td>
              <td><p>Fighter</p><p>Cost: 10</p></td>
              <td><button type="button" onClick={orders => addOrder({name: "Fighter", amount: 1}, 10)}>Order</button></td>

              <td><img src={battleshipIcons[country.c_id]} alt="Battleship icon"/></td>
              <td><p>Battleship</p><p>Cost: 20</p></td>
              <td><button type="button" onClick={orders => addOrder({name: "Battleship", amount: 1}, 20)}>Order</button></td>

              <td><img src="images/Facilities/MajorIC.png" alt="Major IC icon"/></td>
              <td><p>Major Industrial Complex</p><p>Cost: 30</p></td>
              <td><button type="button" onClick={orders => addOrder({name: "Major IC", amount: 1}, 30)}>Order</button></td>

              <td><img className="utilities" src="images/Utilities/Research.png" alt="Research icon"/></td>
              <td><p>Research</p><p>Cost: 5</p></td>
              <td><button type="button" id="research" onClick={orders => addOrder({name: "Research", amount: 1}, 5)}>Order</button></td>
            </tr>

            <tr>
              <td><img src={artilleryIcons[country.c_id]} alt="Artillery icon"/></td>
              <td><p>Artillery</p><p>Cost: 4</p></td>
              <td><button type="button" id="artillery" onClick={orders => addOrder({name: "Artillery", amount: 1}, 4)}>Order</button></td>

              <td><img src={tacBomberIcons[country.c_id]} alt="Tactical Bomber icon"/></td>
              <td><p>Tactical Bomber</p><p>Cost: 11</p></td>
              <td><button type="button" id="tacBomber" onClick={orders => addOrder({name: "Tactical Bomber", amount: 1}, 11)}>Order</button></td>

              <td><img src={carrierIcons[country.c_id]} alt="Aircraft Carrier icon"/></td>
              <td><p>Aircraft Carrier</p><p>Cost: 16</p></td>
              <td><button type="button" id="carrier" onClick={orders => addOrder({name: "Aircraft Carrier", amount: 1}, 16)}>Order</button></td>

              <td><img src="images/Facilities/MinorIC.png" alt="Minor IC icon"/></td>
              <td>Minor Industrial Complex<p></p><p>Cost: 12</p></td>
              <td><button type="button" id="minorIC" onClick={orders => addOrder({name: "Minor IC", amount: 1}, 12)}>Order</button></td>

              <td><img className="utilities" src="images/Utilities/Wrench.jpg" alt="Repair icon"/></td>
              <td><p>Repair</p><p>Cost: 1</p></td>
              <td><button type="button" id="repair" onClick={orders => addOrder({name: "Repair", amount: 1}, 1)}>Order</button></td>
            </tr>

            <tr>
              <td><img src={mechIcons[country.c_id]} alt="Mechanized Infantry icon"/></td>
              <td><p>Mechanized Infantry</p><p>Cost: 4</p></td>
              <td><button type="button" id="mecInfantry" onClick={orders => addOrder({name: "Mechanized Infantry", amount: 1}, 4)}>Order</button></td>

              <td><img src={stratBomberIcons[country.c_id]} alt="Stategic Bomber icon"/></td>
              <td><p>Strategic Bomber</p><p>Cost: 12</p></td>
              <td><button type="button" id="stratBomber" onClick={orders => addOrder({name: "Strategic Bomber", amount: 1}, 12)}>Order</button></td>

              <td><img src={cruiserIcons[country.c_id]} alt="Cruiser icon"/></td>
              <td><p>Cruiser</p><p>Cost: 12</p></td>
              <td><button type="button" id="cruiser" onClick={orders => addOrder({name: "Cruiser", amount: 1}, 12)}>Order</button></td>

              <td><img src="images/Facilities/UpgradeIC.png" alt="Upgrade IC icon"/></td>
              <td><p>Upgrade Minor Industrial Complex</p><p>Cost: 20</p></td>
              <td><button type="button" id="upgradeIC" onClick={orders => addOrder({name: "Upgraded Minor IC", amount: 1}, 20)}>Order</button></td>

              <td><img className="utilities" src="images/Utilities/airlift.png" alt="Airlift icon"/></td>
              <td><p>Airlift</p><p>Cost: 5</p></td>
              <td><button type="button" id="airlift" onClick={orders => addOrder({name: "Airlift", amount: 1}, 5)}>Order</button></td>
            </tr>

            <tr>
            <td><img src={tankIcons[country.c_id]} alt="Tank icon"/></td>
              <td><p>Tank</p><p>Cost: 6</p></td>
              <td><button type="button" id="tank" onClick={orders => addOrder({name: "Tank", amount: 1}, 6)}>Order</button></td>

              <td></td>
              <td></td>
              <td></td>

              <td><img src={destroyerIcons[country.c_id]} alt="Destroyer icon"/></td>
              <td><p>Destroyer</p><p>Cost: 8</p></td>
              <td><button type="button" id="destroyer" onClick={orders => addOrder({name: "Destroyer", amount: 1}, 8)}>Order</button></td>

              <td><img src="images/Facilities/AirBase.png" alt="Airbase icon"/></td>
              <td><p>Air Base</p><p>Cost: 15</p></td>
              <td><button type="button" id="airBase" onClick={orders => addOrder({name: "Air Base", amount: 1}, 15)}>Order</button></td>

              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td><img src={aaaIcons[country.c_id]} alt="Anti Aircraft Artillery icon"/></td>
              <td><p>AAA</p><p>Cost: 5</p></td>
              <td><button type="button" id="aaa" onClick={orders => addOrder({name: "AAA", amount: 1}, 5)}>Order</button></td>

              <td></td>
              <td></td>
              <td></td>

              <td><img src={subIcons[country.c_id]} alt="Submarine icon"/></td>
              <td><p>Submarine</p><p>Cost: 6</p></td>
              <td><button type="button" id="sub" onClick={orders => addOrder({name: "Submarine", amount: 1}, 6)}>Order</button></td>

              <td><img src="images/Facilities/NavalBase.png" alt="Navalbase icon"/></td>
              <td><p>Naval Base</p><p>Cost: 15</p></td>
              <td><button type="button" id="navalBase" onClick={orders => addOrder({name: "Naval Base", amount: 1}, 15)}>Order</button></td>

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
              <td><p>Transport</p><p>Cost: 7</p></td>
              <td><button type="button" id="transport" onClick={orders => addOrder({name: "Transport", amount: 1}, 7)}>Order</button></td>
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