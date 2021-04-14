import { useContext } from 'react';
import CountryDetails from '../../components/details/details.components';
import WithSpinner from '../../components/spinner/spinner.component';
import { ThemeContext } from '../../states/theme/theme.context';
import styles from './detailspage.module.css';

const CountryDetailsWithSpinner = WithSpinner(CountryDetails);

function DetailsPage() {
  const {backgroundColor} = useContext(ThemeContext)
  return (
    <div style={{background: backgroundColor}} className={styles.detailsContainer}>
      <CountryDetailsWithSpinner/>
    </div>
  )
}

export default DetailsPage;