import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./views/signup/signup";
import Login from "./views/login/login";
import RouterWrapper from "./system/routes/routesWraper/RouteWraper";

function App() {
  return (
    <BrowserRouter>
      <RouterWrapper />
    </BrowserRouter>
  );
}

export default App;
