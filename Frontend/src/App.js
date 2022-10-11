import Header from "./Header";
import Home from "./Componenet/Home";
import Appes from "./Componenet/Appes";
import Footer from "./Componenet/Footer";
import { Routes, Route } from "react-router-dom";
import Register from "./Componenet/Register";
import Login from "./Componenet/Login";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/apps" element={<Appes />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
