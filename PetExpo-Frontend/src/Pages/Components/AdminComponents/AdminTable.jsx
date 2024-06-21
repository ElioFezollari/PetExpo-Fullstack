
import AdminTableRow from "./AdminTableRow"

const AdminTable = ({selectedAnimal,filteredAnimals,setMessage,setError}) =>{
    return(
        <table>
            <tbody>
            <tr>
              <th>{selectedAnimal == 'dogs' || selectedAnimal =='cats' ? 'Breed':'Species'}</th>
              <th>{selectedAnimal == 'dogs' || selectedAnimal =='cats' ? 'Origin':'Family'}</th>
              <th>Actions</th>
            </tr>
                {filteredAnimals.map((animal,index)=>{
                    return(
                        <AdminTableRow setMessage={setMessage} selectedAnimal={selectedAnimal} setError={setError} key={index} animal={animal}/>
                    )
                })}
                </tbody>
          </table>
    )
}
export default AdminTable