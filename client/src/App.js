import Style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Detail from "./components/Detail/Detail";
import Activities from "./components/Activities/Activities";
import About from "./components/About/About";
import { useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const location = useLocation();

  return (
    <div className={Style.App}>
      {location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/countries/:id" element={<Detail />}/>
        <Route path="/activities" element={<Activities />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
};

export default App;
