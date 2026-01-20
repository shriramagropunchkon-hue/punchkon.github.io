import { Button } from "@/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1627842822558-c1f15aef9838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGZpZWxkJTIwZ29sZGVufGVufDF8fHx8MTc2ODgzMzU5MXww&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.img
          src={"https://via.placeholder.com/720x240.png?text=Punchkon"}
          alt="Punchkon"
          className="h-40 md:h-56 lg:h-72 mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        />
        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          High-quality, hygienically processed, nutritious atta ensuring purity, 
          freshness, and healthy daily meals for homes and businesses.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
              onClick={() => scrollToSection("products")}
            >
              Explore Our Products
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-amber-900 px-8 py-6 text-lg"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </div>
  );
}