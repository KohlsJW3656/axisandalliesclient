import { Action } from "./actions";

const initialState = {
	isWaiting: false,
	purchases: [],
	countries: [{c_id: 0, c_Name: "Germany", ipcs: 30},
							{c_id: 1, c_Name: "Soviet Union", ipcs: 37}],
	country: {c_id: 0, c_Name: "Germany", ipcs: 30},
	turn: 1,
	dateYear: 1940,
	seasons: ["Spring/Summer", "Fall/Winter"],
	dateString: "Spring/Summer 1940",
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