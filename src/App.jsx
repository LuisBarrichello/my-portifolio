import { Route, Routes } from "react-router-dom";
import "./assets/css/index.css"
import Home from "./pages/Home/Home";
import IntersectionObserverComponent from "./components/IntersectionObserver/IntersectionObserver"
import BackToTopButton from "./components/common/Buttons/BackToTopButton"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      <IntersectionObserverComponent />
      <BackToTopButton />
    </>
  )
}

export default App
