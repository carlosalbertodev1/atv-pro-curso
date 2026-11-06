import './index.css';
import Central from './components/central/central.jsx';
import Posts from './components/post/post.jsx';
import Navbar from './components/navbar/navbar.jsx'
import './App.css'
import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './tela-login/LoginApp.jsx';
import Feed from './feed/feed.jsx'
import Configs from './configs/configs.jsx';



function App() {
  
  return (
    
    <>
       <BrowserRouter>

      <Routes>
          {/* /* tela de login */}
        <Route path="/" element={<Login />} />

          {/* Tela de perfil*/}
        <Route 
          path='/perfil'
          element={
            <>   
            <Navbar/>
            <Central/>
            <Posts/>
            </>
          }
          />

          <Route
          path='/feed'
          element = {
            <>
            <Feed/>
            </>
          }
          />

          <Route 
          path='/configs'
          element = {
            <>
            <Configs/>
            </>
          }
          />
          

      </Routes>


    </BrowserRouter>

    </>
  )
}

export default App;
