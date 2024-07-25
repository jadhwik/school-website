import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Academics from "./Components/Academics";
import Admission from "./Components/Admission";
import FacultyIntroduction from "./Components/Faculty";
import Students from "./Components/Students";
import Gallery from "./Components/Gallery";

const App = () => {
  return (
    <Router basename="/school-website/">
      <div>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/faculty" element={<FacultyIntroduction />} />
          <Route path="/students" element={<Students />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
