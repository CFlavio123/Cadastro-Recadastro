import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login"; 
import Register from "./Components/Register/Register"; 
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
