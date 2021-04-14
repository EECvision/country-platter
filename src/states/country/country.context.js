import { useReducer, createContext } from 'react';

export const CountryContext = createContext();
const INITIAL_STATE = {
  isLoading: true,
  countries: null
};

const CountryContextProvider = ({ children }) => {
  const countryReducer = (state = INITIAL_STATE, action) =>  {
    switch (action.type) {
      case 'SET_COUNTRIES':
        return {
          ...state,
          countries: action.payload,
          isLoading: false
        }
      default:
        break;
    }
  }

  const [{countries, isLoading}, dispatch] = useReducer(countryReducer, INITIAL_STATE)

  return (
    <CountryContext.Provider value={{ countries, isLoading, dispatch }}>
      {children}
    </CountryContext.Provider>
  )
}

export default CountryContextProvider;