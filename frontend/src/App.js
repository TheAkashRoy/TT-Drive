import './App.css';
import Navbar from './components/Navbar';
import Generate from './components/generate';
import FileUpload from './components/FileUpload'; // Import the FileUpload component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Route

function App() {
  return (
    <Router>
      <div className='bg-[#EEEEEE]'>
        <Navbar/>
        <Routes>
          <Route exact path="/" Component={Generate} /> {/* Define the route for the Generate component */}
          <Route exact path="/upload" Component={FileUpload} /> {/* Define the route for the FileUpload component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
