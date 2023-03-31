import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./views/components/Footer";
import Header from "./views/components/Header";
import Detail from "./views/pages/Detail";
import HomePage from "./views/pages/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
