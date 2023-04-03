import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import Home from './components/Home/Home';
import Main from './components/Main/Main';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
         children:[
          {
            path:"/",
            element:<Home></Home>
          },
          {
            path:"/home",
            element:<Home></Home>
          },
          {
            path:"/login",
            element:<Login></Login>
          },
          {
            path:"/signup",
            element:<Signup></Signup>
          },
         
         ]
    }
 
    
  ]);


  return (
    <div className="App">
        
        <RouterProvider router={router}></RouterProvider>
        
    </div>
  );
}

export default App;
