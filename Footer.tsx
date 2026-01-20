import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={"https://via.placeholder.com/320x80.png?text=Punchkon"}
              alt="Punchkon"
              className="h-20 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-gray-400 mb-4 leading-relaxed">
              Premium wheat flour (atta) offering high-quality, hygienically processed, 
              nutritious atta for homes, hotels, restaurants, and food businesses.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Youtube, label: "YouTube" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "#about" },
                { label: "Products", href: "#products" },
                { label: "Quality Standards", href: "#" },
                { label: "Distributors", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              {[
                { label: "Contact Us", href: "#" },
                { label: "FAQs", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p>&copy; {currentYear} Punchkon. All rights reserved. Crafted with care for your health.</p>
        </motion.div>
      </div>
    </footer>
  );
}