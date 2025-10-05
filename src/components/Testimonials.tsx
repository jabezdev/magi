import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Member since 2018",
    content: "MAGI has been such a blessing to my family. The community here is warm and welcoming, and we've grown so much in our faith journey together.",
  },
  {
    name: "Juan Dela Cruz",
    role: "Youth Ministry Leader",
    content: "I found my purpose and calling at MAGI. The mentorship and opportunities to serve have transformed my life and helped me discover God's plan for me.",
  },
  {
    name: "Grace Reyes",
    role: "Member since 2020",
    content: "During the most difficult season of my life, the prayer support and love from this church family carried me through. I'm forever grateful for this community.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Stories of Faith
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our community members about how God is working in their lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-warm hover:shadow-glow transition-smooth">
                <Quote className="text-primary mb-4" size={32} />
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
