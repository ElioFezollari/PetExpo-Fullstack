
const getAll =async (animal) =>{
    const response = await fetch(`http://localhost:3000/${animal}`)
    const animals = await response.json()
    return animals
}
const getOneAnimal = async (id,animal) =>{
    const response = await fetch(`http://localhost:3000/${animal}/${id}`)
    const returnedAnimal = await response.json()
    return returnedAnimal 
}
const editAnimal = async (id, animal, data) => {
    const response = await fetch(`http://localhost:3000/${animal}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const postedAnimal = await response.json();
    return postedAnimal;
};
const addAnimal = async (animal, data) => {
    
    const response = await fetch(`http://localhost:3000/${animal}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const postedAnimal = await response.json();
    return postedAnimal;
};
const deleteAnimal = async (id, animal) => {
        const response = await fetch(`http://localhost:3000/${animal}/${id}`, {
            method: 'DELETE'
        });
        const message = await response.json()
        return message
    };
export {getAll,getOneAnimal,editAnimal,deleteAnimal,addAnimal}