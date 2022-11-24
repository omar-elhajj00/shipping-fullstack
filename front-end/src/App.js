
import { Container } from '@mui/material';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignInOutContainer from './Container/SignInOutContainer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">   
      <Routes>
        <Route path="/" element={<SignInOutContainer/>} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
