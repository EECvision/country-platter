import searchActionTypes from './search.types';

export const INITIAL_STATE = {
  isFilter: false,
  filterValue: 'Africa'
}

export const searchReducer = (state = INITIAL_STATE, action)=>{
  switch (action.type) {
    case searchActionTypes.TOGGLE_FILTER:
      return {
        ...state,
        isFilter: !state.isFilter
      }
    case searchActionTypes.SET_FILTER:
      return {
        ...state,
        filterValue: action.payload
      }
    default:
      return state;
  }
}
