import { Header } from "@/Header";
import { Hero } from "@/Hero";
import { Features } from "@/Features";
import { TargetAudience } from "@/TargetAudience";
import { Benefits } from "@/Benefits";
import { CTA } from "@/CTA";
import { Footer } from "@/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <TargetAudience />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
