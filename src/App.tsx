import { Routes, Route } from "react-router-dom";
import HomePage from "./components/hero";
import FaqAns from "./components/ui/FaqAns";
import Footer from "./components/ui/footer";

const App = () => {
  return (
    <div id="app-root">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqAns />} />
      </Routes>
        <Footer />
    </div>

    
  );
};

export default App;
