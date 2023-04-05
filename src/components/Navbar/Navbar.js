import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <div class="navbar bg-red-500">
                <div class="navbar-start">
                    <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to="/createUser">Create User</Link></li>
                    </ul>
                    </div>
                    <Link to="/" class="btn btn-ghost normal-case text-xl">Data Entry</Link>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                    <li><Link to="/createUser">Create User</Link></li>
                </ul>
    </div>
        <div class="navbar-end mx-5">
        <label tabindex="0" class="mx-5 btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full ">
                <img src={user?.photoURL || 'https://icons.veryicon.com/png/128/miscellaneous/simple-linear-icon-2/user-371.png'} alt='' />
              </div>
            </label>
            {user ? (
                
         <button className='btn btn-primary' onClick={() => signOut(auth)}>Logout</button>
            ) : (
                
        <Link to="/login"className="btn btn-primary"> Login</Link>)}
  </div>
</div>
                           


        </div>
    );
};

export default Navbar;