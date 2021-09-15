import { Action } from "./actions";

const initialState = {
  isWaiting: false,
  country: [],
  purchases: [],
  incomes: [],
  countryTurns: [],
  countryResearches: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case Action.StartWaiting:
      return {
        ...state,
        isWaiting: true,
      };
    /******************************************** Country Turn ********************************************/
    case Action.FinishAddingCountryTurn:
      return {
        ...state,
        isWaiting: false,
      };
    case Action.FinishLoadingCountryTurn:
      return {
        ...state,
        isWaiting: false,
        countryTurns: action.payload,
      };
    case Action.FinishDeletingCountryTurn:
      return {
        ...state,
        isWaiting: false,
        countryTurns: [],
      };
    /******************************************** Country ********************************************/
    case Action.FinishEditingCountry:
      return {
        ...state,
        isWaiting: false,
        country: action.payload,
      };
    case Action.FinishLoadingCountry:
      return {
        ...state,
        isWaiting: false,
        country: action.payload[0],
      };
    /******************************************** Purchase ********************************************/
    case Action.FinishAddingPurchase:
      return {
        ...state,
        isWaiting: false,
      };
    case Action.FinishLoadingPurchase:
      return {
        ...state,
        isWaiting: false,
        purchases: action.payload,
      };
    case Action.FinishDeletingPurchase:
      return {
        ...state,
        isWaiting: false,
        purchases: [],
      };
    /******************************************** Income ********************************************/
    case Action.FinishAddingIncome:
      return {
        ...state,
        isWaiting: false,
      };
    case Action.FinishLoadingIncome:
      return {
        ...state,
        isWaiting: false,
        incomes: action.payload,
      };
    case Action.FinishDeletingIncome:
      return {
        ...state,
        isWaiting: false,
        incomes: [],
      };
    /******************************************** Country Research ********************************************/
    case Action.FinishAddingCountryResearch:
      return {
        ...state,
        isWaiting: false,
      };
    case Action.FinishLoadingCountryResearch:
      return {
        ...state,
        isWaiting: false,
        countryResearches: action.payload,
      };
    case Action.FinishDeletingCountryResearch:
      return {
        ...state,
        isWaiting: false,
        countryResearches: [],
      };
    default:
      return state;
  }
}

export default reducer;
