import { useContext, useState } from 'react';
import { setFilter, toggleFilter } from '../../states/search/search.actons';
import { SearchContext } from '../../states/search/search.context';
import { ThemeContext } from '../../states/theme/theme.context';
import styles from './search.module.css';


function SearchBox() {
  const { elementColor, inputColor } = useContext(ThemeContext)
  const { dispatch, isFilter } = useContext(SearchContext);
  const [searchValue, setValue] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
  }

  const handleFocus = ()=> {
    if(isFilter){
      dispatch(toggleFilter()) 
    }
  }

  const handleChange = e => { 
    setValue(e.target.value) 
    dispatch(setFilter(searchValue))
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ background: elementColor }}
      className={styles.searchBoxContainer}
    >
      <i style={{ color: inputColor, padding: '0 24px' }} className="searchIcon fas fa-search"></i>

      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        style={{ color: inputColor }}
        className={styles.searchInput}
        onFocus={handleFocus}
      />
    </form>
  )
}

export default SearchBox;