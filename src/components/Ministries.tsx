import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import childrenMinistry from "@/assets/children-ministry.jpg";
import youthMinistry from "@/assets/youth-ministry.jpg";
import outreachMinistry from "@/assets/outreach-ministry.jpg";
import prayerHands from "@/assets/prayer-hands.jpg";
import { Link } from "react-router-dom";
import { title } from "process";

const ministries = [
  {
    title: "Children's Ministry",
    description: "Nurturing young hearts to know and love Jesus through engaging activities, Bible stories, and worship.",
    image: childrenMinistry,
    link: "/ChildrensMinistry"
  },
  {
    title: "Youth Ministry",
    description: "Empowering the next generation through contemporary worship, biblical teaching, and authentic community.",
    image: youthMinistry,
  },
  {
    title: "Community Outreach",
    description: "Serving our community with compassion through food programs, health initiatives, and family support.",
    image: outreachMinistry,
  },
  {
    title: "Prayer & Worship",
    description: "Encountering God's presence through powerful worship, intercessory prayer, and spiritual growth.",
    image: prayerHands,
  },
  {
    title: "Operation Home Based (OHB)",
    description: "Helping the less fortunate through our outreach programs and community services.",
    image: prayerHands,
  }
];

const Ministries = () => {
  return (
    <section id="ministries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Our Ministries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your place to serve, grow, and connect with others in meaningful ways.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ministries.map((ministry, index) => (
              <Card key={index} className="overflow-hidden shadow-warm hover:shadow-glow transition-smooth group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={ministry.image}
                    alt={ministry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 font-heading font-bold text-2xl text-primary-foreground">
                    {ministry.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {ministry.description}
                  </p>
                  <div className="flex justify-center">
                  <Button variant="outline">
                    <Link to={ministry.link}>
                    Check it out!
                    </Link>
                  </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Explore All Ministries
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ministries;
