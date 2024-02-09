import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Ex from './components/Ex'


const App=()=>  {
  
    return (
      <div>
        {/* <Ex/> */}
        <Router>
        <Navbar/>

        <Routes>
          
        <Route  path="/" element={<News key={'general'} country={'in'} category={'general'}/>}></Route>

        <Route  path="/general"element={<News key={'general'} country={'in'} category={'general'}/>}></Route>

        <Route  path="/sports"element={<News key={'sports'} country={'in'} category={'sports'}/>}></Route>

        <Route  path="/science"element={<News key={'science'} country={'in'} category={'science'}/>}></Route>

        <Route  path="/technology"element={<News key={'technology'} country={'in'} category={'technology'}/>}></Route>

        <Route  path="/health"element={<News key={'health'} country={'in'} category={'health'}/>}></Route>

        <Route  path="/business"element={<News key={'business'} country={'in'} category={'business'}/>}></Route>

        <Route  path="/entertainment"element={<News key={'entertainment'} country={'in'} category={'entertainment'}/>}></Route>

        </Routes>
        </Router>
      </div>
    )
  
}
export default App;
