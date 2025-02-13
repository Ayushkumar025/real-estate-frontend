import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import SearchHouse from "./Components/SeachHouse/SearchHouse";
import PropertyPost from "./Components/PostProperty/PostProperety";
import PopularProperties from "./Components/PopularProperties/PopularProperties";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/pp" element={<PropertyPost />} />
        <Route path="/pop" element={<PopularProperties />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
