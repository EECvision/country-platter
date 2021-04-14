import { useContext } from 'react';
import { ThemeContext } from '../../states/theme/theme.context';
import styles from './footer.module.css';

const Footer = () => {
  const {textColor, elementColor}= useContext(ThemeContext);

  return (
    <footer style={{background: elementColor}} className={styles.footerWrapper}>
      <div style={{color: textColor}} className={styles.footerContainer}>Designed with &#x2728; by Emmanuel Ezeka</div>
    </footer>
  )
}

export default Footer