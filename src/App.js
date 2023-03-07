import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
