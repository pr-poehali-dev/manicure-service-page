import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Services from "@/pages/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
