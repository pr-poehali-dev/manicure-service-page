import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import PriceList from "@/pages/PriceList";
import Promotions from "@/pages/Promotions";
import Certificates from "@/pages/Certificates";
import Support from "@/pages/Support";
import About from "@/pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/price-list" element={<PriceList />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
