import React from "react";
import Pomidor from "./components/pomidor/Pomidor";
import NavbarTop from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskBar from "./components/task-bar/TaskBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Pomidor />
      <TaskBar />
    </div>
  );
}

export default App;
