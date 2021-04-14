import { useContext } from 'react';
import { toggleMode } from '../../states/theme/theme.actions';
import { ThemeContext } from '../../states/theme/theme.context';
import styles from './header.module.css';

function Header() {
  const { dispatch, elementColor, textColor, mode } = useContext(ThemeContext);

  return (
    <div style={{ background: elementColor }} className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div style={{ color: textColor }} className={styles.logoContainer}>Where in the world?</div>
        <div className={styles.darkmodeContainer}>
          <div className={styles.darkmodeIconContainer}>
            {
              mode ?
              <i onClick={() => dispatch(toggleMode())} style={{color: textColor, transform: 'scale(0.7)'}} className="far fa-moon"></i>
              :
              <i onClick={() => dispatch(toggleMode())} style={{color: textColor, transform: 'scale(0.7)'}} className="fas fa-moon"></i>
            }
          </div>
          <div style={{ color: textColor }} className={styles.darkmodeText}>Dark mode</div>
        </div>
      </div>
    </div>
  )
}

export default Header;