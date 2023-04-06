import { useEffect, useState } from 'react';

const UseEdited =(id) => {
    const [edit,setEdit] = useState({})
    useEffect(()=>{
        const url = `http://localhost:3000/users/${id}`
        console.log(url)
        fetch(url)
        .then(res=> res.json())
        .then (data =>setEdit(data))
    },[id])
    
    return [edit,setEdit]
};

export default UseEdited;