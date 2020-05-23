import React from 'react';

export function Report(props) {
  const purchase = props.purchase;

  const countries = ["Germany", "Soviet Union", "Japan", "United States", "China", "UK Europe", "UK Pacific", "Italy", "ANZAC", "France"];
  const countrySRC = ["germany", "sovietunion", "japan", "usa", "china", "uk", "uk", "italy", "anzac", "france"];
  let imageFolder = "";
  let unitName = "";
  let srcString = "";

  switch(purchase.p_name) {
    case "Repair":
      imageFolder = "images/utilities/";
      unitName = purchase.p_name + ".jpg";
      break;
    case "Research":
      imageFolder = "images/utilities/";
      unitName = purchase.p_name + ".png";
      break;
    case "Airlift":
      imageFolder = "images/utilities/";
      unitName = purchase.p_name + ".png";
      break;
    case "Major IC":
      imageFolder = "images/facilities/";
      unitName = "major.png";
      break;
    case "Minor IC":
      imageFolder = "images/facilities/";
      unitName = "minor.png";
      break;
    case "Upgraded Minor IC":
      imageFolder = "images/facilities/";
      unitName = "upgrade.png";
      break;
    case "Air Base":
      imageFolder = "images/facilities/";
      unitName = "airbase.png";
      break;
    case "Naval Base":
      imageFolder = "images/facilities/";
      unitName = "navalbase.png";
      break;
    case "Mechanized Infantry":
      imageFolder = "images/troops/";
      unitName = "mech.png";
      break;
    case "Tactical Bomber":
      imageFolder = "images/troops/";
      unitName = "tacbomber.png";
      break;
    case "Strategic Bomber":
      imageFolder = "images/troops/";
      unitName = "stratbomber.png";
      break;
    case "Aircraft Carrier":
      imageFolder = "images/troops/";
      unitName = "carrier.png";
      break;
    default:
      imageFolder = "images/troops/";
      unitName = purchase.p_name + ".png";
  }

  if (imageFolder === "images/utilities/" || imageFolder === "images/facilities/"){
    srcString = imageFolder + unitName;
  }
  else {
    srcString = imageFolder + countrySRC[purchase.c_id] + "/" + unitName;
  }

  console.log(srcString.toLowerCase());
  
  return (
    <div className="report">
      <h1>{countries[purchase.c_id]}</h1>
      <img src={srcString.toLowerCase()} alt="Unit icon"/>
      <h2>Unit: {purchase.p_name}</h2>
      <p>Amount: {purchase.amount}</p>
      <p>{purchase.season_year}</p>
      <p>Turn: {purchase.turn}</p>
    </div>
  );
}