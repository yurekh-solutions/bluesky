import { MapPin, Phone, Mail, Clock, Star, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';

export const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Clinic', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative py-20 mt-20">
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="Blue Sky Dental Care" className="w-12 h-12" />
                <div>
                  <h3 className="text-2xl font-bold text-primary">Blue Sky</h3>
                  <p className="text-sm text-foreground/70">Dental Care</p>
                  <p className="text-xs text-foreground/50">Multi-Speciality Clinic</p>
                </div>
              </div>
              
              <p className="text-foreground/80 mb-6 leading-relaxed max-w-md">
                At Blue Sky Dental Care, under the expertise of Dr. Satish Kumar, our welcoming dental team 
                is dedicated to helping you achieve your best smile. We're committed to your oral health with 
                experienced professionals providing top-quality care.
              </p>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-bold">5.0</span>
                <span className="text-sm text-foreground/70">(266 patient stories)</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-foreground/80 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <p className="text-foreground/80">
                      54/55, 3rd Cross Rd, Arakere Gate<br />
                      Omkar Nagar, Arekere<br />
                      Bengaluru, Karnataka 560076
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-primary flex-shrink-0" />
                  <a 
                    href="tel:+918660335356"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    086603 35356
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-primary flex-shrink-0" />
                  <a 
                    href="mailto:blueskydentalcare@gmail.com"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    blueskydentalcare@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <p className="text-foreground/80">
                      Monday - Sunday<br />
                      4:30 PM to 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-16 pt-8 border-t border-card-border">
            <div className="glass p-6 rounded-2xl text-center">
              <h4 className="text-xl font-bold mb-4">24/7 Emergency Dental Care</h4>
              <p className="text-foreground/80 mb-6">
                Dental emergencies can happen anytime. We're here to help you when you need us most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+918660335356"
                  className="bg-gradient-primary px-6 py-3 rounded-full font-semibold text-primary-foreground hover:shadow-glow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  call now: 086603 35356
                </a>
                <a
                  href="https://wa.me/918660335356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button px-6 py-3 rounded-full font-semibold border border-primary text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  24/7 WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-card-border text-center">
            <p className="text-foreground/60 text-sm">
              © 2025 Blue Sky Dental Care. All rights reserved.
            </p>
            <p className="text-foreground/40 font-extrabold text-xs mt-2">
              Developed  By  <a className='font-extrabold' href='https://yurekh.com/'> Yurekh Solutions</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};