import { useState, useEffect } from "react";
import countryService from "./services/countries";
import DisplayList from "./components/DisplayList";

const App = () => {
  const [newCountry, setNewCountry] = useState("");
  const [countries, setCountries] = useState([]);

  const handleNewCountry = (event) => {
    setNewCountry(event.target.value);
  };

  const hook = () => {
    countryService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  };
  useEffect(hook, []);

  return (
    <div>
      <h1>Get country info</h1>
      <form action="onSubmit">
        <p>
          Country: <input value={newCountry} onChange={handleNewCountry} />
        </p>
        <DisplayList countries={countries} searchCountry={newCountry} />
      </form>
    </div>
  );
};

export default App;
