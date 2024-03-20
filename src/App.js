import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./layout/Layout";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Menu from './pages/menu/Menu';
import Burger from './pages/burger/Burger';
import Shawarma from './pages/shawarma/Shawarma';
import Drinks from './pages/drinks/Drinks';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <>
    <Router>
      <Layout>
        <Routes>
          <Route
            exact path="/"
            element={<Menu/>}
          />
          <Route
            exact path="/burger"
            element={<Burger/>}
          />
          <Route
            exact path="/shawarma"
            element={<Shawarma/>}
          />
          <Route
            exact path="/drinks"
            element={<Drinks/>}
          />
          <Route
            exact path="/login"
            element={<Login/>}
          />
          <Route
            exact path="/signup"
            element={<Signup/>}
          />
        </Routes>
      </Layout>
    </Router>
    </>
  );
}

export default App;
