const AddPersonForm =({ addPerson, newName, handleNameChange, newPhone, handlePhoneChange }) => {
   
    return(
      <div>
        <form onSubmit={addPerson}>
          <div>
            <p>
              Name: <input value={newName} onChange={handleNameChange} />
            </p>
            <p>
              Phone: <input value={newPhone} onChange={handlePhoneChange} />
            </p>
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    )
  }

  export default AddPersonForm;