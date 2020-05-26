export const Action = Object.freeze({
  LoadCountry: 'LoadCountry', 
  StartAddingPurchase: 'StartAddingPurchase',
  FinishAddingPurchase: 'FinishAddingPurchase',
  StartWaiting: 'StartWaiting',
  LoadPurchase: 'LoadPurchase',
  StartDeleting: 'StartDeleting',
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

export function startAddingPurchase(p_name, amount, c_id, season_year, turn) {
  const purchase = {p_name, amount, c_id, season_year, turn};
  const options = {
    method: 'POST',
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

export function startDeleting(purchase) {
  return {
    type: Action.StartDeleting,
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
        dispatch(startDeleting());
      }
    })
    .catch(e => console.error(e));
  };
}