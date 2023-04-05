import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../../hooks/UseUsers';
import userDetails from './userDetails';


const Dashboard = (_id) => {
    
    const [users, setUsers]= useUsers()
    
    const handleDelate = id =>{
        const proceed = window.confirm('Are You Sure Delate This ???')
        if(proceed){
            const url = `http://localhost:5000/users/${id}`
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = users.filter(users => users._id !== id);
                setUsers(remaining);
    
            })
        }
    }

    return (
        <div>
            <div class="overflow-x-auto w-full">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Number</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            users.map((users)=>(
                                <tr>
                             <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src={users.photo} alt="Avatar" />
                                </div>
                                </div>
                            </div>
                            </td>
                            <td>{users.name}</td>
                            <td>{users.job}</td>
                            <td>{users.number}</td>
                            <td>
                            <button  class="btn btn-ghost btn-xs"><Link to={`/edit/${_id}`}>Edit</Link></button>
                            </td>
                            <th>
                            <button onClick={() => handleDelate(users._id)} class="btn btn-ghost btn-xs">Delete</button>
                           
                            </th>
                        </tr>
 
                            
                            
                            ))
                        }
                        {/* <!-- row 2 --> */}
                        </tbody>
                    </table>
                    </div>
        </div>
    );
};

export default Dashboard;