import styles from './details.module.css';
import { useContext } from 'react';
import { CountryContext } from '../../states/country/country.context';
import { ThemeContext } from '../../states/theme/theme.context';
import { useParams, useHistory } from 'react-router-dom';

const CountryDetails = () => {
  const { inputColor, textColor, elementColor } = useContext(ThemeContext)
  const { countries } = useContext(CountryContext);
  const { countryId } = useParams();
  const { goBack } = useHistory();

  const [country] = countries
    .filter(country => country.name === countryId)

  const {
    flag, name, population, region, subregion,
    nativeName, capital, topLevelDomain,
    currencies, languages, borders
  } = country;

  return (
    <div className={styles.countryDetailsContainer}>
      <nav className={styles.navContainer}>
        <div
          onClick={() => goBack()}
          className={styles.navButton}
          style={{ background: elementColor, color: inputColor }}
        >
          <i style={{ marginRight: '8px' }} className="fas fa-long-arrow-alt-left"></i>Back
        </div>
      </nav>
      <article className={styles.detailsWrapper}>
        <img className={styles.imageContainer} src={flag} alt={'country flag'} />
        <div className={styles.detailsContainer}>
          <h1 style={{ color: textColor }} className={styles.detailsNameContainer}>{name}</h1>
          <section style={{ color: textColor }} className={styles.dataSection}>
            <div className={styles.data}>
              <p>Native name: <span style={{ color: inputColor }}>{nativeName}</span></p>
              <p>Population: <span style={{ color: inputColor }}>{population}</span></p>
              <p>Region: <span style={{ color: inputColor }}>{region}</span></p>
              <p>Sub Region: <span style={{ color: inputColor }}>{subregion}</span></p>
              <p>Capital: <span style={{ color: inputColor }}>{capital}</span></p>
            </div>
            <div className={styles.data}>
              <p className={styles.itemContainer}>Top Level Domain: <span style={{ color: inputColor }}>{topLevelDomain.map((domain, idx) => (
                <span key={idx} className={styles.item}>{domain}</span>
              ))}</span></p>
              <p className={styles.itemContainer}>Currencies: <span style={{ color: inputColor }}>{currencies.map(({ name }, idx) => (
                <span key={idx} className={styles.item}>{name}</span>
              ))}</span></p>
              <p className={styles.itemContainer}>Languages: <span style={{ color: inputColor }}>{languages.map(({ name }, idx) => (
                <span key={idx} className={styles.item}>{name}</span>
              ))}</span></p>
            </div>
          </section>
          <section className={styles.borderContainer}>
            <p style={{ color: textColor, minWidth: '130px' }}>Border Countries: 
            <span>{borders.map((border, idx) => (
              <span key={idx} style={{ background: elementColor, color: inputColor }} className={styles.borderItem}>{border}</span>
            ))}
            </span>
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}

export default CountryDetails;
