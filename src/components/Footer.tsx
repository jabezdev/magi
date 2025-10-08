import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import MAGILogo from "@/assets/MAGI-Logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-xl">
                    <img src={MAGILogo} alt="MAGI Logo" className="w-10 h-10 object-contain" />
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl">MAGI</h3>
                  <p className="text-sm text-background/70">Magalang Assembly of God Inc.</p>
                </div>
              </div>
              <p className="text-background/70 mb-4">
                A warm, Christ-centered community spreading light and hope in Magalang, Pampanga.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-background/70 hover:text-primary transition-smooth">About Us</a></li>
                <li><a href="#ministries" className="text-background/70 hover:text-primary transition-smooth">Ministries</a></li>
                <li><a href="#events" className="text-background/70 hover:text-primary transition-smooth">Events</a></li>
                <li><a href="#give" className="text-background/70 hover:text-primary transition-smooth">Give</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-background/70">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span className="text-sm">Sacop Road, San Pablo, Magalang, Pampanga</span>
                </li>
                <li className="flex items-center gap-2 text-background/70">
                  <Phone size={18} />
                  <span className="text-sm">(045) 123-4567</span>
                </li>
                <li className="flex items-center gap-2 text-background/70">
                  <Mail size={18} />
                  <span className="text-sm">info@magi.church</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-background/70 text-sm">
              © {new Date().getFullYear()} Magalang Assembly of God Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
