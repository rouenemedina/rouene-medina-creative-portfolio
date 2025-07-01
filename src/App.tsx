import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutContactPage from "./pages/AboutContactPage/AboutContactPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/connect" element={<AboutContactPage />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
