import React, { useContext } from 'react';
import { SearchContext } from '../../states/search/search.context';
import { setFilter } from '../../states/search/search.actons';
import styles from './filter.module.css';

const FilterItem = ({ region }) => {
  const { dispatch } = useContext(SearchContext);

  return (
    <div onClick={()=>dispatch(setFilter(region))} className={styles.filterItem}>{region}</div>
  )
}

export default React.memo(FilterItem);