var window, document;
var LEFT = 37;
var RIGHT = 39;
var countries = ["Germany", "Soviet Union", "Japan", "United States", "China", "United Kingdom Europe", "United Kingdom Pacific", "Italy", "ANZAC", "France"];
var infantry = 3;
var artillery = 4;
var mechInfantry = 4;
var tank = 6;
var aaa = 5;
var fighter = 10;
var tacBomber = 11;
var stratBomber = 12;
var battleship = 20;
var carrier = 16;
var cruiser = 12;
var destroyer = 8;
var sub = 6;
var transport = 7;
var majorIC = 30;
var minorIC = 12;
var airBase = 15;
var navalBase = 15;
var research = 5;
var repair = 1;
var airlift = 5;
var upgradeIC = 20;

var purchasingPower = 0;
var i = 0;
var totalCost = 0;

var infCounter = 1;
var artCounter = 1;
var mechCounter = 1;
var tankCounter = 1;
var aaaCounter = 1;
var fighterCounter = 1;
var tacCounter = 1;
var stratCounter = 1;
var battleshipCounter = 1;
var carrierCounter = 1;
var cruiserCounter = 1;
var destroyerCounter = 1;
var subCounter = 1;
var transportCounter = 1;
var majorCounter = 1;
var minorCounter = 1;
var airCounter = 1;
var navalCounter = 1;
var researchCounter = 1;
var repairCounter = 1;
var airliftCounter = 1;
var upgradeICCounter = 1;

var purchasedInf = 0;
var purchasedArt = 0;
var purchasedMech = 0;
var purchasedTank = 0;
var purchasedAAA = 0;
var purchasedFighter = 0;
var purchasedTac = 0;
var purchasedStrat = 0;
var purchasedBattleship = 0;
var purchasedCarrier = 0;
var purchasedCruiser = 0;
var purchasedDestroyer = 0;
var purchasedSub = 0;
var purchasedTransport = 0;
var purchasedMajorIC = 0;
var purchasedMinorIC = 0;
var purchasedUpgradeIC = 0;
var purchasedAirBase = 0;
var purchasedNavalBase = 0;
var purchasedResearch = 0;
var purchasedRepair = 0;
var purchasedAirlift = 0;

var isImprovedShipyardsGermany = false;
var isImprovedShipyardsSovietUnion = false;
var isImprovedShipyardsJapan = false;
var isImprovedShipyardsUnitedStates = false;
var isImprovedShipyardsUnitedKingdom = false;
var isImprovedShipyardsItaly = false;
var isImprovedShipyardsANZAC = false;
var isImprovedShipyardsFrance = false;

var isFirstInfantry = true;
var isFirstArtillery = true;
var isFirstMech = true;
var isFirstTank = true;
var isFirstAAA = true;
var isFirstFighter = true;
var isFirstTac = true;
var isFirstStrat = true;
var isFirstBattleship = true;
var isFirstCarrier = true;
var isFirstCruiser = true;
var isFirstDestroyer = true;
var isFirstSub = true;
var isFirstTransport = true;
var isFirstMajor = true;
var isFirstMinor = true;
var isFirstAir = true;
var isFirstNaval = true;
var isFirstResearch = true;
var isFirstRepair = true;
var isFirstAirlift = true;
var isFirstUpgradeIC = true;

var isFirstPurchasedInf = true;
var isFirstPurchasedArt = true;
var isFirstPurchasedMech = true;
var isFirstPurchasedTank = true;
var isFirstPurchasedAAA = true;
var isFirstPurchasedFighter = true;
var isFirstPurchasedTac = true;
var isFirstPurchasedStrat = true;
var isFirstPurchasedBattleship = true;
var isFirstPurchasedCarrier = true;
var isFirstPurchasedCruiser = true;
var isFirstPurchasedDestroyer = true;
var isFirstPurchasedSub = true;
var isFirstPurchasedTransport = true;
var isFirstPurchasedMajorIC = true;
var isFirstPurchasedMinorIC = true;
var isFirstPurchasedUpgradeIC = true;
var isFirstPurchasedAirBase = true;
var isFirstPurchasedNavalBase = true;
var isFirstPurchasedResearch = true;
var isFirstPurchasedRepair = true;
var isFirstPurchasedAirlift = true;

var turnCounter = 1;
var seasons = ["Spring/Summer", "Fall/Winter"];
var dateString = "";
var dateCounter = 1940;

var germany = 30;
var sovietUnion = 37;
var japan = 26;
var unitedStates = 52;
var china= 12;
var unitedKingdomEurope = 28;
var unitedKingdomPacific = 17 
var italy = 10;
var anzac = 10;
var france = 19;

var ipcs = [germany, sovietUnion, japan, unitedStates, china, unitedKingdomEurope, unitedKingdomPacific, italy, anzac, france];

var countryBreakthroughIcons = [
    "src=\"images/Icons/Germany.png\" class=\"breakthroughIcons\"",
    "src=\"images/Icons/SovietUnion.png\" class=\"breakthroughIcons\"", 
    "src=\"images/Icons/Japan.png\" class=\"breakthroughIcons\"", 
    "src=\"images/Icons/UnitedStates.png\" class=\"breakthroughIcons\"", 
    "src=\"images/Icons/UnitedKingdomEurope.png\" class=\"breakthroughIcons\"", 
    "src=\"images/Icons/Italy.png\" class=\"breakthroughIcons\"", 
    "src=\"images/Icons/ANZAC.png\" class=\"breakthroughIcons\"", 
    "src=\"images/Icons/France.png\" class=\"breakthroughIcons\""];

var countryVictoryCityIcons = [
    "src=\"images/Icons/Germany.png\" class=\"cityIcons\"",
    "src=\"images/Icons/SovietUnion.png\" class=\"cityIcons\"", 
    "src=\"images/Icons/Japan.png\" class=\"cityIcons\"", 
    "src=\"images/Icons/UnitedStates.png\" class=\"cityIcons\"",
    "src=\"images/Icons/China.png\" class=\"cityIcons\"",
    "src=\"images/Icons/UnitedKingdomEurope.png\" class=\"cityIcons\"",
    "src=\"images/Icons/UnitedKingdomPacific.png\" class=\"cityIcons\"",
    "src=\"images/Icons/Italy.png\" class=\"cityIcons\"", 
    "src=\"images/Icons/ANZAC.png\" class=\"cityIcons\"", 
    "src=\"images/Icons/France.png\" class=\"cityIcons\""];

var advancedArtilleryCountries = [];
var rocketsCountries = [];
var paratroopersCountries = [];
var increasedFactoryCountries = [];
var warBondsCountries = [];
var improvedMechanizedCountries = [];
var superSubsCountries = [];
var jetFightersCountries = [];
var improvedShipyardsCountries = [];
var radarCountries = [];
var longRangeAircraftCountries = [];
var heavyBombersCountries = [];

/*
====================================================================================================================================================================================================================================================================================================================================================================================================================================================================
*/

function onKeyDown(event) {
  if (event.keyCode === LEFT) {
    countrySelectLeftArrow();
  }
  if (event.keyCode === RIGHT) {
    countrySelectRightArrow();
  }
}
document.addEventListener("keydown", onKeyDown);

function countrySelectLeftArrow() {
  if (turnCounter != 1 || i != 0) {
    if (totalCost != 0) {
      window.alert("Press Purchase or Clear")
    }
    else {
      if (i - 1 == -1) {
        i = 9;
        turnCounter--;
        displayTurnCounter();
        displayDateCounterBackward();
      }
      else {
        i--;
      }
      document.documentElement.scrollTop = 0;
      displayIcons();
      displayCountry();
      displayFlag();
      displayBackgroundImage();
    
      clearTextAreas();
      clearButton();
      displayIPCS();
      displayBonusIPCS();
      clearPurchasedDisplay();
    }  
  }
}

function countrySelectRightArrow() {
  if (totalCost != 0) {
    window.alert("Press Purchase or Clear")
  }
  else {
    if (i + 1 == 10) {
      i = 0;
      turnCounter++;
      displayTurnCounter();
      displayDateCounterForward();
    }
    else {
      i++;
    }
    document.documentElement.scrollTop = 0;
    displayIcons();
    displayCountry();
    displayFlag();
    displayBackgroundImage();
    
    clearTextAreas();
    clearButton();
    displayIPCS();
    displayBonusIPCS();
    clearPurchasedDisplay();
  }
}

function purchaseButton() {
  displayPurchasedUnits();
  ipcs[i] -= totalCost;
  totalCost = 0;
  displayIPCS();
  displayCost();
  displayPurchasingPower();
}

function isAxisTurn() {
  return i == 0 || i == 2 || i == 7;
}

/*
====================================================================================================================================================================================================================================================================================================================================================================================================================================================================
*/

function clearDisplay() {
  document.getElementById("unitDisplay").innerHTML = "";
  infCounter = 1;
  artCounter = 1;
  mechCounter = 1;
  tankCounter = 1;
  aaaCounter = 1;
  fighterCounter = 1;
  tacCounter = 1;
  stratCounter = 1;
  battleshipCounter = 1;
  carrierCounter = 1;
  cruiserCounter = 1;
  destroyerCounter = 1;
  subCounter = 1;
  transportCounter = 1;
  majorCounter = 1;
  minorCounter = 1;
  airCounter = 1;
  navalCounter = 1;
  researchCounter = 1;
  repairCounter = 1;
  upgradeICCounter = 1;
  airliftCounter = 1;
  
  isFirstInfantry = true;
  isFirstArtillery = true;
  isFirstMech = true;
  isFirstTank = true;
  isFirstAAA = true;
  isFirstFighter = true;
  isFirstTac = true;
  isFirstStrat = true;
  isFirstBattleship = true;
  isFirstCarrier = true;
  isFirstCruiser = true;
  isFirstDestroyer = true;
  isFirstSub = true;
  isFirstTransport = true;
  isFirstMajor = true;
  isFirstMinor = true;
  isFirstAir = true;
  isFirstNaval = true;
  isFirstResearch = true;
  isFirstRepair = true;
  isFirstAirlift = true;
  isFirstUpgradeIC = true;
}

function clearTextAreas() {
  clearTextAreaConvoy();
  clearTextAreaMan();
  clearTextAreaIncome();
}

function clearTextAreaMan() {
  document.getElementById("enterIPCS").value = "";
}

function clearTextAreaIncome() {
  document.getElementById("ipcIncome").value = "";
}

function clearTextAreaConvoy() {
  document.getElementById("convoyLosses").value = "";
}

function clearPurchasedDisplay() {
  document.getElementById("purchasedDisplay").innerHTML = "";
  
  isFirstPurchasedInf = true;
  isFirstPurchasedArt = true;
  isFirstPurchasedMech = true;
  isFirstPurchasedTank = true;
  isFirstPurchasedAAA = true;
  isFirstPurchasedFighter = true;
  isFirstPurchasedTac = true;
  isFirstPurchasedStrat = true;
  isFirstPurchasedBattleship = true;
  isFirstPurchasedCarrier = true;
  isFirstPurchasedCruiser = true;
  isFirstPurchasedDestroyer = true;
  isFirstPurchasedSub = true;
  isFirstPurchasedTransport = true;
  isFirstPurchasedMajorIC = true;
  isFirstPurchasedMinorIC = true;
  isFirstPurchasedUpgradeIC = true;
  isFirstPurchasedAirBase = true;
  isFirstPurchasedNavalBase = true;
  isFirstPurchasedResearch = true;
  isFirstPurchasedRepair = true;
  isFirstPurchasedAirlift = true;
  
  purchasedInf = 0;
  purchasedArt = 0;
  purchasedMech = 0;
  purchasedTank = 0;
  purchasedAAA = 0;
  purchasedFighter = 0;
  purchasedTac = 0;
  purchasedStrat = 0;
  purchasedBattleship = 0;
  purchasedCarrier = 0;
  purchasedCruiser = 0;
  purchasedDestroyer = 0;
  purchasedSub = 0;
  purchasedTransport = 0;
  purchasedMajorIC = 0;
  purchasedMinorIC = 0;
  purchasedUpgradeIC = 0;
  purchasedAirBase = 0;
  purchasedNavalBase = 0;
  purchasedResearch = 0;
  purchasedRepair = 0;
  purchasedAirlift = 0;
}

function clearInfantry() {
  var elem = document.getElementById("infDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("infButton");
  elem.parentElement.removeChild(elem);
  isFirstInfantry = true;
  
  totalCost -= (infCounter - 1) * infantry;
  infCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearArtillery() {
  var elem = document.getElementById("artDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("artButton");
  elem.parentElement.removeChild(elem);
  isFirstArtillery = true;
  
  totalCost -= (artCounter - 1) * artillery;
  artCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearMech() {
  var elem = document.getElementById("mechDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("mechButton");
  elem.parentElement.removeChild(elem);
  isFirstMech = true;
  
  totalCost -= (mechCounter - 1) * mechInfantry;
  mechCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearTank() {
  var elem = document.getElementById("tankDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("tankButton");
  elem.parentElement.removeChild(elem);
  isFirstTank = true;
  
  totalCost -= (tankCounter - 1) * tank;
  tankCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearAAA() {
  var elem = document.getElementById("aaaDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("aaaButton");
  elem.parentElement.removeChild(elem);
  isFirstAAA = true;
  
  totalCost -= (aaaCounter - 1) * aaa;
  aaaCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearFighter() {
  var elem = document.getElementById("fighterDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("fighterButton");
  elem.parentElement.removeChild(elem);
  isFirstFighter = true;
  
  totalCost -= (fighterCounter - 1) * fighter;
  fighterCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearTac() {
  var elem = document.getElementById("tacDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("tacButton");
  elem.parentElement.removeChild(elem);
  isFirstTac = true;
  
  totalCost -= (tacCounter - 1) * tacBomber;
  tacCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearStrat() {
  var elem = document.getElementById("stratDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("stratButton");
  elem.parentElement.removeChild(elem);
  isFirstStrat = true;
  
  totalCost -= (stratCounter - 1) * stratBomber;
  stratCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearBattleship() {
  var elem = document.getElementById("battleshipDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("battleshipButton");
  elem.parentElement.removeChild(elem);
  isFirstBattleship = true;
  
  totalCost -= (battleshipCounter - 1) * battleship;
  battleshipCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearCarrier() {
  var elem = document.getElementById("carrierDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("carrierButton");
  elem.parentElement.removeChild(elem);
  isFirstCarrier = true;
  
  totalCost -= (carrierCounter - 1) * carrier;
  carrierCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearCruiser() {
  var elem = document.getElementById("cruiserDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("cruiserButton");
  elem.parentElement.removeChild(elem);
  isFirstCruiser = true;
  
  totalCost -= (cruiserCounter - 1) * cruiser;
  cruiserCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearDestroyer() {
  var elem = document.getElementById("destroyerDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("destroyerButton");
  elem.parentElement.removeChild(elem);
  isFirstDestroyer = true;
  
  totalCost -= (destroyerCounter - 1) * destroyer;
  destroyerCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearSub() {
  var elem = document.getElementById("subDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("subButton");
  elem.parentElement.removeChild(elem);
  isFirstSub = true;
  
  totalCost -= (subCounter - 1) * sub;
  subCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearTransport() {
  var elem = document.getElementById("transportDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("transportButton");
  elem.parentElement.removeChild(elem);
  isFirstTransport = true;
  
  totalCost -= (transportCounter - 1) * transport;
  transportCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearMajorIC() {
  var elem = document.getElementById("majorICDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("majorICButton");
  elem.parentElement.removeChild(elem);
  isFirstMajor = true;
  
  totalCost -= (majorCounter - 1) * majorIC;
  majorCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearMinorIC() {
  var elem = document.getElementById("minorICDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("minorICButton");
  elem.parentElement.removeChild(elem);
  isFirstMinor = true;
  
  totalCost -= (minorCounter - 1) * minorIC;
  minorCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearUpgradeIC() {
  var elem = document.getElementById("upgradeICDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("upgradeICButton");
  elem.parentElement.removeChild(elem);
  isFirstUpgradeIC = true;
  
  totalCost -= (upgradeICCounter - 1) * upgradeIC;
  upgradeICCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearAirBase() {
  var elem = document.getElementById("airBaseDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("airBaseButton");
  elem.parentElement.removeChild(elem);
  isFirstAir = true;
  
  totalCost -= (airCounter - 1) * airBase;
  airCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearNavalBase() {
  var elem = document.getElementById("navalBaseDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("navalBaseButton");
  elem.parentElement.removeChild(elem);
  isFirstNaval = true;
  
  totalCost -= (navalCounter - 1) * navalBase;
  navalCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearResearch() {
  var elem = document.getElementById("researchDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("researchButton");
  elem.parentElement.removeChild(elem);
  isFirstResearch = true;
  
  totalCost -= (researchCounter - 1) * research;
  researchCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearRepair() {
  var elem = document.getElementById("repairDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("repairButton");
  elem.parentElement.removeChild(elem);
  isFirstRepair = true;
  
  totalCost -= (repairCounter - 1) * repair;
  repairCounter = 1;
  displayCost();
  displayPurchasingPower();
}

function clearAirlift() {
  var elem = document.getElementById("airliftDisplay");
  elem.parentElement.removeChild(elem);
  elem = document.getElementById("airliftButton");
  elem.parentElement.removeChild(elem);
  isFirstAirlift = true;
  
  totalCost -= (airliftCounter - 1) * airlift;
  airliftCounter = 1;
  displayCost();
  displayPurchasingPower();
}

/*
====================================================================================================================================================================================================================================================================================================================================================================================================================================================================
*/

function displayPurchasedUnits() {
  var para, element, node;
  document.getElementById("unitDisplay").innerHTML = "";
  isFirstInfantry = true;
  isFirstArtillery = true;
  isFirstMech = true;
  isFirstTank = true;
  isFirstAAA = true;
  isFirstFighter = true;
  isFirstTac = true;
  isFirstStrat = true;
  isFirstBattleship = true;
  isFirstCarrier = true;
  isFirstCruiser = true;
  isFirstDestroyer = true;
  isFirstSub = true;
  isFirstTransport = true;
  isFirstMajor = true;
  isFirstMinor = true;
  isFirstUpgradeIC = true;
  isFirstAir = true;
  isFirstNaval = true;
  isFirstResearch = true;
  isFirstRepair = true;
  isFirstAirlift = true;
  
  //Infantry
  if (infCounter > 1) {
    purchasedInf += infCounter - 1;
    infCounter = 1;
    
    if (isFirstPurchasedInf) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedInfDisplay");
      node = document.createTextNode(purchasedInf + " x Infantry");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedInf = false;
    }
    else {
      document.getElementById("purchasedInfDisplay").innerHTML = purchasedInf + " x Infantry";
    }
  }
  //Artillery
  if (artCounter > 1) {
    purchasedArt += artCounter - 1;
    artCounter = 1;
    
    if (isFirstPurchasedArt) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedArtDisplay");
      node = document.createTextNode(purchasedArt + " x Artillery");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedArt = false;
    }
    else {
      document.getElementById("purchasedArtDisplay").innerHTML = purchasedArt + " x Artillery";
    }
  }
  //Mechanized Infantry
  if (mechCounter > 1) {
    purchasedMech += mechCounter - 1;
    mechCounter = 1;
    
    if (isFirstPurchasedMech) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedMechDisplay");
      node = document.createTextNode(purchasedMech + " x Mechanized Infantry");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedMech = false;
    }
    else {
      document.getElementById("purchasedMechDisplay").innerHTML = purchasedMech + " x Mechanized Infantry";
    }
  }
  //Tank
  if (tankCounter > 1) {
    purchasedTank += tankCounter - 1;
    tankCounter = 1;
    
    if (isFirstPurchasedTank) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedTankDisplay");
      node = document.createTextNode(purchasedTank + " x Tank");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedTank = false;
    }
    else {
      document.getElementById("purchasedTankDisplay").innerHTML = purchasedTank + " x Tank";
    }
  }
  //AAA
  if (aaaCounter > 1) {
    purchasedAAA += aaaCounter - 1;
    aaaCounter = 1;
    
    if (isFirstPurchasedAAA) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedAAADisplay");
      node = document.createTextNode(purchasedAAA + " x AAA");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedAAA = false;
    }
    else {
      document.getElementById("purchasedAAADisplay").innerHTML = purchasedAAA + " x AAA";
    }
  }
  //Fighter
  if (fighterCounter > 1) {
    purchasedFighter += fighterCounter - 1;
    fighterCounter = 1;
    
    if (isFirstPurchasedFighter) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedFighterDisplay");
      node = document.createTextNode(purchasedFighter + " x Fighter");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedFighter = false;
    }
    else {
      document.getElementById("purchasedFighterDisplay").innerHTML = purchasedFighter + " x Fighter";
    }
  }
  //Tactical Bomber
  if (tacCounter > 1) {
    purchasedTac += tacCounter - 1;
    tacCounter = 1;
    
    if (isFirstPurchasedTac) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedTacDisplay");
      node = document.createTextNode(purchasedTac + " x Tactical Bomber");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedTac = false;
    }
    else {
      document.getElementById("purchasedTacDisplay").innerHTML = purchasedTac + " x Tactical Bomber";
    }
  }
  //Strategic Bomber
  if (stratCounter > 1) {
    purchasedStrat += stratCounter - 1;
    stratCounter = 1;
    
    if (isFirstPurchasedStrat) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedStratDisplay");
      node = document.createTextNode(purchasedStrat + " x Strategic Bomber");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedStrat = false;
    }
    else {
      document.getElementById("purchasedStratDisplay").innerHTML = purchasedStrat + " x Strategic Bomber";
    }
  }
  //Battleship
  if (battleshipCounter > 1) {
    purchasedBattleship += battleshipCounter - 1;
    battleshipCounter = 1;
    
    if (isFirstPurchasedBattleship) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedBattleshipDisplay");
      node = document.createTextNode(purchasedBattleship + " x Battleship");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedBattleship = false;
    }
    else {
      document.getElementById("purchasedBattleshipDisplay").innerHTML = purchasedBattleship + " x Battleship";
    }
  }
  //Aircraft Carrier
  if (carrierCounter > 1) {
    purchasedCarrier += carrierCounter - 1;
    carrierCounter = 1;
    
    if (isFirstPurchasedCarrier) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedCarrierDisplay");
      node = document.createTextNode(purchasedCarrier + " x Aircraft Carrier");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedCarrier = false;
    }
    else {
      document.getElementById("purchasedCarrierDisplay").innerHTML = purchasedCarrier + " x Aircraft Carrier";
    }
  }
  //Cruiser
  if (cruiserCounter > 1) {
    purchasedCruiser += cruiserCounter - 1;
    cruiserCounter = 1;
    
    if (isFirstPurchasedCruiser) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedCruiserDisplay");
      node = document.createTextNode(purchasedCruiser + " x Cruiser");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedCruiser = false;
    }
    else {
      document.getElementById("purchasedCruiserDisplay").innerHTML = purchasedCruiser + " x Cruiser";
    }
  }
  //Destroyer
  if (destroyerCounter > 1) {
    purchasedDestroyer += destroyerCounter - 1;
    destroyerCounter = 1;
    
    if (isFirstPurchasedDestroyer) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedDestroyerDisplay");
      node = document.createTextNode(purchasedDestroyer + " x Destoryer");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedDestroyer = false;
    }
    else {
      document.getElementById("purchasedDestroyerDisplay").innerHTML = purchasedDestroyer + " x Destroyer";
    }
  }
  //Submarine
  if (subCounter > 1) {
    purchasedSub += subCounter - 1;
    subCounter = 1;
    
    if (isFirstPurchasedSub) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedSubDisplay");
      node = document.createTextNode(purchasedSub + " x Submarine");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedSub = false;
    }
    else {
      document.getElementById("purchasedSubDisplay").innerHTML = purchasedSub + " x Submarine";
    }
  }
  //Transport
  if (transportCounter > 1) {
    purchasedTransport += transportCounter - 1;
    transportCounter = 1;
    
    if (isFirstPurchasedTransport) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedTransportDisplay");
      node = document.createTextNode(purchasedTransport + " x Transport");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedTransport = false;
    }
    else {
      document.getElementById("purchasedTransportDisplay").innerHTML = purchasedTransport + " x Transport";
    }
  }
  //Major Industrial Complex
  if (majorCounter > 1) {
    purchasedMajorIC += majorCounter - 1;
    majorCounter = 1;
    
    if (isFirstPurchasedMajorIC) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedMajorICDisplay");
      node = document.createTextNode(purchasedMajorIC + " x Major Industrial Complex");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedMajorIC = false;
    }
    else {
      document.getElementById("purchasedMajorICDisplay").innerHTML = purchasedMajorIC + " x Major Industrial Complex";
    }
  }
  //Minor Industrial Complex
  if (minorCounter > 1) {
    purchasedMinorIC += minorCounter - 1;
    minorCounter = 1;
    
    if (isFirstPurchasedMinorIC) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedMinorICDisplay");
      node = document.createTextNode(purchasedMinorIC + " x Minor Industrial Complex");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedMinorIC = false;
    }
    else {
      document.getElementById("purchasedMinorICDisplay").innerHTML = purchasedMinorIC + " x Minor Industrial Complex";
    }
  }
  //Upgrade Minor Industrial Complex
  if (upgradeICCounter > 1) {
    purchasedUpgradeIC += upgradeICCounter - 1;
    upgradeICCounter = 1;
    
    if (isFirstPurchasedUpgradeIC) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedUpgradeICDisplay");
      node = document.createTextNode(purchasedUpgradeIC + " x Upgraded Minor IC");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedUpgradeIC = false;
    }
    else {
      document.getElementById("purchasedUpgradeICDisplay").innerHTML = purchasedUpgradeIC + " x Upgraded Minor IC";
    }
  }
  //Air Base
  if (airCounter > 1) {
    purchasedAirBase += airCounter - 1;
    airCounter = 1;
    
    if (isFirstPurchasedAirBase) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedAirBaseDisplay");
      node = document.createTextNode(purchasedAirBase + " x Air Base");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedAirBase = false;
    }
    else {
      document.getElementById("purchasedAirBaseDisplay").innerHTML = purchasedAirBase + " x Air Base";
    }
  }
  //Naval Base
  if (navalCounter > 1) {
    purchasedNavalBase += navalCounter - 1;
    navalCounter = 1;
    
    if (isFirstPurchasedNavalBase) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedNavalBaseDisplay");
      node = document.createTextNode(purchasedNavalBase + " x Naval Base");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedNavalBase = false;
    }
    else {
      document.getElementById("purchasedNavalBaseDisplay").innerHTML = purchasedNavalBase + " x Naval Base";
    }
  }
  //Research
  if (researchCounter > 1) {
    purchasedResearch += researchCounter - 1;
    researchCounter = 1;
    
    if (isFirstPurchasedResearch) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedResearchDisplay");
      node = document.createTextNode(purchasedResearch + " x Research");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedResearch = false;
    }
    else {
      document.getElementById("purchasedResearchDisplay").innerHTML = purchasedResearch + " x Research";
    }
  }
  //Repair
  if (repairCounter > 1) {
    purchasedRepair += repairCounter - 1;
    repairCounter = 1;
    
    if (isFirstPurchasedRepair) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedRepairDisplay");
      node = document.createTextNode(purchasedRepair + " x Repair");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedRepair = false;
    }
    else {
      document.getElementById("purchasedRepairDisplay").innerHTML = purchasedRepair + " x Repair";
    }
  }
  //Airlift
  if (airliftCounter > 1) {
    purchasedAirlift += airliftCounter - 1;
    airliftCounter = 1;
    
    if (isFirstPurchasedAirlift) {
      para = document.createElement("p");
      para.setAttribute("id","purchasedAirliftDisplay");
      node = document.createTextNode(purchasedAirlift + " x Airlift");
      para.appendChild(node);
      element = document.getElementById("purchasedDisplay");
      element.appendChild(para);
      isFirstPurchasedAirlift = false;
    }
    else {
      document.getElementById("purchasedAirliftDisplay").innerHTML = purchasedAirlift + " x Airlift";
    }
  }
}

function displayBackgroundImage() {
  //Germany
  if (i == 0) {
    document.getElementById("backgroundContainer").innerHTML = "<img class=\"backgroundImage\" src=\"images/Background/Germany.png\" id=\"backgroundGermany\">";
  }
  //Soviet Union
  else if (i == 1) {
    document.getElementById("backgroundContainer").innerHTML = "<img class=\"backgroundImage\" src=\"images/Background/SovietUnion.png\" id=\"backgroundSovietUnion\">";
  }
  //Japan
  else if (i == 2) {
    document.getElementById("backgroundContainer").innerHTML = "<img class=\"backgroundImage\" src=\"images/Background/Japan.png\" id=\"backgroundJapan\">";
  }
  //United States
  else if (i == 3) {
    document.getElementById("backgroundContainer").innerHTML = "<img class=\"backgroundImage\" src=\"images/Background/UnitedStates.png\" id=\"backgroundUnitedStates\">";
  }
  //China
  else if (i == 4) {
    document.getElementById("backgroundContainer").innerHTML = "<img class=\"backgroundImage\" src=\"images/Background/\" id=\"backgroundChina\">";
  }
  //United Kingdom Europe
  else if (i == 5) {
    document.getElementById("backgroundContainer").innerHTML = "<img class=\"backgroundImage\" src=\"images/Background/\" id=\"backgroundUnitedKingdomEurope\">";
  }
  //United Kingdom Pacific
  else if (i == 6) {
    document.getElementById("backgroundContainer").innerHTML = "<img class=\"backgroundImage\" src=\"images/Background/\" id=\"backgroundUnitedKingdomPacific\">";
  }
  //Italy
  else if (i == 7) {
    document.getElementById("backgroundContainer").innerHTML = "<img class=\"backgroundImage\" src=\"images/Background/\" id=\"backgroundItaly\">";
  }
  //ANZAC
  else if (i == 8) {
    document.getElementById("backgroundContainer").innerHTML = "<img class=\"backgroundImage\" src=\"images/Background/\" id=\"backgroundANZAC\">";
  }
  //France
  else if (i == 9) {
    document.getElementById("backgroundContainer").innerHTML = "<img class=\"backgroundImage\" src=\"images/Background/France.png\" id=\"backgroundFrance\">";
  }
}

function displayFlag() {
  if (i == 0) {
    document.getElementById("flagIcon").innerHTML = "<img src=\"images/Flags/GermanFlag.png\">";
    document.getElementById("pageIcon").setAttribute("href", "images/Icons/Germany.png");
  }
  else if (i == 1) {
    document.getElementById("flagIcon").innerHTML = "<img src=\"images/Flags/SovietUnionFlag.jpg\">";
    document.getElementById("pageIcon").setAttribute("href", "images/Icons/SovietUnion.png");
  }
  else if (i == 2) {
    document.getElementById("flagIcon").innerHTML = "<img src=\"images/Flags/JapanFlag.png\">";
    document.getElementById("pageIcon").setAttribute("href", "images/Icons/Japan.png");
  }
  else if (i == 3) {
    document.getElementById("flagIcon").innerHTML = "<img src=\"images/Flags/USFlag.jpg\">";
    document.getElementById("pageIcon").setAttribute("href", "images/Icons/UnitedStates.png");
  }
  else if (i == 4) {
    document.getElementById("flagIcon").innerHTML = "<img src=\"images/Flags/ChinaFlag.png\">";
    document.getElementById("pageIcon").setAttribute("href", "images/Icons/China.png");
  }
  else if (i == 5) {
    document.getElementById("flagIcon").innerHTML = "<img src=\"images/Flags/UnitedKingdomEuropeFlag.png\">";
    document.getElementById("pageIcon").setAttribute("href", "images/Icons/UnitedKingdomEurope.png");
  }
  else if (i == 6) {
    document.getElementById("flagIcon").innerHTML = "<img src=\"images/Flags/UnitedKingdomPacificFlag.png\">";
    document.getElementById("pageIcon").setAttribute("href", "images/Icons/UnitedKingdomPacific.png");
  }
  else if (i == 7) {
    document.getElementById("flagIcon").innerHTML = "<img src=\"images/Flags/ItalyFlag.png\">";
    document.getElementById("pageIcon").setAttribute("href", "images/Icons/Italy.png");
  }
  else if (i == 8) {
    document.getElementById("flagIcon").innerHTML = "<img src=\"images/Flags/ANZACFlag.jpg\">";
    document.getElementById("pageIcon").setAttribute("href", "images/Icons/ANZAC.png");
  }
  else if (i == 9) {
    document.getElementById("flagIcon").innerHTML = "<img src=\"images/Flags/FrenchFlag.jpg\">";
    document.getElementById("pageIcon").setAttribute("href", "images/Icons/France.png");
  }
}

function displayDateCounterForward() {
  if (turnCounter == 1) {
    dateString = seasons[0] + " " +  dateCounter; 
  }
  else {
    //If Spring/Summer set to Fall/Winter
    if (turnCounter % 2 == 0) {
      dateString = seasons[1] + " " + dateCounter;
    }
    else {
      dateCounter++;
      dateString = seasons[0] + " " + dateCounter; 
    }
  }
  document.getElementById("dateCounter").innerHTML = dateString;
}

function displayDateCounterBackward() {
  if (turnCounter % 2 == 0) {
    dateCounter--;
    dateString = seasons[1] + " " + dateCounter;
  }
  else {    
    dateString = seasons[0] + " " + dateCounter;
  }  
  document.getElementById("dateCounter").innerHTML = dateString;
}

function displayTurnCounter() {
  document.getElementById("turnCounter").innerHTML = "Turn: " + turnCounter;
}

function displayPurchasingPower() {
  purchasingPower = ipcs[i] - totalCost;
  document.getElementById("purchasingPower").innerHTML = "Purchasing Power: " + purchasingPower;
}

function displayCost() {
  document.getElementById("costDisplay").innerHTML = "Total Cost: " + totalCost;
}

function displayInfantry() {
  if (isFirstInfantry) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearInfantry()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "infButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","infDisplay");
    node = document.createTextNode(infCounter + " x Infantry");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstInfantry = false;
  }
  else {
    document.getElementById("infDisplay").innerHTML = infCounter + " x Infantry";
  }
  infCounter++;
}

function displayArtillery() {
  if (isFirstArtillery) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearArtillery()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "artButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","artDisplay");
    node = document.createTextNode(artCounter + " x Artillery");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstArtillery = false;
  }
  else {
    document.getElementById("artDisplay").innerHTML = artCounter + " x Artillery";
  }
  artCounter++;
}

function displayMechInfantry() {
  if (isFirstMech) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearMech()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "mechButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","mechDisplay");
    node = document.createTextNode(mechCounter + " x Mechanized Infantry");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstMech = false;
  }
  else {
    document.getElementById("mechDisplay").innerHTML = mechCounter + " x Mechanized Infantry";
  }
  mechCounter++;
}

function displayTank() {
  if (isFirstTank) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearTank()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "tankButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","tankDisplay");
    node = document.createTextNode(tankCounter + " x Tank");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstTank = false;
  }
  else {
    document.getElementById("tankDisplay").innerHTML = tankCounter + " x Tank";
  }
  tankCounter++;
}

function displayAAA() {
  if (isFirstAAA) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearAAA()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "aaaButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","aaaDisplay");
    node = document.createTextNode(aaaCounter + " x AAA");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstAAA = false;
  }
  else {
    document.getElementById("aaaDisplay").innerHTML = aaaCounter + " x AAA";
  }
  aaaCounter++;
}

function displayFighter() {
  if (isFirstFighter) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearFighter()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "fighterButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","fighterDisplay");
    node = document.createTextNode(fighterCounter + " x Fighter");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstFighter = false;
  }
  else {
    document.getElementById("fighterDisplay").innerHTML = fighterCounter + " x Fighter";
  }
  fighterCounter++;
}

function displayTacBomber() {
  if (isFirstTac) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearTac()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "tacButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","tacDisplay");
    node = document.createTextNode(tacCounter + " x Tactical Bomber");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstTac = false;
  }
  else {
    document.getElementById("tacDisplay").innerHTML = tacCounter + " x Tactical Bomber";
  }
  tacCounter++;
}

function displayStratBomber() {
  if (isFirstStrat) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearStrat()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "stratButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","stratDisplay");
    node = document.createTextNode(stratCounter + " x Strategic Bomber");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstStrat = false;
  }
  else {
    document.getElementById("stratDisplay").innerHTML = stratCounter + " x Strategic Bomber";
  }
  stratCounter++;
}

function displayBattleship() {
  if (isFirstBattleship) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearBattleship()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "battleshipButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","battleshipDisplay");
    node = document.createTextNode(battleshipCounter + " x Battleship");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstBattleship = false;
  }
  else {
    document.getElementById("battleshipDisplay").innerHTML = battleshipCounter + " x Battleship";
  }
  battleshipCounter++;
}

function displayCarrier() {
  if (isFirstCarrier) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearCarrier()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "carrierButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","carrierDisplay");
    node = document.createTextNode(carrierCounter + " x Aircraft Carrier");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstCarrier = false;
  }
  else {
    document.getElementById("carrierDisplay").innerHTML = carrierCounter + " x Aircraft Carrier";
  }
  carrierCounter++;
}

function displayCruiser() {
  if (isFirstCruiser) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearCruiser()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "cruiserButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","cruiserDisplay");
    node = document.createTextNode(cruiserCounter + " x Cruiser");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstCruiser = false;
  }
  else {
    document.getElementById("cruiserDisplay").innerHTML = cruiserCounter + " x Cruiser";
  }
  cruiserCounter++;
}

function displayDestroyer() {
  if (isFirstDestroyer) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearDestroyer()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "destroyerButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","destroyerDisplay");
    node = document.createTextNode(destroyerCounter + " x Destroyer");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstDestroyer = false;
  }
  else {
    document.getElementById("destroyerDisplay").innerHTML = destroyerCounter + " x Destroyer";
  }
  destroyerCounter++;
}

function displaySub() {
  if (isFirstSub) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearSub()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "subButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","subDisplay");
    node = document.createTextNode(subCounter + " x Submarine");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstSub = false;
  }
  else {
    document.getElementById("subDisplay").innerHTML = subCounter + " x Submarine";
  }
  subCounter++;
}

function displayTransport() {
  if (isFirstTransport) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearTransport()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "transportButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","transportDisplay");
    node = document.createTextNode(transportCounter + " x Transport");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstTransport = false;
  }
  else {
    document.getElementById("transportDisplay").innerHTML = transportCounter + " x Transport";
  }
  transportCounter++;
}

function displayMajorIC() {
  if (isFirstMajor) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearMajorIC()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "majorICButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","majorICDisplay");
    node = document.createTextNode(majorCounter + " x Major Industrial Complex");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstMajor = false;
  }
  else {
    document.getElementById("majorICDisplay").innerHTML = majorCounter + " x Major Industrial Complex";
  }
  majorCounter++;
}

function displayMinorIC() {
  if (isFirstMinor) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearMinorIC()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "minorICButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","minorICDisplay");
    node = document.createTextNode(minorCounter + " x Minor Industrial Complex");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstMinor = false;
  }
  else {
    document.getElementById("minorICDisplay").innerHTML = minorCounter + " x Minor Industrial Complex";
  }
  minorCounter++;
}

function displayUpgradeIC() {
  if (isFirstUpgradeIC) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearUpgradeIC()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "upgradeICButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","upgradeICDisplay");
    node = document.createTextNode(upgradeICCounter + " x Upgraded Minor IC");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstUpgradeIC = false;
  }
  else {
    document.getElementById("upgradeICDisplay").innerHTML = upgradeICCounter + " x Upgraded Minor IC";
  }
  upgradeICCounter++;
}

function displayAirBase() {
  if (isFirstAir) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearAirBase()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "airBaseButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","airBaseDisplay");
    node = document.createTextNode(airCounter + " x Air Base");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstAir = false;
  }
  else {
    document.getElementById("airBaseDisplay").innerHTML = airCounter + " x Air Base";
  }
  airCounter++;
}

function displayNavalBase() {
  if (isFirstNaval) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearNavalBase()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "navalBaseButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","navalBaseDisplay");
    node = document.createTextNode(navalCounter + " x Naval Base");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstNaval = false;
  }
  else {
    document.getElementById("navalBaseDisplay").innerHTML = navalCounter + " x Naval Base";
  }
  navalCounter++;
}

function displayResearch() {
  if (isFirstResearch) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearResearch()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "researchButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","researchDisplay");
    node = document.createTextNode(researchCounter + " x Research");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstResearch = false;
  }
  else {
    document.getElementById("researchDisplay").innerHTML = researchCounter + " x Research";
  }
  researchCounter++;
}

function displayRepair() {
  if (isFirstRepair) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearRepair()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "repairButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","repairDisplay");
    node = document.createTextNode(repairCounter + " x Repair");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstRepair = false;
  }
  else {
    document.getElementById("repairDisplay").innerHTML = repairCounter + " x Repair";
  }
  repairCounter++;
}

function displayAirlift() {
  if (isFirstAirlift) {
    var para = document.createElement("button");
    para.setAttribute("onclick", "clearAirlift()");
    para.setAttribute("style", "float: right");
    para.setAttribute("id", "airliftButton");
    var node = document.createTextNode("x");
    para.appendChild(node);
    var element = document.getElementById("unitDisplay");
    element.appendChild(para);
    
    para = document.createElement("p");
    para.setAttribute("id","airliftDisplay");
    node = document.createTextNode(airliftCounter + " x Airlift");
    para.appendChild(node);
    element = document.getElementById("unitDisplay");
    element.appendChild(para);
    isFirstAirlift = false;
  }
  else {
    document.getElementById("airliftDisplay").innerHTML = airliftCounter + " x Airlift";
  }
  airliftCounter++;
}

function displayCountry() {
  document.getElementById("country1").innerHTML = "Country: " + countries[i];
  
  if (i != 4) {
    document.getElementById("country2").innerHTML = "Country: " + countries[i];
  }
}

function displayIPCS() {
  document.getElementById("ipcs1").innerHTML = "IPCs: " + ipcs[i];
  
  if (i != 4) {
    document.getElementById("ipcs2").innerHTML = "IPCs: " + ipcs[i];
  }
}

function displayBonusIPCS() {
  if (i == 0) {
    document.getElementById("bonusIPCS").innerHTML = "<input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs when Germany is not at war with the Soviet Union.<p>When Germany Is at War with the Societ Union:</p><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if Germany controls Leningrad.<br><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if Germany controls Stalingrad.<br><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if Germany controls Moscow.<br><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if an Axis power controls Caucasus.<p>When Germany Is at War with the United Kingdom and France:</p><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if at least 1 German land unit is in Axis-controlled Egypt.<br><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if Germany controls both Denmark and Norway while Sweden is neither pro-Allies nor Allies-controlled.<br><input type=\"checkbox\" value=\"2\" class=\"checkBox\">2 IPCs if Germany controls Iraq.<br><input type=\"checkbox\" value=\"2\" class=\"checkBox\">2 IPCs if Germany controls Persia.<br><input type=\"checkbox\" value=\"2\" class=\"checkBox\">2 IPCs if Germany controls Northwest Persia.";
  }
  else if (i == 1) {
    document.getElementById("bonusIPCS").innerHTML = "<p>When the Soviet Union is at War in Europe:</p><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if the convoy in sea zone 125 is free of Axis warchips, Archangel is controlled by the Soviet Union, and there are no units belonging to other Allied powers present in any territories originally controlled by the Soviet Union.<br><input type=\"checkbox\" value=\"3\" class=\"checkBox\"><input type=\"checkbox\" value=\"3\" class=\"checkBox\"><input type=\"checkbox\" value=\"3\" class=\"checkBox\"><input type=\"checkbox\" value=\"3\" class=\"checkBox\"><input type=\"checkbox\" value=\"3\" class=\"checkBox\">3 IPCs for each original German, Italian, or pro-Axis neutral territory that the Soviet Union controls.<br><input type=\"checkbox\" value=\"10\" class=\"checkBox\">10 IPCs the first time the Soviet Union controls Berlin.";
  }
  else if (i == 2) {
    document.getElementById("bonusIPCS").innerHTML = "<input type=\"checkbox\" value=\"10\" class=\"checkBox\">10 IPCs if Japan is not at war with the United States, has not attacked French Indo-China, and has not made an unprovoked declaration of war against the United Kingdom or ANZAC.<p>When Japan Is at War with the Western Allies &lpar;United States, United Kingdom/ANZAC and/or France&rpar;:</p><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if Axis powers control all of the following territories: Guam, Midway, Wake Island, Gilbert Islands, and Solomon Islands.<br><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if Axis powers control Calcutta.<br><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if Axis powers control Sydney.<br><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if Axis powers control Honolulu.<br><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if Axis powers control San Francisco.<br><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if Axis powers control all of the following territories: Sumatra, Java, Borneo, and Celebes.";
  }
  else if (i == 3) {
    document.getElementById("bonusIPCS").innerHTML = "<p>When the United States Is at War:</p><input type=\"checkbox\" value=\"10\" class=\"checkBox\">10 IPCs if the United States controls all of the following territories: Eastern United States, Central United States, and Western United States.<br><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if the United States controls all of the following territories: Alaks, Aleutian Islands, Hawaiian Islands, Johnston Island, and Line Islands.<br><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if the United States controls all of the following territories: Mexico, South Eastern Mexico, Central America, and West Indies.<br><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if the United States controls Philippines.<br><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if there is at least 1 United States land unit in the territory France.";
  }
  else if (i == 4) {
    document.getElementById("bonusIPCS").innerHTML = "<input type=\"checkbox\" value=\"6\" class=\"checkBox\">6 IPCs if the Burma Road is totally open &lpar;India, Burma, Yunnan, and Szechwan&rpar;, and China can purchase artillery units.";
  }
  else if (i == 5) {
    document.getElementById("bonusIPCS").innerHTML = "<input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if the United Kingdom controls all of its original territories.";
  }
  else if (i == 6) {
    document.getElementById("bonusIPCS").innerHTML = "<input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if the United Kingdom is at war with Japan and controls both Kwangtung and Malaya.";
  }
  else if (i == 7) {
    document.getElementById("bonusIPCS").innerHTML = "<p>When Italy Is at War:</p><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if Axis powers control at least 3 of the following territories: Gibraltar, Southern France, Greece, and Egypt.<br><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if there are no Allied surface warships in the Mediterranean sea &lpar;sea zones 92 through 99&rpar;.<br><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if Axis powers control all of the following territories: Morocco, Algeria, Tunisia, Libya, Tobruk, and Alexandria.<br><input type=\"checkbox\" value=\"2\" class=\"checkBox\">2 IPCs if Italy controls Iraq.<br><input type=\"checkbox\" value=\"2\" class=\"checkBox\">2 IPCs if Italy controls Persia.<br><input type=\"checkbox\" value=\"2\" class=\"checkBox\">2 IPCs if Italy controls Northwest Persia.";
  }
  else if (i == 8) {
    document.getElementById("bonusIPCS").innerHTML = "<p>When ANZAC Is at War with Japan:</p><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if an Allied power controls Malaya and ANZAC controls all of its original territories.<br><input type=\"checkbox\" value=\"5\" class=\"checkBox\">5 IPCs if the Allies &lpar;not including the Dutch&rpar; control Dutch New Guinea, New Guinea, New Britain, and the Solomon Islands.";
  }
  
  else if (i == 9) {
    document.getElementById("bonusIPCS").innerHTML = "<p>When the territory France is liberated by the Allies, the player controlling France immediately places their choice of up to 12 IPCs' worth of any French units on the territory France for free. This happens only once per game.</p>";
  }
}

function displayIcons() {
  //Germany
  if (i == 0) {
    improvedShipyards();
    
    document.getElementById("infantryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Germany/Infantry.png\">";
    document.getElementById("artilleryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Germany/Artillery.png\">";
    document.getElementById("mechIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Germany/Mech.png\">";
    document.getElementById("tankIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Germany/Tank.png\">";
    document.getElementById("aaaIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Germany/AAA.png\">";
    document.getElementById("fighterIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Germany/Fighter.png\">";
    document.getElementById("tacBomberIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Germany/TacBomber.png\">";
    document.getElementById("stratBomberIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Germany/StratBomber.png\">";
    document.getElementById("battleshipIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Germany/Battleship.png\">";
    document.getElementById("carrierIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Germany/Carrier.png\">";
    document.getElementById("cruiserIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Germany/Cruiser.png\">";
    document.getElementById("destroyerIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Germany/Destroyer.png\">";
    document.getElementById("subIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Germany/Sub.png\">";
    document.getElementById("transportIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Germany/Transport.png\">";
  }
  //Soviet Union
  else if (i == 1) {
    improvedShipyards();
    
    document.getElementById("infantryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/SovietUnion/Infantry.png\">";
    document.getElementById("artilleryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/SovietUnion/Artillery.png\">";
    document.getElementById("mechIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/SovietUnion/Mech.png\">";
    document.getElementById("tankIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/SovietUnion/Tank.png\">";
    document.getElementById("aaaIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/SovietUnion/AAA.png\">";
    document.getElementById("fighterIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/SovietUnion/Fighter.png\">";
    document.getElementById("tacBomberIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/SovietUnion/TacBomber.png\">";
    document.getElementById("stratBomberIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/SovietUnion/StratBomber.png\">";
    document.getElementById("battleshipIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/SovietUnion/Battleship.png\">";
    document.getElementById("carrierIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/SovietUnion/Carrier.png\">";
    document.getElementById("cruiserIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/SovietUnion/Cruiser.png\">";
    document.getElementById("destroyerIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/SovietUnion/Destroyer.png\">";
    document.getElementById("subIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/SovietUnion/Sub.png\">";
    document.getElementById("transportIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/SovietUnion/Transport.png\">";
  }
  //Japan
  else if (i == 2) {
    improvedShipyards();
    
    document.getElementById("infantryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Japan/Infantry.png\">";
    document.getElementById("artilleryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Japan/Artillery.png\">";
    document.getElementById("mechIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Japan/Mech.png\">";
    document.getElementById("tankIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Japan/Tank.png\">";
    document.getElementById("aaaIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Japan/AAA.png\">";
    document.getElementById("fighterIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Japan/Fighter.png\">";
    document.getElementById("tacBomberIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Japan/TacBomber.png\">";
    document.getElementById("stratBomberIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Japan/StratBomber.png\">";
    document.getElementById("battleshipIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Japan/Battleship.png\">";
    document.getElementById("carrierIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Japan/Carrier.png\">";
    document.getElementById("cruiserIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Japan/Cruiser.png\">";
    document.getElementById("destroyerIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Japan/Destroyer.png\">";
    document.getElementById("subIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Japan/Sub.png\">";
    document.getElementById("transportIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Japan/Transport.png\">";
  }
  //United States
  else if (i == 3) {
    constructUnitTable();
    constructInfoRow();
    improvedShipyards();
    document.getElementById("unitColumn").removeAttribute("style");
    document.getElementById("tableColumn").setAttribute("style", "border-left: 2px solid black");
    
    document.getElementById("infantryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedStates/Infantry.png\">";
    document.getElementById("artilleryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedStates/Artillery.png\">";
    document.getElementById("mechIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedStates/Mech.png\">";
    document.getElementById("tankIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedStates/Tank.png\">";
    document.getElementById("aaaIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedStates/AAA.png\">";
    document.getElementById("fighterIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedStates/Fighter.png\">";
    document.getElementById("tacBomberIcon").innerHTML = "<img class=\"icon\" class=\"icon\" src=\"images/Troops/UnitedStates/TacBomber.png\">";
    document.getElementById("stratBomberIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedStates/StratBomber.png\">";
    document.getElementById("battleshipIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedStates/Battleship.png\">";
    document.getElementById("carrierIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedStates/Carrier.png\">";
    document.getElementById("cruiserIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedStates/Cruiser.png\">";
    document.getElementById("destroyerIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedStates/Destroyer.png\">";
    document.getElementById("subIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedStates/Sub.png\">";
    document.getElementById("transportIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedStates/Transport.png\">";
  }
  //China
  else if (i == 4) {
    document.getElementById("unitColumn").setAttribute("style", "border-right: 2px solid black");
    document.getElementById("tableColumn").removeAttribute("style");
    
    document.getElementById("unitTable").innerHTML = "<tr><th></th><th>Land Units</th><th>Cost</th><th>Order</th></tr><tr><td id=\"infantryIcon\"></td><td>Infantry</td><td>3</td><td><button type=\"button\" id=\"infantry\" onclick=\"purchaseInfantry()\">Order</button></td></tr><tr><td id=\"artilleryIcon\"></td><td>Artillery</td><td>4</td><td><button type=\"button\" id=\"artillery\" onclick=\"purchaseArtillery()\">Order</button></td>   </tr>";
    document.getElementById("infantryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/China/Infantry.png\">";
    document.getElementById("artilleryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedStates/Artillery.png\">";    
    
    document.getElementById("infoRow1").innerHTML = "<div class=\"col-2\"><div id=\"flagIcon\"></div></div><div class=\"col-5\"><h2 id=\"country1\">Country: </h2></div><div class=\"col-2\"><br><button type=\"button\" id=\"leftArrow\" onclick=\"countrySelectLeftArrow()\">&lt;</button>   <p style=\"display: inline;\"> Select Country </p><button type=\"button\" id=\"rightArrow\" onclick=\"countrySelectRightArrow()\">&gt;</button></div><div class=\"col-3\"><br><input type=\"text\" id=\"enterIPCS\" placeholder=\"Manually Set IPCs\"><button type=\"button\" id=\"enterButton\" onclick=\"manualIPCS()\">Enter</button><button type=\"button\" id=\"clearButton\" onclick=\"clearTextAreaMan()\">Clear</button><br><br></div>";
    
    document.getElementById("infoRow2").innerHTML = "";
    document.getElementById("infoRow2").setAttribute("style", "border-top: 0px");
  }
  //United Kingdom
  else if (i == 5 || i == 6) {
    constructUnitTable();
    constructInfoRow();
    improvedShipyards();
    document.getElementById("unitColumn").removeAttribute("style");
    document.getElementById("tableColumn").setAttribute("style", "border-left: 2px solid black");
    
    document.getElementById("infantryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedKingdom/Infantry.png\">";
    document.getElementById("artilleryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedKingdom/Artillery.png\">";
    document.getElementById("mechIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedKingdom/Mech.png\">";
    document.getElementById("tankIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedKingdom/Tank.png\">";
    document.getElementById("aaaIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedKingdom/AAA.png\">";
    document.getElementById("fighterIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedKingdom/Fighter.png\">";
    document.getElementById("tacBomberIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedKingdom/TacBomber.png\">";
    document.getElementById("stratBomberIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedKingdom/StratBomber.png\">";
    document.getElementById("battleshipIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedKingdom/Battleship.png\">";
    document.getElementById("carrierIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedKingdom/Carrier.png\">";
    document.getElementById("cruiserIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedKingdom/Cruiser.png\">";
    document.getElementById("destroyerIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedKingdom/Destroyer.png\">";
    document.getElementById("subIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedKingdom/Sub.png\">";
    document.getElementById("transportIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/UnitedKingdom/Transport.png\">";
  }
  //Italy
  else if (i == 7) {
    improvedShipyards();
    
    document.getElementById("infantryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Italy/Infantry.png\">";
    document.getElementById("artilleryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Italy/Artillery.png\">";
    document.getElementById("mechIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Italy/Mech.png\">";
    document.getElementById("tankIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Italy/Tank.png\">";
    document.getElementById("aaaIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Italy/AAA.png\">";
    document.getElementById("fighterIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Italy/Fighter.png\">";
    document.getElementById("tacBomberIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Italy/TacBomber.png\">";
    document.getElementById("stratBomberIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Italy/StratBomber.png\">";
    document.getElementById("battleshipIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Italy/Battleship.png\">";
    document.getElementById("carrierIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Italy/Carrier.png\">";
    document.getElementById("cruiserIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Italy/Cruiser.png\">";
    document.getElementById("destroyerIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Italy/Destroyer.png\">";
    document.getElementById("subIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Italy/Sub.png\">";
    document.getElementById("transportIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/Italy/Transport.png\">";
  }
  //ANZAC
  else if (i == 8) {
    improvedShipyards();
    
    document.getElementById("infantryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/ANZAC/Infantry.png\">";
    document.getElementById("artilleryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/ANZAC/Artillery.png\">";
    document.getElementById("mechIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/ANZAC/Mech.png\">";
    document.getElementById("tankIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/ANZAC/Tank.png\">";
    document.getElementById("aaaIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/ANZAC/AAA.png\">";
    document.getElementById("fighterIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/ANZAC/Fighter.png\">";
    document.getElementById("tacBomberIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/ANZAC/TacBomber.png\">";
    document.getElementById("stratBomberIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/ANZAC/StratBomber.png\">";
    document.getElementById("battleshipIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/ANZAC/Battleship.png\">";
    document.getElementById("carrierIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/ANZAC/Carrier.png\">";
    document.getElementById("cruiserIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/ANZAC/Cruiser.png\">";
    document.getElementById("destroyerIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/ANZAC/Destroyer.png\">";
    document.getElementById("subIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/ANZAC/Sub.png\">";
    document.getElementById("transportIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/ANZAC/Transport.png\">";
  }
  //France
  else if (i == 9) {
    improvedShipyards();
    
    document.getElementById("infantryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/France/Infantry.png\">";
    document.getElementById("artilleryIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/France/Artillery.png\">";
    document.getElementById("mechIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/France/Mech.png\">";
    document.getElementById("tankIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/France/Tank.png\">";
    document.getElementById("aaaIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/France/AAA.png\">";
    document.getElementById("fighterIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/France/Fighter.png\">";
    document.getElementById("tacBomberIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/France/TacBomber.png\">";
    document.getElementById("stratBomberIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/France/StratBomber.png\">";
    document.getElementById("battleshipIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/France/Battleship.png\">";
    document.getElementById("carrierIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/France/Carrier.png\">";
    document.getElementById("cruiserIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/France/Cruiser.png\">";
    document.getElementById("destroyerIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/France/Destroyer.png\">";
    document.getElementById("subIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/France/Sub.png\">";
    document.getElementById("transportIcon").innerHTML = "<img class=\"icon\" src=\"images/Troops/France/Transport.png\">";
  }
}

/*
====================================================================================================================================================================================================================================================================================================================================================================================================================================================================
*/

function purchaseInfantry() {
  if (ipcs[i] - (totalCost + infantry) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += infantry;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayInfantry();
  }
}

function purchaseArtillery() {
  if (ipcs[i] - (totalCost + artillery) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += artillery;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayArtillery();
  }
}

function purchaseMechInfantry() {
  if (ipcs[i] - (totalCost + mechInfantry) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += mechInfantry;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayMechInfantry();
  }
}

function purchaseTank() {
  if (ipcs[i] - (totalCost + tank) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += tank;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayTank();
  }
}

function purchaseAAA() {
  if (ipcs[i] - (totalCost + aaa) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += aaa;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayAAA();
  }
}

function purchaseFighter() {
  if (ipcs[i] - (totalCost + fighter) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += fighter;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayFighter();
  }
}

function purchaseTacBomber() {
  if (ipcs[i] - (totalCost + tacBomber) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += tacBomber;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayTacBomber();
  }
}

function purchaseStratBomber() {
  if (ipcs[i] - (totalCost + stratBomber) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += stratBomber;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayStratBomber();
  }
}

function purchaseBattleship() {
  if (ipcs[i] - (totalCost + battleship) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += battleship;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayBattleship();
  }
}

function purchaseCarrier() {
  if (ipcs[i] - (totalCost + carrier) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += carrier;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayCarrier();
  }
}

function purchaseCruiser() {
  if (ipcs[i] - (totalCost + cruiser) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += cruiser;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayCruiser();
  }
}

function purchaseDestroyer() {
  if (ipcs[i] - (totalCost + destroyer) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += destroyer;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayDestroyer();
  }
}

function purchaseSub() {
  if (ipcs[i] - (totalCost + sub) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += sub;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displaySub();
  }
}

function purchaseTransport() {
  if (ipcs[i] - (totalCost + transport) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += transport;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayTransport();
  }
}

function purchaseMajorIC() {
  if (ipcs[i] - (totalCost + majorIC) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += majorIC;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayMajorIC();
  }
}

function purchaseMinorIC() {
  if (ipcs[i] - (totalCost + minorIC) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += minorIC;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayMinorIC();
  }
}

function purchaseUpgradeIC() {
  if (ipcs[i] - (totalCost + upgradeIC) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += upgradeIC;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayUpgradeIC();
  }
}

function purchaseAirBase() {
  if (ipcs[i] - (totalCost + airBase) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += airBase;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayAirBase();
  }
}

function purchaseNavalBase() {
  if (ipcs[i] - (totalCost + navalBase) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += navalBase;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayNavalBase();
  }
}

function purchaseResearch() {
  if (ipcs[i] - (totalCost + research) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += research;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayResearch();
  }
}

function purchaseRepair() {
  if (ipcs[i] - (totalCost + repair) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += repair;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayRepair();
  }
}

function purchaseAirlift() {
  if (ipcs[i] - (totalCost + airlift) < 0) {
    window.alert("Not enough IPCs!");
  }
  else {
    totalCost += airlift;
    displayPurchasingPower();
    displayIPCS();
    displayCost();
    displayAirlift();
  }
}

/*
======================================================================================================================================================================================================================================================
*/

function constructUnitTable() {
  document.getElementById("unitTable").innerHTML = "<tr> <th></th> <th>Land Units</th> <th>Order</th> <th></th> <th>Air Units</th> <th>Order</th> <th></th> <th>Sea Units</th> <th>Order</th> <th></th> <th>Facilities</th> <th>Order</th> <th></th> <th>Utilities</th> <th>Order</th> </tr> <tr> <td id=\"infantryIcon\"></td> <td> <p>Infantry</p> <p>Cost: 3</p> </td> <td><button type=\"button\" id=\"infantry\" onclick=\"purchaseInfantry()\">Order</button></td> <td id=\"fighterIcon\"></td> <td><p>Fighter</p><p>Cost: 10</p></td> <td><button type=\"button\" id=\"fighter\" onclick=\"purchaseFighter()\">Order</button></td> <td id=\"battleshipIcon\"></td> <td><p>Battleship</p><p id=\"battleshipCost\"></p></td> <td><button type=\"button\" id=\"battleship\" onclick=\"purchaseBattleship()\">Order</button></td> <td><img src=\"images/Facilities/MajorIC.png\"></td> <td><p>Major Industrial Complex</p><p>Cost: 30</p></td> <td><button type=\"button\" id=\"majorIC\" onclick=\"purchaseMajorIC()\">Order</button></td> <td><img class=\"utilities\" src=\"images/Utilities/Research.png\"></td> <td><p>Research</p><p>Cost: 5</p></td> <td><button type=\"button\" id=\"research\" onclick=\"purchaseResearch()\">Order</button></td> </tr> <tr> <td id=\"artilleryIcon\"></td> <td><p>Artillery</p><p>Cost: 4</p></td> <td><button type=\"button\" id=\"artillery\" onclick=\"purchaseArtillery()\">Order</button></td> <td id=\"tacBomberIcon\"></td> <td><p>Tactical Bomber</p><p>Cost: 11</p></td> <td><button type=\"button\" id=\"tacBomber\" onclick=\"purchaseTacBomber()\">Order</button></td> <td id=\"carrierIcon\"></td> <td><p>Aircraft Carrier</p><p id=\"carrierCost\"></p></td> <td><button type=\"button\" id=\"carrier\" onclick=\"purchaseCarrier()\">Order</button></td> <td><img src=\"images/Facilities/MinorIC.png\"></td> <td>Minor Industrial Complex<p></p><p>Cost: 12</p></td> <td><button type=\"button\" id=\"minorIC\" onclick=\"purchaseMinorIC()\">Order</button></td> <td><img class=\"utilities\" src=\"images/Utilities/Wrench.jpg\"></td> <td><p>Repair</p><p>Cost: 1</p></td> <td><button type=\"button\" id=\"repair\" onclick=\"purchaseRepair()\">Order</button></td> </tr> <tr> <td id=\"mechIcon\"></td> <td><p>Mechanized Infantry</p><p>Cost: 4</p></td> <td><button type=\"button\" id=\"mecInfantry\" onclick=\"purchaseMechInfantry()\">Order</button></td> <td id=\"stratBomberIcon\"></td> <td><p>Strategic Bomber</p><p>Cost: 12</p></td> <td><button type=\"button\" id=\"stratBomber\" onclick=\"purchaseStratBomber()\">Order</button></td> <td id=\"cruiserIcon\"></td> <td><p>Cruiser</p><p id=\"cruiserCost\"></p></td> <td><button type=\"button\" id=\"cruiser\" onclick=\"purchaseCruiser()\">Order</button></td> <td><img src=\"images/Facilities/UpgradeIC.png\"></td> <td><p>Upgrade Minor Industrial Complex</p><p>Cost: 20</p></td> <td><button type=\"button\" id=\"upgradeIC\" onclick=\"purchaseUpgradeIC()\">Order</button></td> <td><img class=\"utilities\" src=\"images/Utilities/airlift.png\"></td> <td><p>Airlift</p><p>Cost: 5</p></td> <td><button type=\"button\" id=\"airlift\" onclick=\"purchaseAirlift()\">Order</button></td> </tr> <tr> <td id=\"tankIcon\"></td> <td><p>Tank</p><p>Cost: 6</p></td> <td><button type=\"button\" id=\"tank\" onclick=\"purchaseTank()\">Order</button></td> <td></td> <td></td> <td></td> <td id=\"destroyerIcon\"></td> <td><p>Destroyer</p><p id=\"destroyerCost\"></p></td> <td><button type=\"button\" id=\"destroyer\" onclick=\"purchaseDestroyer()\">Order</button></td> <td><img src=\"images/Facilities/AirBase.png\"></td> <td><p>Air Base</p><p>Cost: 15</p></td> <td><button type=\"button\" id=\"airBase\" onclick=\"purchaseAirBase()\">Order</button></td> <td></td> <td></td> <td></td> </tr> <tr> <td id=\"aaaIcon\"></td> <td><p>AAA</p><p>Cost: 5</p></td> <td><button type=\"button\" id=\"aaa\" onclick=\"purchaseAAA()\">Order</button></td> <td></td> <td></td> <td></td> <td id=\"subIcon\"></td> <td><p>Submarine</p><p id=\"subCost\"></p></td> <td><button type=\"button\" id=\"sub\" onclick=\"purchaseSub()\">Order</button></td> <td><img src=\"images/Facilities/NavalBase.png\"></td> <td><p>Naval Base</p><p>Cost: 15</p></td> <td><button type=\"button\" id=\"navalBase\" onclick=\"purchaseNavalBase()\">Order</button></td> <td></td> <td></td> <td></td> </tr> <tr> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td id=\"transportIcon\"></td> <td><p>Transport</p><p id=\"transportCost\"></p></td> <td><button type=\"button\" id=\"transport\" onclick=\"purchaseTransport()\">Order</button></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> </tr>";
}

function constructInfoRow() {
  document.getElementById("infoRow1").innerHTML = "<div class=\"col-2\"><div id=\"flagIcon\"></div></div><div class=\"col-4\"><h2 id=\"country1\">Country: </h2></div>";
  
  
  document.getElementById("infoRow2").innerHTML = "<div class=\"col-5\"><h2 id=\"country2\">Country: </h2></div><div class=\"col-2\"><h2 id=\"ipcs2\">IPCs: </h2></div><div class=\"col-2\"><br><button type=\"button\" id=\"leftArrow\" onclick=\"countrySelectLeftArrow()\">&lt;</button>   <p style=\"display: inline;\"> Select Country </p><button type=\"button\" id=\"rightArrow\" onclick=\"countrySelectRightArrow()\">&gt;</button></div><div class=\"col-3\"><br><input type=\"text\" id=\"enterIPCS\" placeholder=\"Manually Set IPCs\"><button type=\"button\" id=\"enterButton\" onclick=\"manualIPCS()\">Enter</button><button type=\"button\" id=\"clearButton\" onclick=\"clearTextAreaMan()\">Clear</button><br><br></div>"; 
  
}
 
/*
====================================================================================================================================================================================================================================================================================================================================================================================================================================================================
*/

function calculateIPCS() {
  var incomeIPC = document.getElementById("ipcIncome").value;
  var convoyLoss = document.getElementById("convoyLosses").value;
  if (incomeIPC == null) {
    incomeIPC = 0;
  }
  if (convoyLoss == null) {
    convoyLoss = 0;
  }
  if (ipcs[i] + (incomeIPC - convoyLoss) < 0) {
      ipcs[i] = 0;
  }
  else {
    ipcs[i] = ipcs[i] + (incomeIPC - convoyLoss);
    ipcs[i] += calculateBonusIPCS();
  }
  displayIPCS();
  displayPurchasingPower();
  clearTextAreas();
}

function calculateBonusIPCS() {
  var checkBoxes = document.getElementsByClassName("checkBox");
  var bonusIPCS = 0;
  
  for (var j = 0; j < checkBoxes.length; j++) {
    if (checkBoxes[j].checked) {
      if (checkBoxes[j].value == "5") {
        bonusIPCS += 5;
      }
      else if (checkBoxes[j].value == "3") {
        bonusIPCS += 3;
      }
      else if (checkBoxes[j].value == "2") {
        bonusIPCS += 2;
      }
      else if (checkBoxes[j].value == "10") {
        bonusIPCS += 10;
      }
      else if (checkBoxes[j].value == "6") {
        bonusIPCS += 6;
      }
    }
  }
  return bonusIPCS;
}

function manualIPCS() {
  if (document.getElementById("enterIPCS").value != null) {
    var manualIPCS = document.getElementById("enterIPCS").value;
    manualIPCS -= 1;
    manualIPCS += 1;
    ipcs[i] = manualIPCS;
    clearTextAreaMan();
    displayIPCS();
    displayPurchasingPower();
  }
}

function clearButton() {
  clearDisplay();
  totalCost = 0;
  displayPurchasingPower()
  displayCost();
}

function improvedShipyards() {
  if (i == 0 && isImprovedShipyardsGermany) {
    battleship = 17;
    carrier = 13;
    cruiser = 9;
    destroyer = 7;
    sub = 5;
    transport = 6;
  }
  else if (i == 1 && isImprovedShipyardsSovietUnion) {
    battleship = 17;
    carrier = 13;
    cruiser = 9;
    destroyer = 7;
    sub = 5;
    transport = 6;
  }
  else if (i == 2 && isImprovedShipyardsJapan) {
    battleship = 17;
    carrier = 13;
    cruiser = 9;
    destroyer = 7;
    sub = 5;
    transport = 6;
  }
  else if (i == 3 && isImprovedShipyardsUnitedStates) {
    battleship = 17;
    carrier = 13;
    cruiser = 9;
    destroyer = 7;
    sub = 5;
    transport = 6;
  }
  else if ((i == 5 || i == 6) && isImprovedShipyardsUnitedKingdom) {
    battleship = 17;
    carrier = 13;
    cruiser = 9;
    destroyer = 7;
    sub = 5;
    transport = 6;
  }
  else if (i == 7 && isImprovedShipyardsItaly) {
    battleship = 17;
    carrier = 13;
    cruiser = 9;
    destroyer = 7;
    sub = 5;
    transport = 6;
  }
  else if (i == 8 && isImprovedShipyardsANZAC) {
    battleship = 17;
    carrier = 13;
    cruiser = 9;
    destroyer = 7;
    sub = 5;
    transport = 6;
  }
  else if (i == 9 && isImprovedShipyardsFrance) {
    battleship = 17;
    carrier = 13;
    cruiser = 9;
    destroyer = 7;
    sub = 5;
    transport = 6;
  }
  else {
    battleship = 20;
    carrier = 16;
    cruiser = 12;
    destroyer = 8;
    sub = 6;
    transport = 7;
  }
  document.getElementById("battleshipCost").innerHTML = "Cost: " + battleship;
  document.getElementById("carrierCost").innerHTML = "Cost: " + carrier;
  document.getElementById("cruiserCost").innerHTML = "Cost: " + cruiser;
  document.getElementById("destroyerCost").innerHTML = "Cost: " + destroyer;
  document.getElementById("subCost").innerHTML = "Cost: " + sub;
  document.getElementById("transportCost").innerHTML = "Cost: " + transport;
}

/*
====================================================================================================================================================================================================================================================================================================================================================================================================================================================================
*/

function countryResearch(buttonPressed) {  
  //Advanced Artillery
  if (buttonPressed == 0) {
    if (i == 0) {
      advancedArtilleryCountries[0] = "<img " + countryBreakthroughIcons[0] + ">";
    }
    else if (i == 1) {
      advancedArtilleryCountries[1] = "<img " + countryBreakthroughIcons[1] + ">";
    }
    else if (i == 2) {
      advancedArtilleryCountries[2] = "<img " + countryBreakthroughIcons[2] + ">";
    }
    else if (i == 3) {
      advancedArtilleryCountries[3] = "<img " + countryBreakthroughIcons[3] + ">";
    }
    else if (i == 5 || i == 6) {
      advancedArtilleryCountries[4] = "<img " + countryBreakthroughIcons[4] + ">";
    }
    else if (i == 7) {
      advancedArtilleryCountries[5] = "<img " + countryBreakthroughIcons[5] + ">";
    }
    else if (i == 8) {
      advancedArtilleryCountries[6] = "<img " + countryBreakthroughIcons[6] + ">";
    }
    else if (i == 9) {
      advancedArtilleryCountries[7] = "<img " + countryBreakthroughIcons[7] + ">";
    }
    document.getElementById("breakthroughArtilleryDisplay").innerHTML = advancedArtilleryCountries.join(" ");
  }
  //Rockets
  else if (buttonPressed == 1) {
    if (i == 0) {
      rocketsCountries[0] = "<img " + countryBreakthroughIcons[0] + ">";
    }
    else if (i == 1) {
      rocketsCountries[1] = "<img " + countryBreakthroughIcons[1] + ">";
    }
    else if (i == 2) {
      rocketsCountries[2] = "<img " + countryBreakthroughIcons[2] + ">";
    }
    else if (i == 3) {
      rocketsCountries[3] = "<img " + countryBreakthroughIcons[3] + ">";
    }
    else if (i == 5 || i == 6) {
      rocketsCountries[4] = "<img " + countryBreakthroughIcons[4] + ">";
    }
    else if (i == 7) {
      rocketsCountries[5] = "<img " + countryBreakthroughIcons[5] + ">";
    }
    else if (i == 8) {
      rocketsCountries[6] = "<img " + countryBreakthroughIcons[6] + ">";
    }
    else if (i == 9) {
      rocketsCountries[7] = "<img " + countryBreakthroughIcons[7] + ">";
    }
    document.getElementById("breakthroughRocketsDisplay").innerHTML = rocketsCountries.join(" ");
  }
  //Paratrooopers
  else if (buttonPressed == 2) {
    if (i == 0) {
      paratroopersCountries[0] = "<img " + countryBreakthroughIcons[0] + ">";
    }
    else if (i == 1) {
      paratroopersCountries[1] = "<img " + countryBreakthroughIcons[1] + ">";
    }
    else if (i == 2) {
      paratroopersCountries[2] = "<img " + countryBreakthroughIcons[2] + ">";
    }
    else if (i == 3) {
      paratroopersCountries[3] = "<img " + countryBreakthroughIcons[3] + ">";
    }
    else if (i == 5 || i == 6) {
      paratroopersCountries[4] = "<img " + countryBreakthroughIcons[4] + ">";
    }
    else if (i == 7) {
      paratroopersCountries[5] = "<img " + countryBreakthroughIcons[5] + ">";
    }
    else if (i == 8) {
      paratroopersCountries[6] = "<img " + countryBreakthroughIcons[6] + ">";
    }
    else if (i == 9) {
      paratroopersCountries[7] = "<img " + countryBreakthroughIcons[7] + ">";
    }
    document.getElementById("breakthroughParatroopersDisplay").innerHTML = paratroopersCountries.join(" ");
  }
  //Increased Factory Production
  else if (buttonPressed == 3) {
    if (i == 0) {
      increasedFactoryCountries[0] = "<img " + countryBreakthroughIcons[0] + ">";
    }
    else if (i == 1) {
      increasedFactoryCountries[1] = "<img " + countryBreakthroughIcons[1] + ">";
    }
    else if (i == 2) {
      increasedFactoryCountries[2] = "<img " + countryBreakthroughIcons[2] + ">";
    }
    else if (i == 3) {
      increasedFactoryCountries[3] = "<img " + countryBreakthroughIcons[3] + ">";
    }
    else if (i == 5 || i == 6) {
      increasedFactoryCountries[4] = "<img " + countryBreakthroughIcons[4] + ">";
    }
    else if (i == 7) {
      increasedFactoryCountries[5] = "<img " + countryBreakthroughIcons[5] + ">";
    }
    else if (i == 8) {
      increasedFactoryCountries[6] = "<img " + countryBreakthroughIcons[6] + ">";
    }
    else if (i == 9) {
      increasedFactoryCountries[7] = "<img " + countryBreakthroughIcons[7] + ">";
    }
    document.getElementById("breakthroughIncreasedFactoryDisplay").innerHTML = increasedFactoryCountries.join(" ");
  }
  //War Bonds
  else if (buttonPressed == 4) {
    if (i == 0) {
      warBondsCountries[0] = "<img " + countryBreakthroughIcons[0] + ">";
    }
    else if (i == 1) {
      warBondsCountries[1] = "<img " + countryBreakthroughIcons[1] + ">";
    }
    else if (i == 2) {
      warBondsCountries[2] = "<img " + countryBreakthroughIcons[2] + ">";
    }
    else if (i == 3) {
      warBondsCountries[3] = "<img " + countryBreakthroughIcons[3] + ">";
    }
    else if (i == 5 || i == 6) {
      warBondsCountries[4] = "<img " + countryBreakthroughIcons[4] + ">";
    }
    else if (i == 7) {
      warBondsCountries[5] = "<img " + countryBreakthroughIcons[5] + ">";
    }
    else if (i == 8) {
      warBondsCountries[6] = "<img " + countryBreakthroughIcons[6] + ">";
    }
    else if (i == 9) {
      warBondsCountries[7] = "<img " + countryBreakthroughIcons[7] + ">";
    }
    document.getElementById("breakthroughWarbondsDisplay").innerHTML = warBondsCountries.join(" ");
  }
  //Improved Mechanized Infantry
  else if (buttonPressed == 5) {
    if (i == 0) {
      improvedMechanizedCountries[0] = "<img " + countryBreakthroughIcons[0] + ">";
    }
    else if (i == 1) {
      improvedMechanizedCountries[1] = "<img " + countryBreakthroughIcons[1] + ">";
    }
    else if (i == 2) {
      improvedMechanizedCountries[2] = "<img " + countryBreakthroughIcons[2] + ">";
    }
    else if (i == 3) {
      improvedMechanizedCountries[3] = "<img " + countryBreakthroughIcons[3] + ">";
    }
    else if (i == 5 || i == 6) {
      improvedMechanizedCountries[4] = "<img " + countryBreakthroughIcons[4] + ">";
    }
    else if (i == 7) {
      improvedMechanizedCountries[5] = "<img " + countryBreakthroughIcons[5] + ">";
    }
    else if (i == 8) {
      improvedMechanizedCountries[6] = "<img " + countryBreakthroughIcons[6] + ">";
    }
    else if (i == 9) {
      improvedMechanizedCountries[7] = "<img " + countryBreakthroughIcons[7] + ">";
    }
    document.getElementById("breakthroughImprovedMechanizedDisplay").innerHTML = improvedMechanizedCountries.join(" ");
  }
  //Super Submarines
  else if (buttonPressed == 6) {
    if (i == 0) {
      superSubsCountries[0] = "<img " + countryBreakthroughIcons[0] + ">";
    }
    else if (i == 1) {
      superSubsCountries[1] = "<img " + countryBreakthroughIcons[1] + ">";
    }
    else if (i == 2) {
      superSubsCountries[2] = "<img " + countryBreakthroughIcons[2] + ">";
    }
    else if (i == 3) {
      superSubsCountries[3] = "<img " + countryBreakthroughIcons[3] + ">";
    }
    else if (i == 5 || i == 6) {
      superSubsCountries[4] = "<img " + countryBreakthroughIcons[4] + ">";
    }
    else if (i == 7) {
      superSubsCountries[5] = "<img " + countryBreakthroughIcons[5] + ">";
    }
    else if (i == 8) {
      superSubsCountries[6] = "<img " + countryBreakthroughIcons[6] + ">";
    }
    else if (i == 9) {
      superSubsCountries[7] = "<img " + countryBreakthroughIcons[7] + ">";
    }
    document.getElementById("breakthroughSuperSubsDisplay").innerHTML = superSubsCountries.join(" ");
  }
  //Jet Fighters
  else if (buttonPressed == 7) {
    if (i == 0) {
      jetFightersCountries[0] = "<img " + countryBreakthroughIcons[0] + ">";
    }
    else if (i == 1) {
      jetFightersCountries[1] = "<img " + countryBreakthroughIcons[1] + ">";
    }
    else if (i == 2) {
      jetFightersCountries[2] = "<img " + countryBreakthroughIcons[2] + ">";
    }
    else if (i == 3) {
      jetFightersCountries[3] = "<img " + countryBreakthroughIcons[3] + ">";
    }
    else if (i == 5 || i == 6) {
      jetFightersCountries[4] = "<img " + countryBreakthroughIcons[4] + ">";
    }
    else if (i == 7) {
      jetFightersCountries[5] = "<img " + countryBreakthroughIcons[5] + ">";
    }
    else if (i == 8) {
      jetFightersCountries[6] = "<img " + countryBreakthroughIcons[6] + ">";
    }
    else if (i == 9) {
      jetFightersCountries[7] = "<img " + countryBreakthroughIcons[7] + ">";
    }
    document.getElementById("breakthroughJetFightersDisplay").innerHTML = jetFightersCountries.join(" ");
  }
  //Improved Shipyards
  else if (buttonPressed == 8) {
    if (i == 0) {
      improvedShipyardsCountries[0] = "<img " + countryBreakthroughIcons[0] + ">";
      isImprovedShipyardsGermany = true;
      improvedShipyards();
    }
    else if (i == 1) {
      improvedShipyardsCountries[1] = "<img " + countryBreakthroughIcons[1] + ">";
      isImprovedShipyardsSovietUnion = true;
      improvedShipyards();
    }
    else if (i == 2) {
      improvedShipyardsCountries[2] = "<img " + countryBreakthroughIcons[2] + ">";
      isImprovedShipyardsJapan = true;
      improvedShipyards();
    }
    else if (i == 3) {
      improvedShipyardsCountries[3] = "<img " + countryBreakthroughIcons[3] + ">";
      isImprovedShipyardsUnitedStates = true;
      improvedShipyards();
    }
    else if (i == 5 || i == 6) {
      improvedShipyardsCountries[4] = "<img " + countryBreakthroughIcons[4] + ">";
      isImprovedShipyardsUnitedKingdom = true;
      improvedShipyards();
    }
    else if (i == 7) {
      improvedShipyardsCountries[5] = "<img " + countryBreakthroughIcons[5] + ">";
      isImprovedShipyardsItaly = true;
      improvedShipyards();
    }
    else if (i == 8) {
      improvedShipyardsCountries[6] = "<img " + countryBreakthroughIcons[6] + ">";
      isImprovedShipyardsANZAC = true;
      improvedShipyards();
    }
    else if (i == 9) {
      improvedShipyardsCountries[7] = "<img " + countryBreakthroughIcons[7] + ">";
      isImprovedShipyardsFrance = true;
      improvedShipyards();
    }
    document.getElementById("breakthroughImprovedShipyardsDisplay").innerHTML = improvedShipyardsCountries.join(" ");
  }
  //Radar
  else if (buttonPressed == 9) {
    if (i == 0) {
      radarCountries[0] = "<img " + countryBreakthroughIcons[0] + ">";
    }
    else if (i == 1) {
      radarCountries[1] = "<img " + countryBreakthroughIcons[1] + ">";
    }
    else if (i == 2) {
      radarCountries[2] = "<img " + countryBreakthroughIcons[2] + ">";
    }
    else if (i == 3) {
      radarCountries[3] = "<img " + countryBreakthroughIcons[3] + ">";
    }
    else if (i == 5 || i == 6) {
      radarCountries[4] = "<img " + countryBreakthroughIcons[4] + ">";
    }
    else if (i == 7) {
      radarCountries[5] = "<img " + countryBreakthroughIcons[5] + ">";
    }
    else if (i == 8) {
      radarCountries[6] = "<img " + countryBreakthroughIcons[6] + ">";
    }
    else if (i == 9) {
      radarCountries[7] = "<img " + countryBreakthroughIcons[7] + ">";
    }
    document.getElementById("breakthroughRadarDisplay").innerHTML = radarCountries.join(" ");
  }
  //Long-Range Aircraft
  else if (buttonPressed == 10) {
    if (i == 0) {
      longRangeAircraftCountries[0] = "<img " + countryBreakthroughIcons[0] + ">";
    }
    else if (i == 1) {
      longRangeAircraftCountries[1] = "<img " + countryBreakthroughIcons[1] + ">";
    }
    else if (i == 2) {
      longRangeAircraftCountries[2] = "<img " + countryBreakthroughIcons[2] + ">";
    }
    else if (i == 3) {
      longRangeAircraftCountries[3] = "<img " + countryBreakthroughIcons[3] + ">";
    }
    else if (i == 5 || i == 6) {
      longRangeAircraftCountries[4] = "<img " + countryBreakthroughIcons[4] + ">";
    }
    else if (i == 7) {
      longRangeAircraftCountries[5] = "<img " + countryBreakthroughIcons[5] + ">";
    }
    else if (i == 8) {
      longRangeAircraftCountries[6] = "<img " + countryBreakthroughIcons[6] + ">";
    }
    else if (i == 9) {
      longRangeAircraftCountries[7] = "<img " + countryBreakthroughIcons[7] + ">";
    }
    document.getElementById("breakthroughLongRangeAircraftDisplay").innerHTML = longRangeAircraftCountries.join(" ");
  }
  //Heavy Bombers
  else if (buttonPressed == 11) {
    if (i == 0) {
      heavyBombersCountries[0] = "<img " + countryBreakthroughIcons[0] + ">";
    }
    else if (i == 1) {
      heavyBombersCountries[1] = "<img " + countryBreakthroughIcons[1] + ">";
    }
    else if (i == 2) {
      heavyBombersCountries[2] = "<img " + countryBreakthroughIcons[2] + ">";
    }
    else if (i == 3) {
      heavyBombersCountries[3] = "<img " + countryBreakthroughIcons[3] + ">";
    }
    else if (i == 5 || i == 6) {
      heavyBombersCountries[4] = "<img " + countryBreakthroughIcons[4] + ">";
    }
    else if (i == 7) {
      heavyBombersCountries[5] = "<img " + countryBreakthroughIcons[5] + ">";
    }
    else if (i == 8) {
      heavyBombersCountries[6] = "<img " + countryBreakthroughIcons[6] + ">";
    }
    else if (i == 9) {
      heavyBombersCountries[7] = "<img " + countryBreakthroughIcons[7] + ">";
    }
    document.getElementById("breakthroughHeavyBombersDisplay").innerHTML = heavyBombersCountries.join(" ");
  }
}

function breakthroughArtillery() {
  if (i != 4) {
    document.getElementById("advancedArtillery").setAttribute("class", "active");
    countryResearch(0);
  }
}

function breakthroughRockets() {
  if (i != 4) {
    document.getElementById("rockets").setAttribute("class", "active");
    countryResearch(1);
  }
}

function breakthroughParatroopers() {
  if (i != 4) {
    document.getElementById("paratroopers").setAttribute("class", "active");
    countryResearch(2);
  }
}

function breakthroughIncreasedFactory() {
  if (i != 4) {
    document.getElementById("increasedFactoryProduction").setAttribute("class", "active");
    countryResearch(3);
  }
}

function breakthroughWarBonds() {
  if (i != 4) {
    document.getElementById("warBonds").setAttribute("class", "active");
    countryResearch(4);
  }
}

function breakthroughImprovedMechanized() {
  if (i != 4) {
    document.getElementById("improvedMechanizedInfantry").setAttribute("class", "active");
    countryResearch(5);
  }
}

function breakthroughSuperSubs() {
  if (i != 4) {
    document.getElementById("superSubmarines").setAttribute("class", "active");
    countryResearch(6);
  }
}

function breakthroughJetFighters() {
  if (i != 4) {
    document.getElementById("jetFighters").setAttribute("class", "active");
    countryResearch(7);
  }
}

function breakthroughImprovedShipyards() {
  if (i != 4) {
    document.getElementById("improvedShipyards").setAttribute("class", "active");
    countryResearch(8);
  }
}

function breakthroughRadar() {
  if (i != 4) {
    document.getElementById("radar").setAttribute("class", "active");
    countryResearch(9);
  }
}

function breakthroughLongRangeAircraft() {
  if (i != 4) {
    document.getElementById("longRangeAircraft").setAttribute("class", "active");
    countryResearch(10);
  }
}

function breakthroughHeavyBombers() {
  if (i != 4) {
    document.getElementById("heavyBombers").setAttribute("class", "active");
    countryResearch(11);
  }
}

/*
====================================================================================================================================================================================================================================================================================================================================================================================================================================================================
*/

function cityLeningrad() {
  if (!isAxisTurn()) {
    document.getElementById("leningradDisplay").innerHTML = "<img " + countryVictoryCityIcons[1] + ">";  
  }
  else {
    document.getElementById("leningradDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";  
  }
}

function cityMoscow() {
  if (!isAxisTurn()) {
    document.getElementById("moscowDisplay").innerHTML = "<img " + countryVictoryCityIcons[1] + ">";  
  }
  else {
    document.getElementById("moscowDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";
    ipcs[i] += ipcs[1];
    ipcs[1] = 0;
    displayIPCS();
    displayPurchasingPower(); 
  }
}

function cityStalingrad() {
  if (!isAxisTurn()) {
    document.getElementById("stalingradDisplay").innerHTML = "<img " + countryVictoryCityIcons[1] + ">";  
  }
  else {
    document.getElementById("stalingradDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";  
  }
}

function cityBerlin() {
  if (isAxisTurn()) {
    document.getElementById("berlinDisplay").innerHTML = "<img " + countryVictoryCityIcons[0] + ">";  
  }
  else {
    document.getElementById("berlinDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";
    ipcs[i] += ipcs[0];
    ipcs[0] = 0;
    displayIPCS();
    displayPurchasingPower();
  }
}

function cityWarsaw() {
  if (isAxisTurn()) {
    document.getElementById("warsawDisplay").innerHTML = "<img " + countryVictoryCityIcons[0] + ">";  
  }
  else {
    document.getElementById("warsawDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";  
  } 
}

function cityParis() {
  if (!isAxisTurn()) {
    document.getElementById("parisDisplay").innerHTML = "<img " + countryVictoryCityIcons[9] + ">";  
  }
  else {
    document.getElementById("parisDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";
    ipcs[i] += ipcs[9];
    ipcs[9] = 0;
    displayIPCS();
    displayPurchasingPower(); 
  }
}

function cityRome() {
  if (isAxisTurn()) {
    document.getElementById("romeDisplay").innerHTML = "<img " + countryVictoryCityIcons[7] + ">";  
  }
  else {
    document.getElementById("romeDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";
    ipcs[i] += ipcs[7];
    ipcs[7] = 0;
    displayIPCS();
    displayPurchasingPower();
  }
}

function cityLondon() {
  if (!isAxisTurn()) {
    document.getElementById("londonDisplay").innerHTML = "<img " + countryVictoryCityIcons[5] + ">";
  }
  else {
    document.getElementById("londonDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";
    ipcs[i] += ipcs[5];
    ipcs[5] = 0;
    displayIPCS();
    displayPurchasingPower();
  }
}

function cityCairo() {
  if (!isAxisTurn()) {
    document.getElementById("cairoDisplay").innerHTML = "<img " + countryVictoryCityIcons[5] + ">";
  }
  else {
    document.getElementById("cairoDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";  
  } 
}

function cityOttawa() {
  if (!isAxisTurn()) {
    document.getElementById("ottawaDisplay").innerHTML = "<img " + countryVictoryCityIcons[5] + ">";
  }
  else {
    document.getElementById("ottawaDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";  
  }  
}

function cityWashington() {
  if (!isAxisTurn()) {
    document.getElementById("washingtonDisplay").innerHTML = "<img " + countryVictoryCityIcons[3] + ">";  
  }
  else {
    document.getElementById("washingtonDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";
    ipcs[i] += ipcs[3];
    ipcs[3] = 0;
    displayIPCS();
    displayPurchasingPower();  
  }
}

function cityTokyo() {
  if (isAxisTurn()) {
    document.getElementById("tokyoDisplay").innerHTML = "<img " + countryVictoryCityIcons[2] + ">";  
  }
  else {
    document.getElementById("tokyoDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";
    ipcs[i] += ipcs[2];
    ipcs[2] = 0;
    displayIPCS();
    displayPurchasingPower();    
  }
}

function cityShanghai() {
  if (!isAxisTurn()) {
    document.getElementById("shanghaiDisplay").innerHTML = "<img " + countryVictoryCityIcons[4] + ">";   
  }
  else {
    document.getElementById("shanghaiDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">"; 
  } 
}

function cityCalcutta() {
  if (!isAxisTurn()) {
    document.getElementById("calcuttaDisplay").innerHTML = "<img " + countryVictoryCityIcons[6] + ">";  
  }
  else {
    document.getElementById("calcuttaDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";
    ipcs[i] += ipcs[6];
    ipcs[6] = 0;
    displayIPCS();
    displayPurchasingPower();
  }
}

function cityHongKong() {
  if (!isAxisTurn()) {
    document.getElementById("hongKongDisplay").innerHTML = "<img " + countryVictoryCityIcons[6] + ">";  
  }
  else {
    document.getElementById("hongKongDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";  
  } 
}

function cityManila() {
  if (!isAxisTurn()) {
    document.getElementById("manilaDisplay").innerHTML = "<img " + countryVictoryCityIcons[3] + ">";  
  }
  else {
    document.getElementById("manilaDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";
  } 
}

function citySanFrancisco() {
  if (!isAxisTurn()) {
    document.getElementById("sanFranciscoDisplay").innerHTML = "<img " + countryVictoryCityIcons[3] + ">";  
  }
  else {
    document.getElementById("sanFranciscoDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";
  } 
}

function cityHonolulu() {
  if (!isAxisTurn()) {
    document.getElementById("honoluluDisplay").innerHTML = "<img " + countryVictoryCityIcons[3] + ">";  
  }
  else {
    document.getElementById("honoluluDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";
  }
}

function citySydney() {
  if (!isAxisTurn()) {
    document.getElementById("sydneyDisplay").innerHTML = "<img " + countryVictoryCityIcons[8] + ">";  
  }
  else {
    document.getElementById("sydneyDisplay").innerHTML = "<img " + countryVictoryCityIcons[i] + ">";
    ipcs[i] += ipcs[8];
    ipcs[8] = 0;
    displayIPCS();
    displayPurchasingPower();
  }
}

/*
====================================================================================================================================================================================================================================================================================================================================================================================================================================================================
*/

