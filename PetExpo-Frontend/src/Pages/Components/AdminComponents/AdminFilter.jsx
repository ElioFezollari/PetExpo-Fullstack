const AdminFilter = ({filteredSearch,setFilteredSearch,selectedAnimal,setSelectedAnimal,setIsCreating,isCreating}) =>{
    const animalTypes = ["Dogs", "Cats", "Birds"];
    return(
        <div className="admin-filter">
        <input
          type="text"
          onChange={(e) => setFilteredSearch(e.target.value)}
          placeholder={selectedAnimal + ' name'}
          value={filteredSearch}
        />
        <label htmlFor="animal-selector">
          <select
            name="animal-selector"
            value={selectedAnimal}
            onChange={(e) => setSelectedAnimal(e.target.value)}
            id=""
          >
            {animalTypes.map((animal, index) => (
              <option key={index}>{animal}</option>
            ))}
          </select>
        </label>
          <button onClick={()=>{setIsCreating(!isCreating)}}>{isCreating ? (<p>Back to listings</p>):<p>Add {selectedAnimal}</p>}</button>
      </div>
    )
}
export default AdminFilter