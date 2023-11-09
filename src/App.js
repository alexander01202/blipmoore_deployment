import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home"
import Dashbord from "./pages/admin/Dashbord"
import Login from "./pages/admin/pages/Login";
import Signup from "./pages/admin/pages/Signup";
import Pricing from "./pages/Pricing";
import Redirect from "./pages/Redirect";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Price" element={<Pricing />} />
          <Route path="/Redirect" element={<Redirect />} />
          <Route path="/admin/*" element={<Dashbord />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup/:access' element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
