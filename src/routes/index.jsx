import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//HOOKS
import useAuth from "../hooks/useAuth";

//PAGES
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Private Item={Home} />} />
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default RoutesApp;
