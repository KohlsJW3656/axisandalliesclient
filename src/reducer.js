import { Action } from "./actions";

const initialState = {
	isWaiting: false,
	purchases: [],
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