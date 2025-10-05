import { Heart, CreditCard, Smartphone, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Give = () => {
  return (
    <section id="give" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center">
              <Heart className="text-primary-foreground" size={40} />
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Give With Joy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your generous giving helps us spread the love of Christ, support our community, and advance God's kingdom.
            </p>
          </div>

          <Card className="p-8 shadow-warm mb-8">
            <h3 className="font-heading font-semibold text-2xl mb-6 text-center">
              Ways to Give
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                  <Smartphone className="text-primary" size={28} />
                </div>
                <h4 className="font-semibold mb-2">GCash</h4>
                <p className="text-sm text-muted-foreground">
                  Scan QR code or send to:
                  <br />
                  <span className="font-mono">0912-345-6789</span>
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                  <Building2 className="text-primary" size={28} />
                </div>
                <h4 className="font-semibold mb-2">Bank Transfer</h4>
                <p className="text-sm text-muted-foreground">
                  Account details provided upon request
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                  <CreditCard className="text-primary" size={28} />
                </div>
                <h4 className="font-semibold mb-2">In Person</h4>
                <p className="text-sm text-muted-foreground">
                  Give during Sunday service or at the church office
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6 mb-6">
              <h4 className="font-semibold mb-2">Current Campaign: Building Fund</h4>
              <div className="w-full bg-background rounded-full h-4 mb-2 overflow-hidden">
                <div className="gradient-primary h-full rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-sm text-muted-foreground">₱650,000 raised of ₱1,000,000 goal</p>
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg">
                Give Now
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Your giving is tax-deductible. MAGI is a registered non-profit organization.
              </p>
            </div>
          </Card>

          <div className="text-center">
            <p className="text-muted-foreground italic">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Give;
