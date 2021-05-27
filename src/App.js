import React from "react";
import './App.css';
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Feed from "./components/Feed/Feed"
function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Header />

      <div className="app_body">
      <Sidebar />
      <Feed />
        {/*Widgets */}
      </div>

      
    </div>
  );
}

export default App;
