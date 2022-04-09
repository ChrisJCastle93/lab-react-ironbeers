import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllBeers from "./components/AllBeers";
import SingleBeer from "./components/SingleBeer";
import NewBeer from "./components/NewBeer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={< Home />}/>
        <Route path="/allbeers" element={< AllBeers />}/>
        <Route path="/allbeers/:id" element={< SingleBeer />}/>
        <Route path="/new" element={< NewBeer />}/>
      </Routes>
    </div>
  );
}

export default App;
