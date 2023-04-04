import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import Home from './components/Home/Home'
import Signup from './components/Auth/Signup/Signup'
import RequireAuth from './components/Auth/RequireAuth/RequireAuth';
import CreateUser from './components/CreateUser/CreateUser';

const App = () => {
  return (
    <div>
<Routes>
                <Route path="/" element={
                   <Home/>} />
                <Route
                    path="/home"
                    element={
                      <RequireAuth>
                          <Home/>
                          
                        </RequireAuth>
                    }
                />
                
                <Route path="/createUser" element={<CreateUser />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            
            </Routes>
    </div>
  );
};

export default App;