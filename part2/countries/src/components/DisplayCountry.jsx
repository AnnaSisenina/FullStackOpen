const DisplayCountry = ({ country }) => {
  return (
    <div>
      <h1> {country.name.official}</h1>
      <p>
        <b>Capital:</b> {country.capital}
      </p>
      <p>
        <b>Area:</b> {country.area}
      </p>
      <p>
        <b>Population:</b> {country.population}
      </p>
      <p>
        <b>Languages:</b>
      </p>
      <ul>
        {Object.values(country.languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.official}`}
        style={{ width: "150px", border: "1px solid grey" }}
      />
    </div>
  );
};

export default DisplayCountry;
