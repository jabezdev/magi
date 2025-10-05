import { useState } from "react";
import { Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Prayer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    request: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Prayer Request Submitted",
      description: "We'll be praying for you. God bless you!",
    });
    setFormData({ name: "", email: "", request: "" });
  };

  return (
    <section className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Prayer Requests
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in the power of prayer. Share your prayer needs with us and our community will stand with you in faith.
            </p>
          </div>

          <Card className="p-8 shadow-warm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name (Optional)
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email (Optional)
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="request" className="block text-sm font-medium mb-2">
                  Prayer Request <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="request"
                  value={formData.request}
                  onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                  placeholder="Share your prayer need..."
                  className="w-full min-h-32"
                  required
                />
              </div>

              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  Your request will be kept confidential and prayed over by our prayer team. If you'd like personal follow-up, please include your contact information.
                </p>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="mr-2" size={20} />
                Submit Prayer Request
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Prayer;
