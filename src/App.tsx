import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./views/components/Footer";
import Header from "./views/components/Header";
import Detail from "./views/pages/Detail";
import HomePage from "./views/pages/HomePage";
import NotFoundPage from "./views/pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
