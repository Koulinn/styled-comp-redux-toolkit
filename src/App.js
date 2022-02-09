import { useEffect } from "react";
import Wrapper from "./components/Wrapper";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import TopNavigation from "./components/TopNavigation";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../src/features/counter/counterSlice.js";
import { fetchNews } from "../src/features/counter/thunkExample.js";

function App() {
  const store = useSelector((s) => s);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  return (
    <Wrapper>
      <TopNavigation />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />
      </Routes>
      <button onClick={() => dispatch(increment())}>Add</button>
      <h4>{store.counter.value}</h4>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </Wrapper>
  );
}

export default App;
