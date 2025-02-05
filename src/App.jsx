import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header/Header"
import Register from "./Components/Register/Register"
import Login from "./Components/Login/Login"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header/></>}></Route>
          <Route path="/register" element={<><Register/></>}></Route>
          <Route path="/login" element={<><Login/></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
