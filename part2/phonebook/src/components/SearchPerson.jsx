const SearchPerson = ({ searchName, handleNameSearch }) => {
  return(
    <div>
      <input value={searchName} onChange={handleNameSearch}></input>
    </div>
  )
}

export default SearchPerson;