import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Order} from './Order';
import {startAddingPurchase} from './actions';

const infantryIcons = ["images/Troops/germany/infantry.png",
                      "images/Troops/sovietunion/infantry.png",
                      "images/Troops/japan/infantry.png",
                      "images/Troops/usa/infantry.png",
                      "images/Troops/china/infantry.png",
                      "images/Troops/uk/infantry.png",
                      "images/Troops/uk/infantry.png",
                      "images/Troops/italy/infantry.png",
                      "images/Troops/anzac/infantry.png",
                      "images/Troops/france/infantry.png"];
                        
const artilleryIcons = ["images/Troops/germany/artillery.png",
                      "images/Troops/sovietunion/artillery.png",
                      "images/Troops/japan/artillery.png",
                      "images/Troops/usa/artillery.png",
                      "images/Troops/usa/artillery.png",
                      "images/Troops/uk/artillery.png",
                      "images/Troops/uk/artillery.png",
                      "images/Troops/italy/artillery.png",
                      "images/Troops/anzac/artillery.png",
                      "images/Troops/france/artillery.png"];

const mechIcons = ["images/Troops/germany/mech.png",
                  "images/Troops/sovietunion/mech.png",
                  "images/Troops/japan/mech.png",
                  "images/Troops/usa/mech.png",
                  "images/Troops/china/mech.png",
                  "images/Troops/uk/mech.png",
                  "images/Troops/uk/mech.png",
                  "images/Troops/italy/mech.png",
                  "images/Troops/anzac/mech.png",
                  "images/Troops/france/mech.png"];

const tankIcons = ["images/Troops/germany/tank.png",
                  "images/Troops/sovietunion/tank.png",
                  "images/Troops/japan/tank.png",
                  "images/Troops/usa/tank.png",
                  "images/Troops/china/tank.png",
                  "images/Troops/uk/tank.png",
                  "images/Troops/uk/tank.png",
                  "images/Troops/italy/tank.png",
                  "images/Troops/anzac/tank.png",
                  "images/Troops/france/tank.png"];

const aaaIcons = ["images/Troops/germany/aaa.png",
                  "images/Troops/sovietunion/aaa.png",
                  "images/Troops/japan/aaa.png",
                  "images/Troops/usa/aaa.png",
                  "images/Troops/china/aaa.png",
                  "images/Troops/uk/aaa.png",
                  "images/Troops/uk/aaa.png",
                  "images/Troops/italy/aaa.png",
                  "images/Troops/anzac/aaa.png",
                  "images/Troops/france/aaa.png"];

const fighterIcons = ["images/Troops/germany/fighter.png",
                    "images/Troops/sovietunion/fighter.png",
                    "images/Troops/japan/fighter.png",
                    "images/Troops/usa/fighter.png",
                    "images/Troops/china/fighter.png",
                    "images/Troops/uk/fighter.png",
                    "images/Troops/uk/fighter.png",
                    "images/Troops/italy/fighter.png",
                    "images/Troops/anzac/fighter.png",
                    "images/Troops/france/fighter.png"];

const tacBomberIcons = ["images/Troops/germany/tacbomber.png",
                      "images/Troops/sovietunion/tacbomber.png",
                      "images/Troops/japan/tacbomber.png",
                      "images/Troops/usa/tacbomber.png",
                      "images/Troops/china/tacbomber.png",
                      "images/Troops/uk/tacbomber.png",
                      "images/Troops/uk/tacbomber.png",
                      "images/Troops/italy/tacbomber.png",
                      "images/Troops/anzac/tacbomber.png",
                      "images/Troops/france/tacbomber.png"];

const stratBomberIcons = ["images/Troops/germany/stratbomber.png",
                        "images/Troops/sovietunion/stratbomber.png",
                        "images/Troops/japan/stratbomber.png",
                        "images/Troops/usa/stratbomber.png",
                        "images/Troops/china/stratbomber.png",
                        "images/Troops/uk/stratbomber.png",
                        "images/Troops/uk/stratbomber.png",
                        "images/Troops/italy/stratbomber.png",
                        "images/Troops/anzac/stratbomber.png",
                        "images/Troops/france/stratbomber.png"];

const battleshipIcons = ["images/Troops/germany/battleship.png",
                        "images/Troops/sovietunion/battleship.png",
                        "images/Troops/japan/battleship.png",
                        "images/Troops/usa/battleship.png",
                        "images/Troops/china/battleship.png",
                        "images/Troops/uk/battleship.png",
                        "images/Troops/uk/battleship.png",
                        "images/Troops/italy/battleship.png",
                        "images/Troops/anzac/battleship.png",
                        "images/Troops/france/battleship.png"];

const carrierIcons = ["images/Troops/germany/carrier.png",
                    "images/Troops/sovietunion/carrier.png",
                    "images/Troops/japan/carrier.png",
                    "images/Troops/usa/carrier.png",
                    "images/Troops/china/carrier.png",
                    "images/Troops/uk/carrier.png",
                    "images/Troops/uk/carrier.png",
                    "images/Troops/italy/carrier.png",
                    "images/Troops/anzac/carrier.png",
                    "images/Troops/france/carrier.png"];

const cruiserIcons = ["images/Troops/germany/cruiser.png",
                    "images/Troops/sovietunion/cruiser.png",
                    "images/Troops/japan/cruiser.png",
                    "images/Troops/usa/cruiser.png",
                    "images/Troops/china/cruiser.png",
                    "images/Troops/uk/cruiser.png",
                    "images/Troops/uk/cruiser.png",
                    "images/Troops/italy/cruiser.png",
                    "images/Troops/anzac/cruiser.png",
                    "images/Troops/france/cruiser.png"];

const destroyerIcons = ["images/Troops/germany/destroyer.png",
                      "images/Troops/sovietunion/destroyer.png",
                      "images/Troops/japan/destroyer.png",
                      "images/Troops/usa/destroyer.png",
                      "images/Troops/china/destroyer.png",
                      "images/Troops/uk/destroyer.png",
                      "images/Troops/uk/destroyer.png",
                      "images/Troops/italy/destroyer.png",
                      "images/Troops/anzac/destroyer.png",
                      "images/Troops/france/destroyer.png"];

const subIcons = ["images/Troops/germany/sub.png",
                "images/Troops/sovietunion/sub.png",
                "images/Troops/japan/sub.png",
                "images/Troops/usa/sub.png",
                "images/Troops/china/sub.png",
                "images/Troops/uk/sub.png",
                "images/Troops/uk/sub.png",
                "images/Troops/italy/sub.png",
                "images/Troops/anzac/sub.png",
                "images/Troops/france/sub.png"];

const transportIcons = ["images/Troops/germany/transport.png",
                      "images/Troops/sovietunion/transport.png",
                      "images/Troops/japan/transport.png",
                      "images/Troops/usa/transport.png",
                      "images/Troops/china/transport.png",
                      "images/Troops/uk/transport.png",
                      "images/Troops/uk/transport.png",
                      "images/Troops/italy/transport.png",
                      "images/Troops/anzac/transport.png",
                      "images/Troops/france/transport.png"];

const background = ["images/Background/germany.png",
                  "images/Background/sovietunion.png",
                  "images/Background/japan.png",
                  "images/Background/unitedstates.png",
                  "images/Background/china.png",
                  "images/Background/ukeurope.png",
                  "images/Background/ukpacific.png",
                  "images/Background/italy.png",
                  "images/Background/anzac.png",
                  "images/Background/france.png"];

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
  const turn = props.turn;
  const dateString = props.dateString;

  const dispatch = useDispatch();
  const country = props.country;
  const [orders, setOrders] =  useState([]);
  const [totalCost, setTotalCost] = useState(0);

  
  const removeOrder = name => {
    setOrders(orders => orders.filter(order => order.name !== name));
  }
  
  const addOrder = (newOrder, unitCost) => {
    if (country.ipcs >= totalCost + unitCost) {
      if (orders => orders.fiilter(order => order.name !== newOrder.name)) {
        setOrders(orders => [newOrder, ...orders.filter(order => order.name !== newOrder.name)]);
        setTotalCost(totalCost => totalCost + unitCost);
      }
    }
  }

  const clearOrders = () => {
    setOrders(orders => []);
    setTotalCost(totalCost => 0);
  }

  const addPurchase = (orders, country, dateString, turn) => {
    orders.map(order => dispatch(startAddingPurchase(order.name, order.amount, country.c_id, dateString, turn)));
    clearOrders();
  }

  return (
    <div>
      <div className="col-xs-12 col-md-2" id="unitColumn">
        <h2>Total Cost: {totalCost}</h2>
        <button type="button" className="closeButtons" onClick={() => addPurchase(orders, country, dateString, turn)}>Purchase</button>
        <button type="button" className="closeButtons" onClick={() => clearOrders()}>Clear Orders</button>

        <h3>Ordered:</h3>
        {orders.map(order => <Order key={order.name} order={order} remove={removeOrder}/>)}
      </div>

      <div className="col-xs-12 col-md-10"  id="tableColumn">
        <div id="backgroundContainer"><img className="backgroundImage" id={backgroundId[country.c_id]} src={background[country.c_id]} alt=""/></div>

        {country.c_id !== 4 &&

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

              <td><img src="images/Facilities/major.png" alt="Major IC icon"/></td>
              <td><p>Major Industrial Complex</p><p>Cost: 30</p></td>
              <td><button type="button" onClick={orders => addOrder({name: "Major IC", amount: 1}, 30)}>Order</button></td>

              <td><img className="utilities" src="images/Utilities/research.png" alt="Research icon"/></td>
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

              <td><img src="images/Facilities/minor.png" alt="Minor IC icon"/></td>
              <td>Minor Industrial Complex<p></p><p>Cost: 12</p></td>
              <td><button type="button" id="minorIC" onClick={orders => addOrder({name: "Minor IC", amount: 1}, 12)}>Order</button></td>

              <td><img className="utilities" src="images/Utilities/wrench.jpg" alt="Repair icon"/></td>
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

              <td><img src="images/Facilities/upgrade.png" alt="Upgrade IC icon"/></td>
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

              <td><img src="images/Facilities/airbase.png" alt="Airbase icon"/></td>
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

              <td><img src="images/Facilities/navalbase.png" alt="Navalbase icon"/></td>
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
        </table>}

        {country.c_id === 4 && 
        
        <table id="unitTable" className="center">
          <thead>
            <tr>
              <th></th>
              <th>Land Units</th>
              <th>Order</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><img src={infantryIcons[country.c_id]} alt="Infantry icon"/></td>
              <td><p>Infantry</p><p>Cost: 3</p></td>
              <td><button type="button" onClick={orders => addOrder({name: "Infantry", amount: 1}, 3)}>Order</button></td>
            </tr>

            <tr>
              <td><img src={artilleryIcons[country.c_id]} alt="Artillery icon"/></td>
              <td><p>Artillery</p><p>Cost: 4</p></td>
              <td><button type="button" id="artillery" onClick={orders => addOrder({name: "Artillery", amount: 1}, 4)}>Order</button></td>
            </tr>

          </tbody>
        </table>}

      </div>
    </div>

  );
}