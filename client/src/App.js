import './App.css';
import { Routes, Route} from "react-router-dom";
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Landing/>}/>
        <Route path ="/home" element={<Home/>}/>
        <Route path = "/form" element={<Form/>}/>
        <Route path = "/countries/:id" element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
