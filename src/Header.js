import React from 'react';

export function Header(props) {
  const country = props.country;
  const flags = ["/images/Flags/GermanFlag.png", 
                 "/images/Flags/SovietUnionFlag.jpg",
                 "/images/Flags/JapanFlag.png",
                 "/images/Flags/USFlag.jpg",
                 "/images/Flags/ChinaFlag.png",
                 "/images/Flags/UnitedKingdomEuropeFlag.png",
                 "/images/Flags/UnitedKingdomPacificFlag.png",
                 "/images/Flags/ItalyFlag.png",
                 "/images/Flags/ANZACFlag.jpg",
                 "/images/Flags/FranceFlag.jpg"
  ];

  return (
    <div className="header">
      <div className="row">
        <div className="col-3">
          <div className="row"><h2>Turn: {props.turn}</h2></div>
          <div className="row"><h2>{props.dateString}</h2></div>
        </div>
        <div className="col-6">
          <br/>
          <h1 className="center">Axis and Allies Global Second Edition</h1>
        </div>
        <div className="col-1"></div>
        <div className="col-2">
          <br/>
          <h1>IPCs: {country.ipcs}</h1>
        </div>
      </div>
      
      <nav className="row">        
        <ul>
          <li><a href="rules/Globalrules.pdf" target="_blank">Global rules</a></li>
          <li><a href="rules/Europerules.pdf" target="_blank">Europe rules</a></li>
          <li><a href="rules/Pacificrules.pdf" target="_blank">Pacific rules</a></li>
        </ul>
      </nav>

      <div className="row">
        <div id="infoRow1">
          <div className="col-2">
            <img src={flags[country.c_id]} alt="Country Flag"/>
          </div>
          <div className="col-5">
            <h2 id="country1">Country: {country.c_name}</h2>
          </div>
          <div className="col-3">
            <br/>
            <button type="button" className="closeButtons" onClick={() => props.resetPurchases()}>Clear Purchase Database</button>
            <button type="button" className="closeButtons" onClick={() => props.viewPurchases()}>View Purchases</button>
          </div>
          <div className="col-2">
            <br/>
            <button type="button" id="leftArrow" onClick={() => props.leftArrow()}>&lt;</button>   
            <p id="countrySelectText">Select Country</p>
            <button type="button" id="rightArrow" onClick={() => props.rightArrow()}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;