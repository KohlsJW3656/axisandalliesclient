import { Action } from "./actions";

const initialState = {
	isWaiting: false,
	country: {},
};

function reducer(state = initialState, action) {
	switch(action.type) {
		case Action.FinishAddingPurchase:
			return {
				...state,
				country: [action.payload[0], ...state.country],
			}
		// case Action.LoadPurchases:
		// 	return {
		// 		...state,
		// 		purchases: action.payload,
		// 	};
		// case Action.FinishAddingPurchase:
		// 	return {
		// 		...state,
		// 		purchases: [action.payload],
		// 	};
		case Action.LoadCountry:
			return {
				...state,
				country: action.payload[0],
			}
		default:
  		return state;
	}
}

export default reducer;