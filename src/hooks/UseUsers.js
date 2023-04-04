import { useEffect, useState } from "react";


const useUsers = () => {

    const [users, setUsers] = useState([]);
 
    useEffect(()=>{
        fetch("Users.json")
        .then(res => res.json())
        .then(Data => setUsers(Data))
    }, []);
    return [users,setUsers];
        
};

export default useUsers;