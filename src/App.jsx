import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Landingpage from './pages/Landingpage.jsx'
import Shock from './pages/Shock.jsx'
import Pocketball from './pages/Pocketball.jsx'
import Mirrorchain from './pages/Mirrorchain.jsx'
import Stocking from './pages/Stocking.jsx'
import Bag1 from './pages/Bag1.jsx'
import Bag2 from './pages/Bag2.jsx'
import Bag3 from './pages/Bag3.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Shock" element={<Shock />} />
          <Route path="/Pocketball" element={<Pocketball />} />
          <Route path="/Mirrorchain" element={<Mirrorchain />} />
          <Route path="/Stocking" element={<Stocking />} />
          <Route path="/Bag1" element={<Bag1 />} />
          <Route path="/Bag2" element={<Bag2 />} />
          <Route path="/Bag3" element={<Bag3 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
