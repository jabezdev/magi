import { MapPin, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Welcome Home
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're a community of believers passionate about worshiping God, growing in faith, and serving others with love.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center shadow-warm hover:shadow-glow transition-smooth">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                <MapPin className="text-primary-foreground" size={32} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Location</h3>
              <p className="text-muted-foreground">
                Sacop Road, San Pablo
                <br />
                Magalang, Pampanga
                <br />
                Philippines
              </p>
            </Card>

            <Card className="p-6 text-center shadow-warm hover:shadow-glow transition-smooth">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                <Clock className="text-primary-foreground" size={32} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Service Times</h3>
              <p className="text-muted-foreground">
                Sunday Worship: 8:30 AM
                <br />
                Thursday Prayer: 7:00 PM
                <br />
                (Online)
              </p>
            </Card>

            <Card className="p-6 text-center shadow-warm hover:shadow-glow transition-smooth">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                <Users className="text-primary-foreground" size={32} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">First Time?</h3>
              <p className="text-muted-foreground">
                Come as you are! We have a welcoming community ready to greet you. Childcare available.
              </p>
            </Card>
          </div>

          {/* Map Placeholder */}
          <Card className="overflow-hidden shadow-warm">
            <div className="w-full h-96 bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Google Maps Embed Placeholder</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
