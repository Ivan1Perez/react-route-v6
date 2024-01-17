import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import UsPage from "./pages/UsPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";
import UserPage from "./pages/UserPage";
import DashBoard from "./pages/DashBoard";


function App() {
  return (
    <Router>
      <div className="container mt-2">
        {/* <h1>NavBar...</h1>*/}
        <NavBar />
        <hr />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/contacto"
            element={<ContactPage />}
          />
          <Route
            path="/nosotros"
            element={<UsPage />}
          />
          <Route
            path="/nosotros/:id"
            element={<UserPage />}
          />
          <Route
            path="/nosotras"
            element={<Navigate to='/nosotros' />}
          />
          <Route
            path="/dashboard/*"
            element={<DashBoard />}
          >
            <Route
              path='bienvenido'
              element={<h3>¡BIENVENIDO!</h3>}
            />
            <Route
              path='despedida'
              element={<h3>DESPEDIDA!</h3>}
            />
          </Route>
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
