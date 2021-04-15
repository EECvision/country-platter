import CollectionMenu from '../collection-menu/collection-menu.component';
import FilterBar from '../filter/filter.component';
import SearchBox from '../search/search.component';
import styles from './directory.module.css';
import { SearchContext } from '../../states/search/search.context';
import { CountryContext } from '../../states/country/country.context';
import { useContext } from 'react';

function DirectoryMenu() {
  const { filterValue } = useContext(SearchContext);
  const { countries } = useContext(CountryContext);

  const regex = new RegExp(filterValue.toLowerCase());
  const countriesToDisplay = () => {
    if (countries) {
      if (!filterValue) {
        return countries
          .filter(country =>
            country.region === 'Africa'
          )
      } else {
        return countries
          .filter(country =>
            country.region === filterValue || regex.test(country.name.toLowerCase())
          )
      }
    }
  }

  return (
    <div className={styles.directoryMenuContainer}>
      <div className={styles.searchAndFilterContainer}>
        <SearchBox />
        <FilterBar countries={countries} />
      </div>
      <CollectionMenu countries={countriesToDisplay()} />
    </div>
  )
}

export default DirectoryMenu