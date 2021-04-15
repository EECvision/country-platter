import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../states/theme/theme.context';
import styles from './collection-item.module.css';

function CollectionItem({ name, region, flag, population, capital }) {
  const { elementColor, textColor, inputColor } = useContext(ThemeContext);

  return (
    <header style={{ background: elementColor }} className={styles.collectionItemContainer}>
      <NavLink to={`details/${name}`}>
        <img className={styles.flagContainer} src={flag} alt="flag" />
      </NavLink>
      <header style={{ color: textColor }} className={styles.detailsContainer}>
        <h1 className={styles.nameContainer}>{name}</h1>
        <p>Population:<span style={{color: inputColor}}>{population}</span></p>
        <p>Region:<span style={{color: inputColor}}>{region}</span></p>
        <p>Capital:<span style={{color: inputColor}}>{capital}</span></p>
      </header>
    </header>
  )
}

export default CollectionItem