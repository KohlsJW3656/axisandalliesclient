import { Action } from "./actions";

const initialState = {
	isWaiting: false,
	country: [],
	purchases: [],
	incomes: [],
};

function reducer(state = initialState, action) {
	switch(action.type) {
		case Action.StartWaiting:
			return {
				...state,
				isWaiting: true,
			};
		case Action.FinishEditingCountry:
			return {
				...state,
				isWaiting: false,
				country: action.payload,
			}
		case Action.LoadCountry:
			return {
				...state,
				isWaiting: false,
				country: action.payload[0],
			};
		case Action.FinishAddingPurchase:
			return {
				...state,
				isWaiting: false,
			};
		case Action.LoadPurchase:
			return {
				...state,
				isWaiting: false,
				purchases: action.payload,
			};
		case Action.StartDeletingPurchase:
			return {
				...state,
				isWaiting: false,
				purchases: [],
			};
		case Action.FinishAddingIncome:
			return {
				...state,
				isWaiting: false,
			};
		case Action.LoadIncome:
			return {
				...state,
				isWaiting: false,
				incomes: action.payload,
			}
		case Action.StartDeletingIncome:
			return {
				...state,
				isWaiting: false,
				incomes: [],
			}
		default:
  		return state;
	}
}

export default reducer;