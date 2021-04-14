import { searchReducer, INITIAL_STATE } from './search.reducer';
import { useReducer, createContext } from 'react';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {

  const [
    {
      isFilter,
      filterValue
    }, dispatch] = useReducer(searchReducer, INITIAL_STATE)

  return (
    <SearchContext.Provider value={{ isFilter, filterValue, dispatch }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider;