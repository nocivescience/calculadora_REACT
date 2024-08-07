import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Calculator from "./components/Calculator";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;
