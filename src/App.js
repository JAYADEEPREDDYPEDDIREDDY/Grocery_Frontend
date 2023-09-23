
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Grocery from './components/Grocery';
import AddCategory from './components/AddCategory';
import Home from './components/Home';
import FPO from './components/FPO';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Grocery" element={<Grocery/>}/>
    <Route path="/Fpo" element={<FPO/>}/>
    <Route path="/addCategory" element={<AddCategory/>}/>
    </Routes>
    </BrowserRouter>
    
 

    
  );
}

export default App;
