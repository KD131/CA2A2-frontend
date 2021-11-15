import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/nav/NavBar";
import Hero from "./components/Hero";
// PAGES:
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WikipediaPage from "./pages/WikipediaPage";
import DadJokePage from "./pages/DadJokePage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/AdminPage";
import NoMatchPage from "./pages/NoMatchPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import FunStuffPage from "./pages/FunStuffPage";
import { userContext } from "./auth/authContexts";
import useUser from "./auth/useUser";

export default function App() {
  const navigate = useNavigate();
  const [user, setToken] = useUser();

  useEffect(() => {
    navigate("/");
  }, [user]);

  return (
    <Container fluid="sm" className="wrapper">
      <Hero />
      <userContext.Provider value={user}>
        <NavBar />
        <Container className="pageContent pt-3 pb-3" fluid="sm">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wikipedia" element={<WikipediaPage />} />
            <Route path="/dadjokes" element={<DadJokePage />} />
            <Route path="/funstuff" element={<FunStuffPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage setToken={setToken} />} />
            <Route path="/logout" element={<LogoutPage setToken={setToken} />} />
            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        </Container>
      </userContext.Provider>
    </Container>
  );
}
