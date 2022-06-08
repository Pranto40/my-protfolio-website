
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Project from './components/Home/Project';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
