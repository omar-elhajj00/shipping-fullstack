
import './App.css';
import { Routes, Route} from 'react-router-dom';
import SignInOutContainer from './Container/SignInOutContainer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">   
      <Routes>
        {/* landing page */}
        <Route path="/" element={<SignInOutContainer/>} />
        {/* home page */}
        <Route path="/Home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
