import DisplayCountry from "./DisplayCountry";

const DisplayList = ({ countries, searchCountry }) => {
  const filteredCountries = countries.filter((country) =>
    country.name.official.toLowerCase().includes(searchCountry.toLowerCase())
  );

  if (searchCountry === "") {
    return <p>Please, enter a country name</p>;
  }

  if (filteredCountries.length === 1) {
    return <DisplayCountry country={filteredCountries[0]} />;
  }

  if (filteredCountries.length <= 10) {
    return (
      <div>
        {filteredCountries.map((country) => (
          <p key={country.cca3}>{country.name.official}</p>
        ))}
      </div>
    );
  }

  return (
    <div>
      <p>Too many matches, specify another filter</p>
    </div>
  );
};

export default DisplayList;
