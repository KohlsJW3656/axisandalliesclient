export const Action = Object.freeze({
  StartWaiting: 'StartWaiting',
  StartAddingPurchase: 'StartAddingPurchase',
  FinishAddingPurchase: 'FinishAddingPurchase',
  StartAddingIncome: 'StartAddingIncome',
  FinishAddingIncome: 'FinishAddingIncome',
  StartAddingCountryTurn: 'StartAddingCountryTurn',
  FinishAddingCountryTurn: 'FinishAddingCountryTurn',
  startEditingCountry: 'StartEditingCountry',
  FinishEditingCountry: 'FinishEditingCountry',
  LoadCountry: 'LoadCountry', 
  LoadPurchase: 'LoadPurchase',
  LoadIncome: 'LoadIncome',
  LoadCountryTurn: 'LoadCountryTurn',
  StartDeletingPurchase: 'StartDeletingPurchase',
  StartDeletingIncome: 'StartDeletingIncome',
  StartDeletingCountryTurn: 'StartDeletingCountryTurn',
});

const host = 'https://axisandallies-server.duckdns.org:8442';

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

export function finishAddingCountryTurn(countryTurn) {
  return {
    type: Action.FinishAddingCountryTurn,
    payload: countryTurn,
  };
}

export function startAddingCountryTurn(c_id, turn, season_year) {
  const countryTurn = {c_id, turn, season_year};
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(countryTurn),
  }
  return dispatch => {
    dispatch(startWaiting());
    fetch(`${host}/countryturn`, options)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        countryTurn.c_id = data.c_id;
        countryTurn.turn = data.turn;
        dispatch(finishAddingCountryTurn(countryTurn));
      }
    })
  }
}

export function loadCountryTurn(countryTurn) {
  return {
    type: Action.LoadCountryTurn,
    payload: countryTurn,
  }
}

export function getCountryTurn() {
  return dispatch => {
  dispatch(startWaiting());
  fetch(`${host}/countryturn`)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if (data.ok){
        dispatch(loadCountryTurn(data.countryTurn));
      }
    })
    .catch(e => console.error(e));
  };
}

export function startDeletingCountryTurn(countryTurn) {
  return {
    type: Action.StartDeletingCountryTurn,
    payload: countryTurn,
  };
}

export function deleteCountryTurn() {
  const requestDelete = {
    method: 'DELETE'
  };
  return dispatch => {
    dispatch(startWaiting());
    fetch(`${host}/countryturn`, requestDelete)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if (data.ok){
        dispatch(startDeletingCountryTurn());
      }
    })
    .catch(e => console.error(e));
  };
}

export function finishAddingPurchase(purchase) {
  return {
    type: Action.FinishAddingPurchase,
    payload: purchase,
  };
}

export function startAddingPurchase(p_name, amount, c_id, cost, turn) {
  const purchase = {p_name, amount, c_id, cost, turn};
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(purchase),
  }
  return dispatch => {
    dispatch(startWaiting());
    fetch(`${host}/purchase`, options)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        purchase.c_id = data.c_id;
        purchase.turn = data.turn;
        dispatch(finishAddingPurchase(purchase));
      }
    })
    .catch(e => console.error(e));
  };
}

export function loadPurchase(purchase) {
  return {
    type: Action.LoadPurchase,
    payload: purchase,
  }
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
  return dispatch => {
  dispatch(startWaiting());
  fetch(`${host}/purchase`)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if (data.ok){
        dispatch(loadPurchase(data.purchase));
      }
    })
    .catch(e => console.error(e));
  };
}


export function loadCountry(country) {
  return {
    type: Action.LoadCountry,
    payload: country,
  }
}

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
  return dispatch => {
  dispatch(startWaiting());
  fetch(`${host}/country/${c_id}`)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if (data.ok){
        dispatch(loadCountry(data.country));
      }
    })
    .catch(e => console.error(e));
  };
}

export function finishEditingCountry(country) {
  return {
    type: Action.FinishEditingCountry,
    payload: country,
  };
}

export function startEditingCountry(country) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(country),
  }
  return dispatch => {
    dispatch(startWaiting());
    fetch(`${host}/country/${country.c_id}`, options)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        dispatch(finishEditingCountry(country));
      }
    })
    .catch(e => console.error(e));
  };
}

export function startDeletingPurchase(purchase) {
  return {
    type: Action.StartDeletingPurchase,
    payload: purchase,
  };
}

export function deletePurchase() {
  const requestDelete = {
    method: 'DELETE'
  };
  return dispatch => {
    dispatch(startWaiting());
    fetch(`${host}/purchase`, requestDelete)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if (data.ok){
        dispatch(startDeletingPurchase());
      }
    })
    .catch(e => console.error(e));
  };
}

export function finishAddingIncome(income) {
  return {
    type: Action.FinishAddingIncome,
    payload: income,
  };
}

export function startAddingIncome(c_id, base, bonus, research, convoy, turn) {
  const income = {c_id, base, bonus, research, convoy, turn};
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(income),
  }
  return dispatch => {
    dispatch(startWaiting());
    fetch(`${host}/income`, options)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        income.c_id = data.c_id;
        income.turn = data.turn;
        dispatch(finishAddingIncome(income));
      }
    })
    .catch(e => console.error(e));
  };
}

export function loadIncome(income) {
  return {
    type: Action.LoadIncome,
    payload: income,
  }
}

export function getIncome() {
  return dispatch => {
  dispatch(startWaiting());
  fetch(`${host}/income`)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if (data.ok){
        dispatch(loadIncome(data.income));
      }
    })
    .catch(e => console.error(e));
  };
}

export function startDeletingIncome(income) {
  return {
    type: Action.StartDeletingIncome,
    payload: income,
  };
}

export function deleteIncome() {
  const requestDelete = {
    method: 'DELETE'
  };
  return dispatch => {
    dispatch(startWaiting());
    fetch(`${host}/income`, requestDelete)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if (data.ok){
        dispatch(startDeletingIncome());
      }
    })
    .catch(e => console.error(e));
  };
}