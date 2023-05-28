import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kakao from "./pages/Kakao";
import LoginSuccess from './pages/LoginSuccess';
import API from './pages/API';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Kakao/>} />
        <Route path="/success" element={<LoginSuccess/>} />
        <Route path="/api" element={<API/>} />
      </Routes>
    </Router>
  );
}

export default App;
