import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./views/signup/signup";
import Login from "./views/login/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
