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
				isWaiting: false,
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
				isWaiting: false,
				country: action.payload[0],
			}
		case Action.StartWaiting:
			return {
				...state,
				isWaiting: true,
			}
		default:
  		return state;
	}
}

export default reducer;