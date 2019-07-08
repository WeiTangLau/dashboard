import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LoginPage />
    </div>
  );
}

export default App;
