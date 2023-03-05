import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Features from "./pages/Features";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Listed from "./pages/Listed";
import Services from "./pages/Services";
import { DataContextProvider } from "./context/DataProvider";
import News from "./pages/News";

function App() {
  return (
    <>
    <DataContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/services" element={<Services />} />
        <Route path="/listed" element={<Listed />} />
        <Route path="/listed/:listedText/" element={<News />}/>
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </DataContextProvider>
    </>
  );
}

export default App;
