export const Action = Object.freeze({
  StartWaiting: "StartWaiting",
  FinishAddingPurchase: "FinishAddingPurchase",
  FinishAddingIncome: "FinishAddingIncome",
  FinishAddingCountryTurn: "FinishAddingCountryTurn",
  FinishAddingCountryResearch: "FinishAddingCountryResearch",

  FinishEditingCountry: "FinishEditingCountry",

  FinishLoadingCountry: "FinishLoadingCountry",
  FinishLoadingPurchase: "FinishLoadingPurchase",
  FinishLoadingIncome: "FinishLoadingIncome",
  FinishLoadingCountryTurn: "FinishLoadingCountryTurn",
  FinishLoadingCountryResearch: "FinishLoadingCountryResearch",

  FinishDeletingPurchase: "FinishDeletingPurchase",
  FinishDeletingIncome: "FinishDeletingIncome",
  FinishDeletingCountryTurn: "FinishDeletingCountryTurn",
  FinishDeletingCountryResearch: "FinishDeletingCountryResearch",
});

const host = "https://axisandallies.duckdns.org:8445";

function checkForErrors(response) {
  if (!response.ok) {
    throw Error(`${response.status}: ${response.statusText}`);
  }
  return response;
}

export function startWaiting() {
  return {
    type: Action.StartWaiting,
  };
}

/******************************************** Country Turn ********************************************/

export function startAddingCountryTurn(c_id, turn, season_year) {
  const countryTurn = { c_id, turn, season_year };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(countryTurn),
  };
  return (dispatch) => {
    dispatch(startWaiting());
    fetch(`${host}/countryturn`, options)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          countryTurn.c_id = data.c_id;
          countryTurn.turn = data.turn;
          dispatch(finishAddingCountryTurn(countryTurn));
        }
      });
  };
}

export function finishAddingCountryTurn(countryTurn) {
  return {
    type: Action.FinishAddingCountryTurn,
    payload: countryTurn,
  };
}

export function getCountryTurn() {
  return (dispatch) => {
    dispatch(startWaiting());
    fetch(`${host}/countryturn`)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(finishLoadingCountryTurn(data.countryTurn));
        }
      })
      .catch((e) => console.error(e));
  };
}

export function finishLoadingCountryTurn(countryTurn) {
  return {
    type: Action.FinishLoadingCountryTurn,
    payload: countryTurn,
  };
}

export function deleteCountryTurn() {
  const requestDelete = {
    method: "DELETE",
  };
  return (dispatch) => {
    dispatch(startWaiting());
    fetch(`${host}/countryturn`, requestDelete)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(finishDeletingCountryTurn());
        }
      })
      .catch((e) => console.error(e));
  };
}

export function finishDeletingCountryTurn(countryTurn) {
  return {
    type: Action.FinishDeletingCountryTurn,
    payload: countryTurn,
  };
}

/******************************************** Purchase ********************************************/

export function startAddingPurchase(p_name, amount, c_id, cost, turn) {
  const purchase = { p_name, amount, c_id, cost, turn };
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(purchase),
  };
  return (dispatch) => {
    dispatch(startWaiting());
    fetch(`${host}/purchase`, options)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          purchase.c_id = data.c_id;
          purchase.turn = data.turn;
          dispatch(finishAddingPurchase(purchase));
        }
      })
      .catch((e) => console.error(e));
  };
}

export function finishAddingPurchase(purchase) {
  return {
    type: Action.FinishAddingPurchase,
    payload: purchase,
  };
}

/* Offline Testing */
/*
export function getPurchase() {
  return dispatch => {
  dispatch(startWaiting());
  dispatch(loadPurchase([
    {p_name: "Tank", amount: 1, c_id: 0, season_year: "Spring/Summer, 1940", turn: 1},
    {p_name: "Strategic Bomber", amount: 2, c_id: 0, season_year: "Spring/Summer, 1940", turn: 1}, 
    {p_name: "Infantry", amount: 3, c_id: 0, season_year: "Spring/Summer, 1940", turn: 1}, 

    {p_name: "Infantry", amount: 3, c_id: 1, season_year: "Spring/Summer, 1940", turn: 1}, 

    {p_name: "Infantry", amount: 3, c_id: 2, season_year: "Spring/Summer, 1940", turn: 1}, 
    
    {p_name: "Infantry", amount: 3, c_id: 3, season_year: "Spring/Summer, 1940", turn: 1}, 
    {p_name: "Research", amount: 3, c_id: 3, season_year: "Spring/Summer, 1940", turn: 1}, 
    {p_name: "Battleship", amount: 2, c_id: 3, season_year: "Spring/Summer, 1940", turn: 1}, 
    
    {p_name: "Infantry", amount: 2, c_id: 0, season_year: "Fall/Winter, 1940", turn: 2},
    {p_name: "Tank", amount: 3, c_id: 0, season_year: "Fall/Winter, 1940", turn: 2},

    {p_name: "AAA",                 amount: 3, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Air Base",            amount: 1, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Aircraft Carrier",    amount: 1, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Airlift",             amount: 2, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Artillery",           amount: 4, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Battleship",          amount: 3, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Cruiser",             amount: 2, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Destroyer",           amount: 1, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Fighter",             amount: 7, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Infantry",            amount: 3, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Major IC",            amount: 1, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Mechanized Infantry", amount: 3, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Minor IC",            amount: 2, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Naval Base",          amount: 2, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Repair",              amount: 20, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Research",            amount: 10, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Strategic Bomber",    amount: 57, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Submarine",           amount: 6, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Tactical Bomber",     amount: 11, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Tank",                amount: 29, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Transport",           amount: 1, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},
    {p_name: "Upgraded Minor IC",   amount: 1, c_id: 1, season_year: "Spring/Summer, 1943", turn: 7},

    ]));
  };
}
*/

export function getPurchase() {
  return (dispatch) => {
    dispatch(startWaiting());
    fetch(`${host}/purchase`)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(finishLoadingPurchase(data.purchase));
        }
      })
      .catch((e) => console.error(e));
  };
}

export function finishLoadingPurchase(purchase) {
  return {
    type: Action.FinishLoadingPurchase,
    payload: purchase,
  };
}

export function deletePurchase() {
  const requestDelete = {
    method: "DELETE",
  };
  return (dispatch) => {
    dispatch(startWaiting());
    fetch(`${host}/purchase`, requestDelete)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(finishDeletingPurchase());
        }
      })
      .catch((e) => console.error(e));
  };
}

export function finishDeletingPurchase(purchase) {
  return {
    type: Action.FinishDeletingPurchase,
    payload: purchase,
  };
}

/******************************************** Country ********************************************/

/* Offline Testing */
/*
export function getCountry(c_id) {
  return dispatch => {
  dispatch(startWaiting());
  dispatch(loadCountry([{c_id: 0, c_name: "Germany", ipcs: 30}]));
  };
}
*/

export function getCountry(c_id) {
  return (dispatch) => {
    dispatch(startWaiting());
    fetch(`${host}/country/${c_id}`)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(finishLoadingCountry(data.country));
        }
      })
      .catch((e) => console.error(e));
  };
}

export function finishLoadingCountry(country) {
  return {
    type: Action.FinishLoadingCountry,
    payload: country,
  };
}

export function startEditingCountry(country) {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(country),
  };
  return (dispatch) => {
    dispatch(startWaiting());
    fetch(`${host}/country/${country.c_id}`, options)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(finishEditingCountry(country));
        }
      })
      .catch((e) => console.error(e));
  };
}

export function finishEditingCountry(country) {
  return {
    type: Action.FinishEditingCountry,
    payload: country,
  };
}

/******************************************** Income ********************************************/

export function startAddingIncome(c_id, base, bonus, research, convoy, turn) {
  const income = { c_id, base, bonus, research, convoy, turn };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(income),
  };
  return (dispatch) => {
    dispatch(startWaiting());
    fetch(`${host}/income`, options)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          income.c_id = data.c_id;
          income.turn = data.turn;
          dispatch(finishAddingIncome(income));
        }
      })
      .catch((e) => console.error(e));
  };
}

export function finishAddingIncome(income) {
  return {
    type: Action.FinishAddingIncome,
    payload: income,
  };
}

export function getIncome() {
  return (dispatch) => {
    dispatch(startWaiting());
    fetch(`${host}/income`)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(finishLoadingIncome(data.income));
        }
      })
      .catch((e) => console.error(e));
  };
}

export function finishLoadingIncome(income) {
  return {
    type: Action.FinishLoadingIncome,
    payload: income,
  };
}

export function deleteIncome() {
  const requestDelete = {
    method: "DELETE",
  };
  return (dispatch) => {
    dispatch(startWaiting());
    fetch(`${host}/income`, requestDelete)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(finishDeletingIncome());
        }
      })
      .catch((e) => console.error(e));
  };
}

export function finishDeletingIncome(income) {
  return {
    type: Action.FinishDeletingIncome,
    payload: income,
  };
}

/******************************************** Country Research ********************************************/

export function startAddingCountryResearch(c_id, r_id, turn) {
  const countryResearch = { c_id, r_id, turn };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(countryResearch),
  };
  return (dispatch) => {
    dispatch(startWaiting());
    fetch(`${host}/countryresearch`, options)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          countryResearch.c_id = data.c_id;
          countryResearch.r_id = data.r_id;
          dispatch(finishAddingCountryResearch(countryResearch));
        }
      });
  };
}

export function finishAddingCountryResearch(countryResearch) {
  return {
    type: Action.FinishAddingCountryResearch,
    payload: countryResearch,
  };
}

export function getCountryResearch() {
  return (dispatch) => {
    dispatch(startWaiting());
    fetch(`${host}/countryresearch`)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(finishLoadingCountryResearch(data.countryResearch));
        }
      })
      .catch((e) => console.error(e));
  };
}

export function finishLoadingCountryResearch(countryResearch) {
  return {
    type: Action.FinishLoadingCountryResearch,
    payload: countryResearch,
  };
}

export function deleteCountryResearch() {
  const requestDelete = {
    method: "DELETE",
  };
  return (dispatch) => {
    dispatch(startWaiting());
    fetch(`${host}/countryresearch`, requestDelete)
      .then(checkForErrors)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          dispatch(finishDeletingCountryResearch());
        }
      })
      .catch((e) => console.error(e));
  };
}

export function finishDeletingCountryResearch(countryResearch) {
  return {
    type: Action.FinishDeletingCountryResearch,
    payload: countryResearch,
  };
}
