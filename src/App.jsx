import { useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import CriticalDiagnoses from "./pages/CriticalDiagnoses";
import DiagnosisPage from "./pages/DiagnosisPage";
import Antibiotics from "./pages/Antibiotics";
import AntibioticPage from "./pages/AntibioticPage";
import ContinuousDrips from "./pages/ContinuousDrips";
import DripPage from "./pages/DripPage";
import ReleaseNotice from "./components/ReleaseNotice";
import { ThemeContext, useTheme } from "./hooks/useTheme";
import { getStatus, onPageChange, subscribe } from "./lib/pwa";

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
  const releaseStatus = useSyncExternalStore(subscribe, getStatus);

  // A page change is a natural break: a downloaded release loads there, never
  // under the page being read, and it is also when to look for one
  // (src/lib/pwa.js). HashRouter navigates with pushState, which fires no
  // hashchange, so the router's location is the signal. A layout effect, so
  // the loading cover goes up before the destination paints; keyed on an
  // actual change of path, so mounting (twice, under StrictMode) never counts.
  const lastPath = useRef(location.pathname);
  useLayoutEffect(() => {
    if (lastPath.current === location.pathname) return;
    lastPath.current = location.pathname;
    onPageChange();
  }, [location.pathname]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div style={{ maxWidth: 480, margin: "0 auto", minHeight: "100svh", position: "relative" }}>
        {/* Under the loading cover the page is out of reach of focus and screen readers too. */}
        <div inert={releaseStatus === "applying"}>
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
        <ReleaseNotice />
      </div>
    </ThemeContext.Provider>
  );
}
