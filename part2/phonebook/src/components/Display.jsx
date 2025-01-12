
const Display = ({ persons, searchName }) => {
  if (searchName === "") {
    return (
      <div>
        {persons.map((person) => (
          <p key={person.id}> {person.name}: {person.phone}</p>
        ))}
      </div>
    );
  }
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div>
      {filteredPersons.map((person) => (
        <p key={person.id}> {person.name}: {person.phone}</p>
      ))}
    </div>
  );
};

export default Display;