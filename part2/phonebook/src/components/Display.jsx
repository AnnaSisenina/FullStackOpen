
const Display = ({ persons, searchName, removePerson }) => {

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div>
      {filteredPersons.map((person) => (
        <p key={person.id}>
          {" "}
          {person.name}: {person.number}{" "}
          <button onClick={() => removePerson(person.id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default Display;
