import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./scss/reset.scss"
import "./index.scss";
import Auth from './pages/authorization';
import Chat from './pages/chat';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Auth />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>
  )
}

export default App
