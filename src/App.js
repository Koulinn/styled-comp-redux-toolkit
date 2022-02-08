import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Button from "./components/Button";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import TopNavigation from "./components/TopNavigation";

function App() {
  return (
    <Wrapper>
      <TopNavigation />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />
      </Routes>
    </Wrapper>
  );
}

export default App;
