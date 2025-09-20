import { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import logo from '../assets/logo.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-card-border">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden lg:flex items-center justify-between py-2 text-sm border-b border-card-border">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>Arekere Gate, Bengaluru</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              <span>Mon-Sun: 4:30 PM - 10:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-primary" />
            <span className="font-semibold">086603 35356</span>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Blue Sky Dental Care" className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-bold text-primary">Blue Sky</h1>
              <p className="text-sm text-foreground/70">Dental Care</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="glass-button px-6 py-2 rounded-full text-primary border border-primary hover:bg-primary hover:text-primary-foreground">
              Call Now
            </button>
            <button 
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-primary px-6 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden glass-button p-2 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden rounded-lg mb-4 p-4 animate-slide-up"
               style={{
                 backdropFilter: 'blur(16px)',
                 backgroundColor: 'rgba(15, 23, 42, 0.95)', // dark navy / slate background
                 border: '1px solid rgba(255, 255, 255, 0.1)'
               }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-primary transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-card-border">
                <button className="glass-button px-4 py-2 rounded-full text-white border border-white/30 hover:bg-white/10">
                  Call Now
                </button>
                <button 
                  onClick={() => {
                    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 rounded-full text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
