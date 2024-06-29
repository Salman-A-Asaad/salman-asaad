import {
  Navbar,
  Hero,
  About,
  Skills,
  Services,
  Projects,
  Contact,
  Footer,
  PreLoader,
} from "./sections/index";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [showPreLoader, setShowPreLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreLoader(false);
    }, 3500); // Show preloader for 3 seconds
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Function to render content
  const renderContent = () => {
    return (
      <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
        <Toaster />
      </>
    );
  };

  return (
    <div id="home" className="App">
      {/* Show the preloader initially */}
      <AnimatePresence>{showPreLoader && <PreLoader />}</AnimatePresence>

      {/* Show the content with animations once the preloader is hidden */}
      <AnimatePresence>
        {!showPreLoader && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {renderContent()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
