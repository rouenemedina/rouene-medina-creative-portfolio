import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutContactPage from "./pages/AboutContactPage/AboutContactPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import PortfolioPagePhotography from "./pages/PortfolioPagePhotography/PortfolioPagePhotography";
import PortfolioPageArt from "./pages/PortfolioPageArt/PortfolioPageArt";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/connect" element={<AboutContactPage />}></Route>
      <Route path="/portfolio" element={<PortfolioPage />}></Route>
      <Route path="/portfolio/photography" element={<PortfolioPagePhotography />} ></Route>
      <Route path="/portfolio/art" element={<PortfolioPageArt />} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
