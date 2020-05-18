import { Action } from "./actions";

const initialState = {
	isWaiting: false,
	country: [],
	purchases: [],
};

function reducer(state = initialState, action) {
	switch(action.type) {
		case Action.FinishAddingPurchase:
			return {
				...state,
				isWaiting: false,
				purchases: [action.payload, ...state.purchases],
			};
		case Action.LoadCountry:
			return {
				...state,
				isWaiting: false,
				country: action.payload[0],
			};
			case Action.LoadPurchase:
			return {
				...state,
				isWaiting: false,
				purchases: action.payload,
			};
			case Action.StartWaiting:
				return {
					...state,
					isWaiting: true,
				};
			case Action.StartDeleting:
				return {
					...state,
					isWaiting: false,
				};
		default:
  		return state;
	}
}

export default reducer;