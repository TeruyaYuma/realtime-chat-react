import React, { useEffect } from 'react';
import logo from './logo.svg';
import { io } from 'socket.io-client'
import './App.css';

function App() {
  useEffect(() => {
    const socket = io("http://localhost:3030")
    socket.on("connect", () => {
      console.log('connect'); // x8WIv7-mJelg7on_ALbx
    });
    socket.emit("emit", "emit");
  },[])
  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
