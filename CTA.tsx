import { Button } from "@/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main CTA */}
        <motion.div
          className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-12 md:p-16 text-center mb-16 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Premium Quality?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Punchkon for their 
            daily flour needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-white text-amber-700 hover:bg-amber-50 px-8 py-6 text-lg"
              >
                Get in Touch
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-amber-700 px-8 py-6 text-lg"
              >
                Find a Distributor
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Phone,
              title: "Call Us",
              line1: "+91 XXX XXX XXXX",
              line2: "Mon-Sat, 9AM-6PM"
            },
            {
              icon: Mail,
              title: "Email Us",
              line1: "info@punchkon.com",
              line2: "sales@punchkon.com"
            },
            {
              icon: MapPin,
              title: "Visit Us",
              line1: "Punchkon Mills",
              line2: "India"
            }
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, shadow: "2xl" }}
              >
                <motion.div
                  className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-amber-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-600">{contact.line1}</p>
                <p className="text-gray-600">{contact.line2}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}