import { Routes, Route } from 'react-router-dom';
import Rockets from './components/Rockets';
import Mission from './components/Mission';
import MyProfile from './components/MyProfile';
import Navigation from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
