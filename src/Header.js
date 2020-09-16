import React, {useState} from 'react';

export function Header(props) {
  const [pressed, setPressed] = useState(false);
  const country = props.country;
  const flagSrc = ["germany.png", "sovietunion.jpg", "japan.png", "usa.jpg", "china.png", "ukeurope.png", "ukpacific.png", "italy.png", "anzac.jpg", "france.jpg"];
  let flag;

  if (country.c_id !== undefined) {
    flag = "images/flags/" + flagSrc[country.c_id];
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
          <h1 className="center">Unofficial Axis and Allies Global 1940 2<sup>nd</sup> Edition Companion App</h1>
        </div>
        <div className="col-xs-1"></div>
        <div className="col-xs-12 col-md-2">
          <br/>
          <h1>IPCs: {country.ipcs}</h1>
        </div>
      </div>
      
      <nav className="row">        
        <ul>
          <li><a href="#purchaseRoot">Purchase</a></li>
          <li><a href="#incomeRoot">Income</a></li>
          <li><a href="#reportRoot">Report</a></li>
          <li><a href="#researchRoot">Research</a></li>
          <li className="rules"><a href="rules/global.pdf" target="_blank">Global Rules</a></li>
          <li className="rules"><a href="rules/europe.pdf" target="_blank">Europe Rules</a></li>
          <li className="rules"><a href="rules/pacific.pdf" target="_blank">Pacific Rules</a></li>
        </ul>
      </nav>

      <div className="row">
        <div id="infoRow1">
          <div className="col-xs-12 col-md-3 col-lg-2">
            <img src={flag} alt="Country Flag"/>
          </div>
          <div className="col-xs-12 col-md-4">
            <h2 id="country1">{country.c_name}</h2>
          </div>
          <div className="col-xs-12 col-md-2 col-lg-4">
            <br/>
            <button type="button" className="closeButtons" onClick={() => {setPressed(pressed => !pressed)}}>Instructions</button>
            <button type="button" className="closeButtons" onClick={() => props.viewReport()}>View Report</button>
            <button type="button" className="closeButtons" onClick={() => props.resetDatabase()}>Reset Database</button>
          </div>
          <div className="col-xs-12 col-md-3 col-lg-2">
            <br/>
            <button type="button" id="leftArrow" onClick={() => props.leftArrow()}>&lt;</button>   
            <p id="countrySelectText">&nbsp; Select Country &nbsp;</p>
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
          <p><b>View Report:</b> View all history.</p>
          <p><b>Reset Database:</b> Clears purchase history and income history.</p>
          <p><b>Select Country Arrows:</b> Change country. When all countries cycle, turn changes.</p>
        </div>
      </div>
      }
    </div>
  );
}

export default Header;