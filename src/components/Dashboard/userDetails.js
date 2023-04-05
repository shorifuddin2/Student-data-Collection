import React from 'react';
import { Link } from 'react-router-dom';

const userDetails = ({user,handleDelate}) => {
    const{_id, name,job,number,photo}=user
    return (
        <div>
             <tr>
                             <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src={photo} alt="Avatar" />
                                </div>
                                </div>
                            </div>
                            </td>
                            <td>{name}</td>
                            <td>{job}</td>
                            <td>{number}</td>
                            <td>
                            <button  class="btn btn-ghost btn-xs"><Link to={`/edit/${_id}`}>Edit</Link></button>
                            </td>
                            <th>
                            <button onClick={() => handleDelate()} class="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>
        </div>
    );
};

export default userDetails;