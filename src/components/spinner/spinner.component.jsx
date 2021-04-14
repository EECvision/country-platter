import { useContext } from "react";
import { CountryContext } from "../../states/country/country.context";
import { ThemeContext } from "../../states/theme/theme.context";
import styles from './spinner.module.css';



const WithSpinner = WrappedComponent => {
  const Spinner = () => {
    const {elementColor, inputColor}=useContext(ThemeContext);
    const {isLoading} = useContext(CountryContext);

    return isLoading
      ?
      <div style={{ background: elementColor }} className={styles.spinnerWrapper}>
        <div className={styles.spinnerContainer}>
          <i style={{ color: inputColor, fontSize: '2rem' }} className="fas fa-sync-alt"></i>
        </div>
      </div>
      :
      <WrappedComponent/>
  }
  return Spinner;
}

export default WithSpinner;