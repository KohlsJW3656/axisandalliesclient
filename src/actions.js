export const Action = Object.freeze({
  LoadCountry: 'LoadCountry', 
  StartAddingPurchase: 'StartAddingPurchase',
  FinishAddingPurchase: 'FinishAddingPurchase',
  StartWaiting: 'StartWaiting',
  LoadPurchase: 'LoadPurchase',
  
});

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


// export function displayPurchase(purchases) {
//   return {
//     type: Action.DisplayPurchases,
//     payload: purchases,
//   };
// }
// export function loadMemories(memories) {
//   return {
//     type: Action.loadMemories,
//     payload: memories,
//   };
// }

// export function finishAddingPurchase(purchase) {
//   return {
//     type: Action.FinishAddingPurchase,
//     payload: purchase,
//   };
// }

function checkForErrors(response) {
  if (!response.ok) {
    throw Error(`${response.status}: ${response.statusText}`);
  }
  return response;
}

// export function loadPurchase(c_id, turn) {
//   return dispatch => {
//     fetch(`${host}/purchase/${c_id}/${turn}`)
//     .then(checkForErrors)
//     .then(response => response.json())
//     .then(data => {
//       if (data.ok) {
//         dispatch(displayPurchase(data.purchases));
//       }
//     })
//     .catch(e => console.error(e));
//   };
// }

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


export function loadCountry(country) {
  return {
    type: Action.LoadCountry,
    payload: country,
  }
}

const host = 'https://axisandallies-server.duckdns.org:8442';

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

export function loadPurchase(purchase) {
  return {
    type: Action.LoadPurchase,
    payload: purchase,
  }
}

export function startGettingPurchase() {
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




