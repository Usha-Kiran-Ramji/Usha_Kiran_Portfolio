// File: src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WorkExperience from "./components/work/WorkExperience"; // ✅ Correct path
import ContactPage from "./pages/ContactPage"; // Optional separate page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/experience" element={<WorkExperience />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
