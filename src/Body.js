import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Order} from './Order';
import {startAddingPurchase} from './actions';

const infantryIcons = ["images/troops/germany/infantry.png",
                      "images/troops/sovietunion/infantry.png",
                      "images/troops/japan/infantry.png",
                      "images/troops/usa/infantry.png",
                      "images/troops/china/infantry.png",
                      "images/troops/uk/infantry.png",
                      "images/troops/uk/infantry.png",
                      "images/troops/italy/infantry.png",
                      "images/troops/anzac/infantry.png",
                      "images/troops/france/infantry.png"];
                        
const artilleryIcons = ["images/troops/germany/artillery.png",
                      "images/troops/sovietunion/artillery.png",
                      "images/troops/japan/artillery.png",
                      "images/troops/usa/artillery.png",
                      "images/troops/china/artillery.png",
                      "images/troops/uk/artillery.png",
                      "images/troops/uk/artillery.png",
                      "images/troops/italy/artillery.png",
                      "images/troops/anzac/artillery.png",
                      "images/troops/france/artillery.png"];

const mechIcons = ["images/troops/germany/mech.png",
                  "images/troops/sovietunion/mech.png",
                  "images/troops/japan/mech.png",
                  "images/troops/usa/mech.png",
                  "images/troops/china/mech.png",
                  "images/troops/uk/mech.png",
                  "images/troops/uk/mech.png",
                  "images/troops/italy/mech.png",
                  "images/troops/anzac/mech.png",
                  "images/troops/france/mech.png"];

const tankIcons = ["images/troops/germany/tank.png",
                  "images/troops/sovietunion/tank.png",
                  "images/troops/japan/tank.png",
                  "images/troops/usa/tank.png",
                  "images/troops/china/tank.png",
                  "images/troops/uk/tank.png",
                  "images/troops/uk/tank.png",
                  "images/troops/italy/tank.png",
                  "images/troops/anzac/tank.png",
                  "images/troops/france/tank.png"];

const aaaIcons = ["images/troops/germany/aaa.png",
                  "images/troops/sovietunion/aaa.png",
                  "images/troops/japan/aaa.png",
                  "images/troops/usa/aaa.png",
                  "images/troops/china/aaa.png",
                  "images/troops/uk/aaa.png",
                  "images/troops/uk/aaa.png",
                  "images/troops/italy/aaa.png",
                  "images/troops/anzac/aaa.png",
                  "images/troops/france/aaa.png"];

const fighterIcons = ["images/troops/germany/fighter.png",
                    "images/troops/sovietunion/fighter.png",
                    "images/troops/japan/fighter.png",
                    "images/troops/usa/fighter.png",
                    "images/troops/china/fighter.png",
                    "images/troops/uk/fighter.png",
                    "images/troops/uk/fighter.png",
                    "images/troops/italy/fighter.png",
                    "images/troops/anzac/fighter.png",
                    "images/troops/france/fighter.png"];

const tacBomberIcons = ["images/troops/germany/tacbomber.png",
                      "images/troops/sovietunion/tacbomber.png",
                      "images/troops/japan/tacbomber.png",
                      "images/troops/usa/tacbomber.png",
                      "images/troops/china/tacbomber.png",
                      "images/troops/uk/tacbomber.png",
                      "images/troops/uk/tacbomber.png",
                      "images/troops/italy/tacbomber.png",
                      "images/troops/anzac/tacbomber.png",
                      "images/troops/france/tacbomber.png"];

const stratBomberIcons = ["images/troops/germany/stratbomber.png",
                        "images/troops/sovietunion/stratbomber.png",
                        "images/troops/japan/stratbomber.png",
                        "images/troops/usa/stratbomber.png",
                        "images/troops/china/stratbomber.png",
                        "images/troops/uk/stratbomber.png",
                        "images/troops/uk/stratbomber.png",
                        "images/troops/italy/stratbomber.png",
                        "images/troops/anzac/stratbomber.png",
                        "images/troops/france/stratbomber.png"];

const battleshipIcons = ["images/troops/germany/battleship.png",
                        "images/troops/sovietunion/battleship.png",
                        "images/troops/japan/battleship.png",
                        "images/troops/usa/battleship.png",
                        "images/troops/china/battleship.png",
                        "images/troops/uk/battleship.png",
                        "images/troops/uk/battleship.png",
                        "images/troops/italy/battleship.png",
                        "images/troops/anzac/battleship.png",
                        "images/troops/france/battleship.png"];

const carrierIcons = ["images/troops/germany/carrier.png",
                    "images/troops/sovietunion/carrier.png",
                    "images/troops/japan/carrier.png",
                    "images/troops/usa/carrier.png",
                    "images/troops/china/carrier.png",
                    "images/troops/uk/carrier.png",
                    "images/troops/uk/carrier.png",
                    "images/troops/italy/carrier.png",
                    "images/troops/anzac/carrier.png",
                    "images/troops/france/carrier.png"];

const cruiserIcons = ["images/troops/germany/cruiser.png",
                    "images/troops/sovietunion/cruiser.png",
                    "images/troops/japan/cruiser.png",
                    "images/troops/usa/cruiser.png",
                    "images/troops/china/cruiser.png",
                    "images/troops/uk/cruiser.png",
                    "images/troops/uk/cruiser.png",
                    "images/troops/italy/cruiser.png",
                    "images/troops/anzac/cruiser.png",
                    "images/troops/france/cruiser.png"];

const destroyerIcons = ["images/troops/germany/destroyer.png",
                      "images/troops/sovietunion/destroyer.png",
                      "images/troops/japan/destroyer.png",
                      "images/troops/usa/destroyer.png",
                      "images/troops/china/destroyer.png",
                      "images/troops/uk/destroyer.png",
                      "images/troops/uk/destroyer.png",
                      "images/troops/italy/destroyer.png",
                      "images/troops/anzac/destroyer.png",
                      "images/troops/france/destroyer.png"];

const subIcons = ["images/troops/germany/submarine.png",
                "images/troops/sovietunion/submarine.png",
                "images/troops/japan/submarine.png",
                "images/troops/usa/submarine.png",
                "images/troops/china/submarine.png",
                "images/troops/uk/submarine.png",
                "images/troops/uk/submarine.png",
                "images/troops/italy/submarine.png",
                "images/troops/anzac/submarine.png",
                "images/troops/france/submarine.png"];

const transportIcons = ["images/troops/germany/transport.png",
                      "images/troops/sovietunion/transport.png",
                      "images/troops/japan/transport.png",
                      "images/troops/usa/transport.png",
                      "images/troops/china/transport.png",
                      "images/troops/uk/transport.png",
                      "images/troops/uk/transport.png",
                      "images/troops/italy/transport.png",
                      "images/troops/anzac/transport.png",
                      "images/troops/france/transport.png"];

const background = ["images/background/germany.png",
                  "images/background/sovietunion.png",
                  "images/background/japan.png",
                  "images/background/unitedstates.png",
                  "images/background/china.png",
                  "images/background/ukeurope.png",
                  "images/background/ukpacific.png",
                  "images/background/italy.png",
                  "images/background/anzac.png",
                  "images/background/france.png"];

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

              <td><img className="utilities" src="images/Utilities/repair.jpg" alt="Repair icon"/></td>
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