import { useState, useEffect } from "react";
import axios from "axios";
import Display from "./components/Display";
import AddPersonForm from "./components/AddPersonForm";
import SearchPerson from "./components/SearchPerson";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchName, setSearchName] = useState("");

 const hook = () => {
  axios
  .get('http://localhost:3001/persons')
  .then(response => {
    setPersons(response.data)
  })
 }
 useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1,
    };
    if (newName === "") {
      alert("Please fill the name");
    } else if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else if (newPhone === "") {
      alert("Please fill the phone number");
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewPhone("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleNameSearch = (event) => {
    setSearchName(event.target.value);
  };

  
  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Find a person</h3>
      <SearchPerson
        searchName={searchName}
        handleNameSearch={handleNameSearch}
      />
      <h3>Add a new number</h3>
      <AddPersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <h3>Numbers</h3>
      <Display persons={persons} searchName={searchName} />
    </div>
  );
};

export default App;
