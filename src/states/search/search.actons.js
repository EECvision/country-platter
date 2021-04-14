import searchActionTypes from './search.types';

export const toggleFilter =()=>({
  type: searchActionTypes.TOGGLE_FILTER
});

export const setFilter = val => ({
  type: searchActionTypes.SET_FILTER,
  payload: val
});


