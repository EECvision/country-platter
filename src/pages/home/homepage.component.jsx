import { useContext } from 'react';
import DirectoryMenu from '../../components/directory/directory';
import Footer from '../../components/footer/footer.component';
import WithSpinner from '../../components/spinner/spinner.component';
import { ThemeContext } from '../../states/theme/theme.context';
import styles from './homepage.module.css';


const DirectoryMenuWithSpinner = WithSpinner(DirectoryMenu);

function HomePage() {
  const {backgroundColor} = useContext(ThemeContext);

  return (
    <div style={{background: backgroundColor}} className={styles.homepageContainer}>
      <DirectoryMenuWithSpinner/>
      <Footer/>
    </div>
  )
}

export default HomePage;