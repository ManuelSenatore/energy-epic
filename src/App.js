import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import LoginComponent from "./components/LoginComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom" 
import { Container } from "react-bootstrap";
import HomeComponent from "./components/HomeComponent";


function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
             <Route path="/" element={<LoginComponent />} />
             <Route path="/home" element={<HomeComponent />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
