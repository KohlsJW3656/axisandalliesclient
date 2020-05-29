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
      <div className="col-xs-12 col-lg-2" id="unitColumn">
        <h2>Total Cost: {totalCost}</h2>
        <button type="button" className="closeButtons" onClick={() => addPurchase(orders, country, dateString, turn)}>Purchase</button>
        <button type="button" className="closeButtons" onClick={() => clearOrders()}>Clear Orders</button>

        <h3>Ordered:</h3>
        {orders.map(order => <Order key={order.name} order={order} remove={removeOrder}/>)}
      </div>

      <div className="col-xs-12 col-lg-10"  id="tableColumn">
        <div id="backgroundContainer"><img className="backgroundImage" id={backgroundId[country.c_id]} src={background[country.c_id]} alt=""/></div>

        {country.c_id !== 4 &&
        <div className="Rtable Rtable--5cols Rtable--collapse js-RtableTabs" id="unitTable">
          <div className="Tablist" role="tablist"> 
            <button className="Tab" role="tab" aria-selected="true">Land</button>
            <button className="Tab" role="tab" aria-selected="false">Air</button>
            <button className="Tab" role="tab" aria-selected="false">Navy</button>
            <button className="Tab" role="tab" aria-selected="false">Facilities</button>
            <button className="Tab" role="tab" aria-selected="false">Utilities</button>
          </div>

          <div style={{order:0}} className="Rtable-cell Rtable-cell--head"><h3>Land Units</h3></div>
          <div style={{order:1}} className="Rtable-cell table-item">
            <img src={infantryIcons[country.c_id]} alt="Infantry icon"/>
            <h3>Infantry</h3>
            <p>Cost: 3</p>
            <button type="button" onClick={orders => addOrder({name: "Infantry", amount: 1}, 3)}>Order</button>
          </div>

          <div style={{order:2}} className="Rtable-cell table-item">
            <img src={artilleryIcons[country.c_id]} alt="Artillery icon"/>
            <h3>Artillery</h3>
            <p>Cost: 4</p>
            <button type="button" onClick={orders => addOrder({name: "Artillery", amount: 1}, 4)}>Order</button>
          </div>

          <div style={{order:3}} className="Rtable-cell table-item">
            <img src={mechIcons[country.c_id]} alt="Mechanized Infantry icon"/>
            <h3>Mechanized Infantry</h3>
            <p>Cost: 4</p>
            <button type="button" onClick={orders => addOrder({name: "Mechanized Infantry", amount: 1}, 4)}>Order</button>
          </div>

          <div style={{order:4}} className="Rtable-cell table-item">
            <img src={tankIcons[country.c_id]} alt="Tank icon"/>
            <h3>Tank</h3>
            <p>Cost: 6</p>
            <button type="button" onClick={orders => addOrder({name: "Tank", amount: 1}, 6)}>Order</button>
          </div>

          <div style={{order:5}} className="Rtable-cell table-item">
            <img src={aaaIcons[country.c_id]} alt="Anti Aircraft Artillery icon"/>
            <h3>AAA</h3>
            <p>Cost: 5</p>
            <button type="button" onClick={orders => addOrder({name: "AAA", amount: 1}, 5)}>Order</button>
          </div>

          <div style={{order:6}} className="Rtable-cell table-item"></div>
          <div style={{order:7}} className="Rtable-cell Rtable-cell--foot"></div>

          <div style={{order:0}} className="Rtable-cell Rtable-cell--head"><h3>Aerial Units</h3></div>
          <div style={{order:1}} className="Rtable-cell table-item">
            <img src={fighterIcons[country.c_id]} alt="Fighter icon"/>
            <h3>Fighter</h3>
            <p>Cost: 10</p>
            <button type="button" onClick={orders => addOrder({name: "Fighter", amount: 1}, 10)}>Order</button>
          </div>

          <div style={{order:2}} className="Rtable-cell table-item">
            <img src={tacBomberIcons[country.c_id]} alt="Tactical Bomber icon"/>
            <h3>Tactical Bomber</h3>
            <p>Cost: 11</p>
            <button type="button" onClick={orders => addOrder({name: "Tactical Bomber", amount: 1}, 11)}>Order</button>
          </div>

          <div style={{order:3}} className="Rtable-cell table-item">
            <img src={stratBomberIcons[country.c_id]} alt="Stategic Bomber icon"/>
            <h3>Strategic Bomber</h3>
            <p>Cost: 12</p>
            <button type="button" onClick={orders => addOrder({name: "Strategic Bomber", amount: 1}, 12)}>Order</button>
          </div>

          <div style={{order:4}} className="Rtable-cell table-item"></div>
          <div style={{order:5}} className="Rtable-cell table-item"></div>
          <div style={{order:6}} className="Rtable-cell table-item"></div>
          <div style={{order:7}} className="Rtable-cell Rtable-cell--foot"></div>

          <div style={{order:0}} className="Rtable-cell Rtable-cell--head"><h3>Naval Units</h3></div>
          <div style={{order:1}} className="Rtable-cell table-item">
            <img src={battleshipIcons[country.c_id]} alt="Battleship icon"/>
            <h3>Battleship</h3>
            <p>Cost: 20</p>
            <button type="button" onClick={orders => addOrder({name: "Battleship", amount: 1}, 20)}>Order</button>
          </div>

          <div style={{order:2}} className="Rtable-cell table-item">
            <img src={carrierIcons[country.c_id]} alt="Aircraft Carrier icon"/>
            <h3>Aircraft Carrier</h3>
            <p>Cost: 16</p>
            <button type="button" onClick={orders => addOrder({name: "Aircraft Carrier", amount: 1}, 16)}>Order</button>
          </div>

          <div style={{order:3}} className="Rtable-cell table-item">
            <img src={cruiserIcons[country.c_id]} alt="Cruiser icon"/>
            <h3>Cruiser</h3>
            <p>Cost: 12</p>
            <button type="button" onClick={orders => addOrder({name: "Cruiser", amount: 1}, 12)}>Order</button>
          </div>

          <div style={{order:4}} className="Rtable-cell table-item">
            <img src={destroyerIcons[country.c_id]} alt="Destroyer icon"/>
            <h3>Destroyer</h3>
            <p>Cost: 8</p>
            <button type="button" onClick={orders => addOrder({name: "Destroyer", amount: 1}, 8)}>Order</button>
          </div>

          <div style={{order:5}} className="Rtable-cell table-item">
            <img src={subIcons[country.c_id]} alt="Submarine icon"/>
            <h3>Submarine</h3>
            <p>Cost: 6</p>
            <button type="button" onClick={orders => addOrder({name: "Submarine", amount: 1}, 6)}>Order</button>
          </div>

          <div style={{order:6}} className="Rtable-cell table-item">
            <img src={transportIcons[country.c_id]} alt="Transport icon"/>
            <h3>Transport</h3>
            <p>Cost: 7</p>
            <button type="button" onClick={orders => addOrder({name: "Transport", amount: 1}, 7)}>Order</button>
          </div>
          <div style={{order:7}} className="Rtable-cell Rtable-cell--foot"></div>

          <div style={{order:0}} className="Rtable-cell Rtable-cell--head"><h3>Facilities</h3></div>
          <div style={{order:1}} className="Rtable-cell table-item">
            <img className="facilities" src="images/facilities/major.png" alt="Major IC icon"/>
            <h3>Major Industrial Complex</h3>
            <p>Cost: 30</p>
            <button type="button" onClick={orders => addOrder({name: "Major IC", amount: 1}, 30)}>Order</button>
          </div>

          <div style={{order:2}} className="Rtable-cell table-item">
            <img className="facilities" src="images/facilities/minor.png" alt="Minor IC icon"/>
            <h3>Minor Industrial Complex</h3>
            <p>Cost: 12</p>
            <button type="button" onClick={orders => addOrder({name: "Minor IC", amount: 1}, 12)}>Order</button>
          </div>

          <div style={{order:3}} className="Rtable-cell table-item">
            <img className="facilities" src="images/facilities/upgrade.png" alt="Upgrade IC icon"/>
            <h3>Upgrade Minor Industrial Complex</h3>
            <p>Cost: 20</p>
            <button type="button" onClick={orders => addOrder({name: "Upgraded Minor IC", amount: 1}, 20)}>Order</button>
          </div>

          <div style={{order:4}} className="Rtable-cell table-item">
            <img className="facilities" src="images/facilities/airbase.png" alt="Airbase icon"/>
            <h3>Air Base</h3>
            <p>Cost: 15</p>
            <button type="button" onClick={orders => addOrder({name: "Air Base", amount: 1}, 15)}>Order</button>
          </div>

          <div style={{order:5}} className="Rtable-cell table-item">
            <img className="facilities" src="images/facilities/navalbase.png" alt="Navalbase icon"/>
            <h3>Naval Base</h3>
            <p>Cost: 15</p>
            <button type="button" onClick={orders => addOrder({name: "Naval Base", amount: 1}, 15)}>Order</button>
          </div>

          <div style={{order:6}} className="Rtable-cell table-item"></div>
          <div style={{order:7}} className="Rtable-cell Rtable-cell--foot"></div>

          <div style={{order:0}} className="Rtable-cell Rtable-cell--head"><h3>Utilities</h3></div>
          <div style={{order:1}} className="Rtable-cell table-item">
            <img className="utilities" src="images/utilities/research.png" alt="Research icon"/>
            <h3>Research</h3>
            <p>Cost: 5</p>
            <button type="button" onClick={orders => addOrder({name: "Research", amount: 1}, 5)}>Order</button>
          </div>

          <div style={{order:2}} className="Rtable-cell table-item">
            <img className="utilities" src="images/utilities/repair.jpg" alt="Repair icon"/>
            <h3>Repair</h3>
            <p>Cost: 1</p>
            <button type="button" onClick={orders => addOrder({name: "Repair", amount: 1}, 1)}>Order</button>
          </div>

          <div style={{order:3}} className="Rtable-cell table-item">
            <img className="utilities" src="images/utilities/airlift.png" alt="Airlift icon"/>
            <h3>Airlift</h3>
            <p>Cost: 5</p>
            <button type="button" onClick={orders => addOrder({name: "Airlift", amount: 1}, 5)}>Order</button>
          </div>

          <div style={{order:4}} className="Rtable-cell table-item"></div>
          <div style={{order:5}} className="Rtable-cell table-item"></div>
          <div style={{order:6}} className="Rtable-cell table-item"></div>
          <div style={{order:7}} className="Rtable-cell Rtable-cell--foot"></div>

        </div>}
        
        {country.c_id === 4 && 
        
          <div className="Rtable Rtable--1cols Rtable--collapse js-RtableTabs" id="unitTable">
            <div style={{order:0}} className="Rtable-cell Rtable-cell--head"><h3>Land Units</h3></div>
            <div style={{order:1}} className="Rtable-cell table-item">
              <img src={infantryIcons[country.c_id]} alt="Infantry icon"/>
              <h3>Infantry</h3>
              <p>Cost: 3</p>
              <button type="button" onClick={orders => addOrder({name: "Infantry", amount: 1}, 3)}>Order</button>
            </div>

            <div style={{order:2}} className="Rtable-cell table-item">
              <img src={artilleryIcons[country.c_id]} alt="Artillery icon"/>
              <h3>Artillery</h3>
              <p>Cost: 4</p>
              <button type="button" onClick={orders => addOrder({name: "Artillery", amount: 1}, 4)}>Order</button>
            </div>
          </div>
        }

      </div>
    </div>

  );
}