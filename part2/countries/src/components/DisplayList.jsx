import { useState, useEffect } from "react";
import DisplayCountry from "./DisplayCountry";

const DisplayList = ({ countries, searchCountry }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const filteredCountries = countries.filter((country) =>
    country.name.official.toLowerCase().includes(searchCountry.toLowerCase())
  );

  useEffect(() => {
    setSelectedCountry(null);
  }, [searchCountry]);
  
  if (searchCountry === "") {
    return <p>Please, enter a country name</p>;
  }

  if (filteredCountries.length === 1) {
    return <DisplayCountry country={filteredCountries[0]} />;
  }

  if (selectedCountry) {
    return <DisplayCountry country={selectedCountry} />;
  }

  if (filteredCountries.length <= 10) {
    return (
      <div>
        {filteredCountries.map((country) => (
          <p key={country.cca3}>
            {country.name.official}  {" "}
          <button onClick={() => setSelectedCountry(country)}>Show</button>
            </p>
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
