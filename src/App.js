import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import React,{useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {

  const [mode, setmode] = useState('light');

  const togglemode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(22, 22, 70)';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <BrowserRouter basename='Text-Editor'>
       <Navbar title="Text Editor" mode={mode} Mode={togglemode}/>
       <Routes>
          <Route path='/' element={<TextArea heading="Edit Your Text" mode={mode}/>}/>
          <Route path='/about' element={<div className="container"><About mode={mode} head="About Text-Editor"/></div>}/>
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
