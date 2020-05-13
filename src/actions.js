export const Action = Object.freeze({
  LoadPurchases: 'LoadPurchase', 
  FinishAddingPurchase: 'FinishAddingPurchase',
});

export function displayPurchase(purchases) {
  return {
    type: Action.DisplayPurchases,
    payload: purchases,
  };
}

export function finishAddingPurchase(purchase) {
  return {
    type: Action.FinishAddingPurchase,
    payload: purchase,
  };
}

function checkForErrors(response) {
  if (!response.ok) {
    throw Error(`${response.status}: ${response.statusText}`);
  }
  return response;
}

const host = "https://axisandallies.duckdns.org:443";

export function loadPurchase(c_id, turn) {
  return dispatch => {
    fetch(`${host}/purchase/${c_id}/${turn}`)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        dispatch(displayPurchase(data.purchases));
      }
    })
    .catch(e => console.error(e));
  };
}

export function startAddingPurchase(p_id, amount, c_id, date, turn) {
  const purchase = {p_id, amount, c_id, date, turn};
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(purchase),
  }
  return dispatch => {
    fetch(`${host}/purchase`, options)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        purchase.p_id = data.id;
        dispatch(finishAddingPurchase(purchase));
      }
    })
    .catch(e => console.error(e));
  };
}