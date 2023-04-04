import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import useUsers from '../../hooks/UseUsers';


const Home = () => {
    const [users, setUsers]= useUsers()
    console.log(users.name)

    const [user] = useAuthState(auth);
    return (
        <div>
             <div class="drawer">
                        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
                        <div class="drawer-content flex flex-col">
                            {/* <!-- Navbar --> */}
                            <div class="w-full navbar bg-fuchsia-400">
                            <div class="flex-none lg:hidden">
                                <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div> 
                            <div class="flex-1 px-2 mx-2"><Link to="/">Data Entry</Link></div>
                            <div class="flex-none hidden lg:block">
                                <ul class="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}
                                <li><Link>Create User</Link></li>
                                <li>
                            {user ? (
                                <button onClick={() => signOut(auth)}>Logout</button>
                            ) : (
                                <Link
                                    to="/login"
                                    className={({ isActive }) =>
                                    isActive ? `block  pr-3 pl-3  active:bg-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent` : undefined
                                    }
                                >
                                    Login
                                </Link>
                            )}
                        </li>
                       
                         <div className=''>
                         <img className="w-10 ml-2 rounded-full min-w-[40px] h-10 min-h-[40px]" src={user?.photoURL} alt="Profile"/>
                         </div>
                                </ul>
                            </div>
                            </div>
                            {/* <!-- Page content here --> */}
                            
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
                            <button class="btn btn-ghost btn-xs">Edit</button>
                            </td>
                            <th>
                            <button class="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>
                            ))
                        }
                        {/* <!-- row 2 --> */}
                        </tbody>
                    </table>
                    </div>

                        </div> 
                        <div class="drawer-side">
                            <label for="my-drawer-3" class="drawer-overlay"></label> 
                            <ul class="menu p-4 w-80 bg-base-100 ">
                            {/* <!-- Sidebar content here --> */}
                            <li><Link>Create User</Link></li>
                            <li>
                            {user ? (
                                <button onClick={() => signOut(auth)}>Logout</button>
                            ) : (
                                <Link
                                    to="/login"
                                    className={({ isActive }) =>
                                    isActive ? `block  pr-3 pl-3  active:bg-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent` : undefined
                                    }
                                >
                                    Login
                                </Link>
                            )}
                        </li>
                       
                         <div className=''>
                         <img className="w-10 ml-2 rounded-full min-w-[40px] h-10 min-h-[40px]" src={user?.photoURL} alt="Profile"/>
                         </div>
                            </ul>
                         </div>
                    </div>
                </div>
    );
};

export default Home;