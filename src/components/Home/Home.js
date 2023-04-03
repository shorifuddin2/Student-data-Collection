import React from 'react';

const Home = () => {
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
                            <div class="flex-1 px-2 mx-2">Data Entry</div>
                            <div class="flex-none hidden lg:block">
                                <ul class="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}
                                <li><a>Create User</a></li>
                                <li><a>Login/Logout</a></li>
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
                            <th>Salary</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                             <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                            </div>
                            </td>
                            <td>Zemlak, Daniel</td>
                            <td>Manager</td>
                            <td>Edit</td>
                            <td>50000</td>
                            <th>
                            <button class="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>
                        {/* <!-- row 2 --> */}
                        </tbody>
                    </table>
                    </div>

                        </div> 
                        <div class="drawer-side">
                            <label for="my-drawer-3" class="drawer-overlay"></label> 
                            <ul class="menu p-4 w-80 bg-base-100 ">
                            {/* <!-- Sidebar content here --> */}
                            <li><a>Create User</a></li>
                            <li><a>Login/Logout</a></li>
                            </ul>
                         </div>
                    </div>
                </div>
    );
};

export default Home;