import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ministries from "@/components/Ministries";
import Events from "@/components/Events";
import Give from "@/components/Give";
import Prayer from "@/components/Prayer";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Ministries />
      <Events />
      <Give />
      <Prayer />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
