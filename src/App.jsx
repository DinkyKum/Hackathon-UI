import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Componenets/Body";
import Home from "./Componenets/Home";

function App() {
  return (
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>
      <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
  </BrowserRouter>

  )
}

export default App
