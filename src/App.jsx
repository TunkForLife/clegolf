import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Landingpage from './pages/Landingpage.jsx'
import Shock from './pages/Shock.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Shock" element={<Shock />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
