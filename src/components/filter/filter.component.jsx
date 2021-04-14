import React, {useContext} from 'react';
import { ThemeContext } from '../../states/theme/theme.context';
import styles from './filter.module.css';
import FilterItem from './filterItem.component';
import { SearchContext } from '../../states/search/search.context';
import { toggleFilter } from '../../states/search/search.actons';

function FilterBar ({countries}) {
  const {isFilter, dispatch} = useContext(SearchContext);
  const {elementColor, textColor} = useContext(ThemeContext);
  
  let regions = new Set();

  for(let country of countries){
    regions.add(country.region)
  }

  return (
    <div style={{color: textColor}} className={styles.filterContainer}>
      <div 
        onClick={()=> dispatch(toggleFilter())} 
        className={styles.filterButton}
        style={{background: elementColor}}
      > 
        Filter By Region<i className="fas fa-angle-down"></i>
      </div>
      <div 
        style={{display: `${isFilter ? 'block' : 'none' }`, background: elementColor}} 
        className={styles.filterList}
      >
         {
          [...regions].map((region, idx) => (
            <FilterItem key={idx} region={region}/>
          ))
         }
      </div>
    </div>
  )
}

export default FilterBar;