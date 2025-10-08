import { Calendar, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "8:30 AM",
    location: "Main Sanctuary",
    description: "Join us for inspiring worship, powerful teaching, and meaningful fellowship.",
  },
  {
    title: "Thursday Night Prayer",
    date: "Every Thursday",
    time: "7:00 PM",
    location: "Online via Facebook Live",
    description: "Connect with our community in prayer and seek God's presence together.",
  },
  {
    title: "Youth Night",
    date: "Every Friday",
    time: "6:00 PM",
    location: "Youth Center",
    description: "High-energy worship, relevant teaching, and fun activities for teens and young adults.",
  },
];

const Events = () => {
  return (
    <section id="events" className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for worship, fellowship, and spiritual growth. Everyone is welcome!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="p-6 shadow-warm hover:shadow-glow transition-smooth">
                <h3 className="font-heading font-bold text-xl mb-4">
                  {event.title}
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={18} className="text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={18} className="text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={18} className="text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  {event.description}
                </p>
                <Button variant="outline" className="w-full">
                  Join
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              View Full Calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
