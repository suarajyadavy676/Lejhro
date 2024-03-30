import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import Innovation from "./components/Innovation";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/innovation" element={<Innovation/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
