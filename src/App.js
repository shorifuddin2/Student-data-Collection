import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup'
import RequireAuth from './components/Auth/RequireAuth/RequireAuth';
import CreateUser from './components/CreateUser/CreateUser';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Edit from './components/Dashboard/Edit';

const App = () => {
  return (
    <div>
      <Navbar/>
<Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home"element={<Home/>}/>
                <Route path="/edit/:id" element={
                  <RequireAuth>
                    <Edit />
                  </RequireAuth>
                }/>
                
                <Route path="/createUser" element={
                  <RequireAuth>
                    <CreateUser />
                  </RequireAuth>
                } />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            
            </Routes>
    </div>
  );
};

export default App;