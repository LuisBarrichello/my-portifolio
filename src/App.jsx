import { Route, Routes } from "react-router-dom";
import "./assets/css/index.css"
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
  )
}

export default App
