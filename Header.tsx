import { useState, useEffect } from "react";
import { Button } from "@/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={"https://via.placeholder.com/160x60.png?text=Punchkon"}
              alt="Punchkon Logo"
              className={`cursor-pointer transition-all duration-300 ${
                isScrolled ? "h-12 md:h-16" : "h-14 md:h-20"
              }`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`hover:text-amber-600 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Home
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("about")}
              className={`hover:text-amber-600 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              About
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("products")}
              className={`hover:text-amber-600 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Products
            </motion.button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className={`${
                  isScrolled
                    ? "bg-amber-600 hover:bg-amber-700 text-white"
                    : "bg-white text-amber-700 hover:bg-amber-50"
                }`}
              >
                Contact Us
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                <motion.button
                  whileHover={{ x: 10 }}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-amber-600 transition-colors text-left px-4 py-2"
                >
                  Home
                </motion.button>
                <motion.button
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-amber-600 transition-colors text-left px-4 py-2"
                >
                  About
                </motion.button>
                <motion.button
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection("products")}
                  className="text-gray-700 hover:text-amber-600 transition-colors text-left px-4 py-2"
                >
                  Products
                </motion.button>
                <Button
                  className="bg-amber-600 hover:bg-amber-700 text-white mx-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}