import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-church.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Church worship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
            Welcome to
            <br />
            <span className="text-secondary">MAGI</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Magalang Assembly of God Inc.
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            A warm, Christ-centered community spreading light and hope
          </p>

          {/* Service Times */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 text-primary-foreground/90">
            <div className="bg-background/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-primary-foreground/20">
              <p className="text-sm font-medium">Sunday Service</p>
              <p className="text-2xl font-heading font-bold">8:30 AM</p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-primary-foreground/20">
              <p className="text-sm font-medium">Online Prayer Meeting</p>
              <p className="text-2xl font-heading font-bold">Thu 7:00 PM</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button variant="hero" size="lg" className="group">
              Join Us This Sunday
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              I'm New Here
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
