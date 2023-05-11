import './App.css';
import Landing from './components/Landing';
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" element={<Landing/>} />
        <Route path= "/Home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
