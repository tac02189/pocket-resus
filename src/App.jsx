import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import CriticalDiagnoses from "./pages/CriticalDiagnoses";
import DiagnosisPage from "./pages/DiagnosisPage";
import Antibiotics from "./pages/Antibiotics";
import AntibioticPage from "./pages/AntibioticPage";
import ContinuousDrips from "./pages/ContinuousDrips";
import DripPage from "./pages/DripPage";
import { ThemeContext, useTheme } from "./hooks/useTheme";

const pageVariants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit:    { opacity: 0, x: -20 },
};

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", stiffness: 340, damping: 30 }}
      style={{ minHeight: "100svh" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  const { theme, toggle } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div style={{ maxWidth: 480, margin: "0 auto", minHeight: "100svh", position: "relative" }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"            element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/critical-dx" element={<PageWrapper><CriticalDiagnoses /></PageWrapper>} />
            <Route path="/dx/:id"      element={<PageWrapper><DiagnosisPage /></PageWrapper>} />
            <Route path="/antibiotics"     element={<PageWrapper><Antibiotics /></PageWrapper>} />
            <Route path="/antibiotics/:id" element={<PageWrapper><AntibioticPage /></PageWrapper>} />
            <Route path="/drips"           element={<PageWrapper><ContinuousDrips /></PageWrapper>} />
            <Route path="/drips/:id"       element={<PageWrapper><DripPage /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
    </ThemeContext.Provider>
  );
}
