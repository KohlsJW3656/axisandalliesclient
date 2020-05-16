import { Action } from "./actions";
import {loadCountry} from './actions';

const initialState = {
	isWaiting: false,
	purchases: [],
	countries: [{c_id: 0, c_name: "Germany", ipcs: 30},
							{c_id: 1, c_name: "Soviet Union", ipcs: 37}],
	country: loadCountry(0),
};

function reducer(state = initialState, action) {
	switch(action.type) {
		case Action.LoadPurchases:
			return {
				...state,
				purchases: action.payload,
			};
		case Action.FinishAddingPurchase:
			return {
				...state,
				purchases: [action.payload],
			};
		default:
  		return state;
	}
}

export default reducer;