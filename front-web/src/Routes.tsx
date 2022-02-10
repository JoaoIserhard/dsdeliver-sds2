import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders";

function RoutePath() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/orders" element={<Orders />}/>
    </Routes>
    </BrowserRouter>

  )
}

export default RoutePath;