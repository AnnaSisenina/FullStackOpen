import { useState, useEffect } from "react";
import Display from "./components/Display";
import AddPersonForm from "./components/AddPersonForm";
import SearchPerson from "./components/SearchPerson";
import numberService from "./services/numbers";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState("");


 const hook = () => {
  numberService.getAll().then(initialPersons => {setPersons(initialPersons)})
 }
 useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault();
    
    const personObject = {
      name: newName,
      number: newNumber
    };

    if (newName === "") {
      alert("Please fill the name");
    } else if (newNumber === "") {
      alert("Please fill the Number number");
    } else if (persons.some((person) => person.name === newName)) {
      const userConfirmation = confirm(`${newName} is already added to Phonebook, replace the old number with a new one?`);
      if (userConfirmation){
        const person = persons.find(person => person.name === newName)
        const changedPerson = {...person, number: newNumber}
        numberService.update(person.id, changedPerson).then(returnedPerson => {
          setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
        })
        .catch(error => {
          setNotification(`${changedPerson.name} was already removed from the Phonebook`)
          setNotificationType("error")
          setTimeout(() =>{
            setNotification(null)
            setNotificationType("")
          }, 5000)
        })
      }
      setNewName("");
      setNewNumber("");
      
    } else {
      numberService.create(personObject).then(createdPerson => {
        setPersons(persons.concat(createdPerson))
      })
      setNewName("");
      setNewNumber("");
      setNotification(`Added ${personObject.name}`);
      setNotificationType('added')
      setTimeout(() =>{
        setNotification(null)
        setNotificationType("")
      }, 2000)
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNameSearch = (event) => {
    setSearchName(event.target.value);
  };

  const removePerson = (id) => {
    const person = persons.find((person) => person.id === id)
    const userConfirmation = confirm(`Delete ${person.name}?`)
    if (userConfirmation) {
      numberService.remove(id).then((response) => {
        setPersons(persons.filter((person) => person.id !== id))
      })
      .catch(error => {
        setNotification(`${person.name} was already removed from the Phonebook`)
        setNotificationType("error")
        setTimeout(() =>{
          setNotification(null)
          setNotificationType("")
        }, 5000)
      })
    } 
  };


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} type={notificationType} />
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
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Display persons={persons} searchName={searchName} removePerson={removePerson} />
    </div>
  );
};

export default App;
