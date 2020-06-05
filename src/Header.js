import React, {useState} from 'react';

export function Header(props) {
  const [pressed, setPressed] = useState(false);
  const country = props.country;
  const flagSrc = ["germany.png", "sovietunion.jpg", "japan.png", "usa.jpg", "china.png", "ukeurope.png", "ukpacific.png", "italy.png", "anzac.jpg", "france.jpg"];
  let flags;

  if (country.c_id !== undefined) {
    flags = "images/flags/" + flagSrc[country.c_id];
  }

  return (
    <div className="header">
      <div className="row">
        <div className="col-xs-12 col-md-3">
          <div className="row"><h2>Turn: {props.turn}</h2></div>
          <div className="row"><h2>{props.seasonYear}</h2></div>
        </div>
        <div className="col-xs-12 col-md-6">
          <br/>
          <h1 className="center">Axis and Allies Global Second Edition</h1>
        </div>
        <div className="col-xs-1"></div>
        <div className="col-xs-12 col-md-2">
          <br/>
          <h1>IPCs: {country.ipcs}</h1>
        </div>
      </div>
      
      <nav className="row">        
        <ul>
          <li><a href="rules/global.pdf" target="_blank">Global Rules</a></li>
          <li><a href="rules/europe.pdf" target="_blank">Europe Rules</a></li>
          <li><a href="rules/pacific.pdf" target="_blank">Pacific Rules</a></li>
        </ul>
      </nav>

      <div className="row">
        <div id="infoRow1">
          <div className="col-xs-12 col-md-3 col-lg-2">
            <img src={flags} alt="Country Flag"/>
          </div>
          <div className="col-xs-12 col-md-4">
            <h2 id="country1">Country: {country.c_name}</h2>
          </div>
          <div className="col-xs-12 col-md-2 col-lg-4">
            <br/>
            <button type="button" className="closeButtons" onClick={() => {setPressed(pressed => !pressed)}}>Instructions</button>
            <button type="button" className="closeButtons" onClick={() => props.viewPurchases()}>View Purchases</button>
            <button type="button" className="closeButtons" onClick={() => props.resetPurchases()}>Clear Purchase Database</button>
          </div>
          <div className="col-xs-12 col-md-3 col-lg-2">
            <br/>
            <button type="button" id="leftArrow" onClick={() => props.leftArrow()}>&lt;</button>   
            <p id="countrySelectText">Select Country</p>
            <button type="button" id="rightArrow" onClick={() => props.rightArrow()}>&gt;</button>
          </div>
        </div>
      </div>
      {pressed && 
      <div className="row">
        <div className="col-xs-12">
          <p><b>Order:</b> Adds troops to a cart.</p>   
          <p><b>Clear Orders:</b> Resets cart and total cost.</p>
          <p><b>Purchase:</b> Sends troops to a database. Make sure country, turn, and troop are different from other entries.</p>
          <p><b>View Purchases:</b> View all purchase history.</p>
          <p><b>Clear Purchase Database:</b> Clears purchase history.</p>
          <p><b>Select Country Arrows:</b> Change country. When all countries cycle, turn changes.</p>
        </div>
      </div>
      }
    </div>
  );
}

export default Header;