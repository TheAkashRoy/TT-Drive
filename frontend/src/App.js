import './App.css';
import Generate from './components/generate';
import Navbar from './components/Navbar';
import Access from './components/access';
import {  Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <div className='bg-[#3A98B9]'>
    <Navbar/>
    

    </div>
    <Routes>
    <Route path="/"  element={<Generate/>} />
      <Route path="/access"  element={<Access/>} />
    </Routes>
    </>
  );
}

export default App;
