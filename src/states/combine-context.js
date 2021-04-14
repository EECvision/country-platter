import CountryContextProvider from "./country/country.context"
import SearchContextProvider from "./search/search.context"
import ThemeContextProvider from "./theme/theme.context"

const CombineContextProvider = ({ children }) => {
  return (
      <ThemeContextProvider>
        <CountryContextProvider>
          <SearchContextProvider>
            {children}
          </SearchContextProvider>
        </CountryContextProvider>
      </ThemeContextProvider>
  )
}

export default CombineContextProvider;