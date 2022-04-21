import styles from './App.module.css';
import HomePage from './pages/home/homepage.component';
import { useContext, useEffect} from 'react';
import { ThemeContext } from './states/theme/theme.context';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import DetailsPage from './pages/detailspage/detailspage.component';
import axios from 'axios';
import { CountryContext } from './states/country/country.context';


function App() {
  const {backgroundColor} = useContext(ThemeContext);
  document.body.style.background = backgroundColor;
  const {dispatch} = useContext(CountryContext);

  useEffect(() => {
    async function getCountries() {
      try {
        let { data } = await axios.get("https://restcountries.com/v3.1/all");
        dispatch({type: 'SET_COUNTRIES', payload: data})
      } catch (error) {
        console.log(error.message)
      }
    }
    getCountries()
  }, [dispatch])

  return (
    <div className={styles.appContainer}>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/details/:countryId'  component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
