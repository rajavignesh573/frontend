import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applicanthome from "./pages/Applicanthome";
import Terraformerhome from "./pages/Terraformerhome";
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/applicanthome" element={<Applicanthome />}></Route>
        <Route path="/terraformerhome" element={<Terraformerhome />}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;