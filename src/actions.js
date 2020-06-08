export const Action = Object.freeze({
  StartWaiting: 'StartWaiting',
  StartAddingPurchase: 'StartAddingPurchase',
  FinishAddingPurchase: 'FinishAddingPurchase',
  StartAddingIncome: 'StartAddingIncome',
  FinishAddingIncome: 'FinishAddingIncome',
  startEditingCountry: 'StartEditingCountry',
  FinishEditingCountry: 'FinishEditingCountry',
  LoadCountry: 'LoadCountry', 
  LoadPurchase: 'LoadPurchase',
  LoadIncome: 'LoadIncome',
  StartDeletingPurchase: 'StartDeletingPurchase',
  StartDeletingIncome: 'StartDeletingIncome',
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

export function finishAddingPurchase(purchase) {
  return {
    type: Action.FinishAddingPurchase,
    payload: purchase,
  };
}

export function startAddingPurchase(p_name, amount, c_id, cost, season_year, turn) {
  const purchase = {p_name, amount, c_id, cost, season_year, turn};
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

export function startAddingIncome(c_id, revenue, lost, season_year, turn) {
  const income = {c_id, revenue, lost, season_year, turn};
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
        dispatch(loadPurchase(data.income));
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