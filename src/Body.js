import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Order} from './Order';
import {startAddingPurchase} from './actions';

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

  const countrySrc = ["germany", "sovietunion", "japan", "usa", "china", "uk", "uk", "italy", "anzac", "france"];
  let infantryIcon, artilleryIcon, mechIcon, tankIcon, aaaIcon, fighterIcon, tacBomberIcon, stratBomberIcon, subIcon, transportIcon, destroyerIcon, cruiserIcon, carrierIcon, battleshipIcon, minorIcon, airbaseIcon, navalbaseIcon, upgradeIcon, majorIcon, repairIcon, researchIcon, airliftIcon;

  //Prevent errors on startup
  if(country.c_id !== undefined) {
    infantryIcon  = "images/troops/" + countrySrc[country.c_id] + "/infantry.png";
    artilleryIcon = "images/troops/" + countrySrc[country.c_id] + "/artillery.png";
    
    //Prevent errors on china turn
    if(country.c_id !== 4) {
      mechIcon        = "images/troops/" + countrySrc[country.c_id] + "/mech.png";
      tankIcon        = "images/troops/" + countrySrc[country.c_id] + "/tank.png";
      aaaIcon         = "images/troops/" + countrySrc[country.c_id] + "/aaa.png";
      fighterIcon     = "images/troops/" + countrySrc[country.c_id] + "/fighter.png";
      tacBomberIcon   = "images/troops/" + countrySrc[country.c_id] + "/tacbomber.png";
      stratBomberIcon = "images/troops/" + countrySrc[country.c_id] + "/stratbomber.png";
      subIcon         = "images/troops/" + countrySrc[country.c_id] + "/submarine.png";
      transportIcon   = "images/troops/" + countrySrc[country.c_id] + "/transport.png";
      destroyerIcon   = "images/troops/" + countrySrc[country.c_id] + "/destroyer.png";
      cruiserIcon     = "images/troops/" + countrySrc[country.c_id] + "/cruiser.png";
      carrierIcon     = "images/troops/" + countrySrc[country.c_id] + "/carrier.png";
      battleshipIcon  = "images/troops/" + countrySrc[country.c_id] + "/battleship.png";
      minorIcon       = "images/facilities/minor.png";
      airbaseIcon     = "images/facilities/airbase.png";
      navalbaseIcon   = "images/facilities/navalbase.png";
      upgradeIcon     = "images/facilities/upgrade.png";
      majorIcon       = "images/facilities/major.png";
      repairIcon      = "images/utilities/repair.jpg";
      researchIcon    = "images/utilities/research.png";
      airliftIcon     = "images/utilities/airlift.png";
    }
  }
  //Change this to pass up the order that was pressed. Then we can filter out the order and also update the total cost 
  const removeOrder = name => {
    setOrders(orders => orders.filter(order => order.name !== name));
  }
  
  const addOrder = (newOrder) => {
    if (country.ipcs >= totalCost + newOrder.cost) {
      if (orders.filter(order => order.name === newOrder.name).length < 1) {
        setOrders(orders => [newOrder, ...orders.filter(order => order.name !== newOrder.name)]);
      }
      else {
        let oldOrder = orders.filter(order => order.name === newOrder.name)[0];
        oldOrder.amount++;
        setOrders(orders => [oldOrder, ...orders.filter(order => order.name !== newOrder.name)])
      }
      setTotalCost(totalCost => totalCost + newOrder.cost);
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
  
  const tabClick = (tabName) => {
    const tabs = document.getElementsByClassName("Tab");
    const cells = document.getElementsByClassName("Rtable-cell");
    for (let j = 0; j < tabs.length; j++) {
      if (tabs[j].getAttribute("name") === tabName) {
        tabs[j].setAttribute("aria-selected", "true");
      }
      else {
        tabs[j].setAttribute("aria-selected", "false");
      }
    }
    
    for (let j = 0; j < cells.length; j++) {
      let classAttribute = cells[j].getAttribute("class").replace(" hiddenSmall", "");
      cells[j].setAttribute("class", classAttribute);
      if (!classAttribute.includes(tabName)) {
        cells[j].setAttribute("class", classAttribute + " hiddenSmall");
      }
    }
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
        <div className="Rtable Rtable--5cols Rtable--collapse js-RtableTabs" id="unitTable">
          <div className="Tablist" role="tablist"> 
            <button className="Tab" role="tab" aria-selected="true" name="land" onClick={() => tabClick("land")}>Land</button>
            <button className="Tab" role="tab" aria-selected="false" name="aerial" onClick={() => tabClick("aerial")}>Aerial</button>
            <button className="Tab" role="tab" aria-selected="false" name="naval" onClick={() => tabClick("naval")}>Naval</button>
            <button className="Tab" role="tab" aria-selected="false" name="facilities" onClick={() => tabClick("facilities")}>Fac.</button>
            <button className="Tab" role="tab" aria-selected="false" name="utilities" onClick={() => tabClick("utilities")}>Util.</button>
          </div>

          {/*Land Column*/}
          <div style={{order:0}} className="Rtable-cell Rtable-cell--head land"><h3>Land Units</h3></div>
          <div style={{order:1}} className="Rtable-cell table-item land" onClick={orders => addOrder({name: "Infantry", amount: 1, cost: 3})}>
            <img src={infantryIcon} alt="Infantry icon"/>
            <h3>Infantry</h3>
            <p>3</p>
          </div>

          <div style={{order:2}} className="Rtable-cell table-item land" onClick={orders => addOrder({name: "Artillery", amount: 1, cost: 4})}>
            <img src={artilleryIcon} alt="Artillery icon" className="landAdjustedImg"/>
            <h3>Artillery</h3>
            <p>4</p>
          </div>

          <div style={{order:3}} className="Rtable-cell table-item land" onClick={orders => addOrder({name: "Mechanized Infantry", amount: 1, cost: 4})}>
            <img src={mechIcon} alt="Mechanized Infantry icon" className="landAdjustedImg"/>
            <h3>Mechanized Infantry</h3>
            <p>4</p>
          </div>

          <div style={{order:4}} className="Rtable-cell table-item land" onClick={orders => addOrder({name: "AAA", amount: 1, cost: 5})}>
            <img src={aaaIcon} alt="Anti Aircraft Artillery icon" className="landAdjustedImg"/>
            <h3>AAA</h3>
            <p>5</p>
          </div>

          <div style={{order:5}} className="Rtable-cell table-item land" onClick={orders => addOrder({name: "Tank", amount: 1, cost: 6})}>
            <img src={tankIcon} alt="Tank icon" id="tank"/>
            <h3>Tank</h3>
            <p>6</p>
          </div>

          <div style={{order:6}} className="Rtable-cell table-item empty land"></div>
          <div style={{order:7}} className="Rtable-cell Rtable-cell--foot land"></div>

          {/*Aerial Column*/}
          <div style={{order:0}} className="Rtable-cell Rtable-cell--head aerial hiddenSmall"><h3>Aerial Units</h3></div>
          <div style={{order:1}} className="Rtable-cell table-item aerial hiddenSmall" onClick={orders => addOrder({name: "Fighter", amount: 1, cost: 10})}>
            <img src={fighterIcon} alt="Fighter icon"/>
            <h3>Fighter</h3>
            <p>10</p>
          </div>

          <div style={{order:2}} className="Rtable-cell table-item aerial hiddenSmall" onClick={orders => addOrder({name: "Tactical Bomber", amount: 1, cost: 11})}>
            <img src={tacBomberIcon} alt="Tactical Bomber icon"/>
            <h3>Tactical Bomber</h3>
            <p>11</p>
          </div>

          <div style={{order:3}} className="Rtable-cell table-item aerial hiddenSmall" onClick={orders => addOrder({name: "Strategic Bomber", amount: 1, cost: 12})}>
            <img src={stratBomberIcon} alt="Stategic Bomber icon"/>
            <h3>Strategic Bomber</h3>
            <p>12</p>
          </div>

          <div style={{order:4}} className="Rtable-cell table-item aerial empty hiddenSmall"></div>
          <div style={{order:5}} className="Rtable-cell table-item aerial empty hiddenSmall"></div>
          <div style={{order:6}} className="Rtable-cell table-item aerial empty hiddenSmall"></div>
          <div style={{order:7}} className="Rtable-cell Rtable-cell--foot aerial hiddenSmall"></div>

          {/*Naval Column*/}
          <div style={{order:0}} className="Rtable-cell Rtable-cell--head naval hiddenSmall"><h3>Naval Units</h3></div>
          <div style={{order:1}} className="Rtable-cell table-item naval hiddenSmall" onClick={orders => addOrder({name: "Submarine", amount: 1, cost: 6})}>
            <img src={subIcon} alt="Submarine icon"/>
            <h3>Submarine</h3>
            <p>6</p>
          </div>

          <div style={{order:2}} className="Rtable-cell table-item naval hiddenSmall" onClick={orders => addOrder({name: "Transport", amount: 1, cost: 7})}>
            <img src={transportIcon} alt="Transport icon"/>
            <h3>Transport</h3>
            <p>7</p>
          </div>

          <div style={{order:3}} className="Rtable-cell table-item naval hiddenSmall" onClick={orders => addOrder({name: "Destroyer", amount: 1, cost: 8})}>
            <img src={destroyerIcon} alt="Destroyer icon"/>
            <h3>Destroyer</h3>
            <p>8</p>
          </div>
            
          <div style={{order:4}} className="Rtable-cell table-item naval hiddenSmall" onClick={orders => addOrder({name: "Cruiser", amount: 1, cost: 12})}>
            <img src={cruiserIcon} alt="Cruiser icon"/>
            <h3>Cruiser</h3>
            <p>12</p>
          </div>
            
          <div style={{order:5}} className="Rtable-cell table-item naval hiddenSmall" onClick={orders => addOrder({name: "Aircraft Carrier", amount: 1, cost: 16})}>
            <img src={carrierIcon} alt="Aircraft Carrier icon"/>
            <h3>Aircraft Carrier</h3>
            <p>16</p>
          </div>

          <div style={{order:6}} className="Rtable-cell table-item naval hiddenSmall" onClick={orders => addOrder({name: "Battleship", amount: 1, cost: 20})}>
            <img src={battleshipIcon} alt="Battleship icon"/>
            <h3>Battleship</h3>
            <p>20</p>
          </div>
          
          <div style={{order:7}} className="Rtable-cell Rtable-cell--foot naval hiddenSmall"></div>

          {/*Facilities Column*/}
          <div style={{order:0}} className="Rtable-cell Rtable-cell--head facilities hiddenSmall"><h3>Facilities</h3></div>
          <div style={{order:1}} className="Rtable-cell table-item facilities hiddenSmall" onClick={orders => addOrder({name: "Minor IC", amount: 1, cost: 12})}>
            <img className="facilities" src={minorIcon} alt="Minor IC icon"/>
            <h3>Minor Industrial Complex</h3>
            <p>12</p>
          </div>

          <div style={{order:2}} className="Rtable-cell table-item facilities hiddenSmall" onClick={orders => addOrder({name: "Air Base", amount: 1, cost: 15})}>
            <img className="facilities" src={airbaseIcon} alt="Air Base icon"/>
            <h3>Air Base</h3>
            <p>15</p>
          </div>

          <div style={{order:3}} className="Rtable-cell table-item facilities hiddenSmall" onClick={orders => addOrder({name: "Naval Base", amount: 1, cost: 15})}>
            <img className="facilities" src={navalbaseIcon} alt="Naval Base icon"/>
            <h3>Naval Base</h3>
            <p>15</p>
          </div>

          <div style={{order:4}} className="Rtable-cell table-item facilities hiddenSmall" onClick={orders => addOrder({name: "Upgraded Minor IC", amount: 1, cost: 20})}>
            <img className="facilities" src={upgradeIcon} alt="Upgrade IC icon"/>
            <h3>Upgrade Minor IC</h3>
            <p>20</p>
          </div>
          
          <div style={{order:5}} className="Rtable-cell table-item facilities hiddenSmall" onClick={orders => addOrder({name: "Major IC", amount: 1, cost: 30})}>
            <img className="facilities" src={majorIcon} alt="Major IC icon"/>
            <h3>Major Industrial Complex</h3>
            <p>30</p>
          </div>

          <div style={{order:6}} className="Rtable-cell table-item empty facilities hiddenSmall"></div>
          <div style={{order:7}} className="Rtable-cell Rtable-cell--foot facilities hiddenSmall"></div>

          {/*Utilities Column*/}
          <div style={{order:0}} className="Rtable-cell Rtable-cell--head utilities hiddenSmall"><h3>Utilities</h3></div>
          <div style={{order:1}} className="Rtable-cell table-item utilities hiddenSmall" onClick={orders => addOrder({name: "Repair", amount: 1, cost: 1})}>
            <img className="utilities" src={repairIcon} alt="Repair icon"/>
            <h3>Repair</h3>
            <p>1</p>
          </div>
            
          <div style={{order:2}} className="Rtable-cell table-item utilities hiddenSmall" onClick={orders => addOrder({name: "Research", amount: 1, cost: 5})}>
            <img className="utilities" src={researchIcon} alt="Research icon"/>
            <h3>Research</h3>
            <p>5</p>
          </div>

          <div style={{order:3}} className="Rtable-cell table-item utilities hiddenSmall" onClick={orders => addOrder({name: "Airlift", amount: 1, cost: 5})}>
            <img className="utilities" src={airliftIcon} alt="Airlift icon"/>
            <h3>Airlift</h3>
            <p>5</p>
          </div>

          <div style={{order:4}} className="Rtable-cell table-item empty utilities hiddenSmall"></div>
          <div style={{order:5}} className="Rtable-cell table-item empty utilities hiddenSmall"></div>
          <div style={{order:6}} className="Rtable-cell table-item empty utilities hiddenSmall"></div>
          <div style={{order:7}} className="Rtable-cell Rtable-cell--foot utilities hiddenSmall"></div>

        </div>}
        
        {country.c_id === 4 && 
        
          <div className="Rtable Rtable--1cols Rtable--collapse js-RtableTabs" id="unitTable">
            <div style={{order:0}} className="Rtable-cell Rtable-cell--head"><h3>Land Units</h3></div>
            <div style={{order:1}} className="Rtable-cell table-item" onClick={orders => addOrder({name: "Infantry", amount: 1, cost: 3})}>
              <img src={infantryIcon} alt="Infantry icon" id="chinaInf"/>
              <h3>Infantry</h3>
              <p>3</p>
            </div>

            <div style={{order:2}} className="Rtable-cell table-item" onClick={orders => addOrder({name: "Artillery", amount: 1, cost: 4})}>
              <img src={artilleryIcon} alt="Artillery icon" id="chinaArty"/>
              <h3>Artillery</h3>
              <p>4</p>
            </div>

            <div style={{order:3}} className="Rtable-cell Rtable-cell--foot"></div>
          </div>
        }

      </div>
    </div>

  );
}