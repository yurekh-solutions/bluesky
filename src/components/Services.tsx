import { 
  Stethoscope, Shield, Zap, Heart, Sparkles, Braces, ShieldCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

export const Services = () => {
  const serviceCategories = [
    {
      title: "General Dentistry",
      icon: Stethoscope,
      services: [
        "Diagnosis & X-Ray",
        "Emergency Dentistry", 
        "Cleaning and Polishing",
        "Tooth Extractions",
        "Wisdom Tooth Removal"
      ]
    },
    {
      title: "Restorative Treatments",
      icon: Shield,
      services: [
        "Root Canal",
        "Cosmetic Fillings",
        "Crowns & Bridges", 
        "Implants",
        "Partial & Full Dentures",
        "Full Mouth Rehabilitation"
      ]
    },
    {
      title: "Cosmetic Dentistry", 
      icon: Sparkles,
      services: [
        "Laminates",
        "Veneers",
        "Teeth Whitening",
        "Smile Designing/Smile Makeover"
      ]
    },
    {
      title: "Preventive Care",
      icon: ShieldCheck,
      services: [
        "Gum Disease Treatments",
        "Kids Dentistry"
      ]
    },
    {
      title: "Orthodontics",
      icon: Braces,
      services: [
        "Orthodontic braces",
        "Aligners", 
        "Mouth Guards"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "State-of-the-art equipment and latest dental techniques"
    },
    {
      icon: Heart,
      title: "Gentle Care", 
      description: "Painless treatments with patient comfort as our priority"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Strict sterilization protocols and hygiene standards"
    }
  ];

  // Reusable glass card style
  const glassStyle = {
    backdropFilter: 'blur(16px)',
    backgroundColor: 'hsla(0, 0%, 100%, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '1rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease',
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Your Path to a Healthier Smile Starts Here. From Preventive Care to Advanced Treatments – We Offer Everything You Need
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {serviceCategories.map((category) => (
            <motion.div
              key={category.title}
              style={glassStyle}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'hsla(0,0%,100%,0.08)', 
                boxShadow: '0 12px 28px rgba(0,0,0,0.35)' 
              }}
              whileTap={{ 
                scale: 0.97, 
                backgroundColor: 'hsla(0,0%,100%,0.03)',
                boxShadow: '0 6px 15px rgba(0,0,0,0.2)'
              }}
              className="p-8 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <div style={{...glassStyle, padding: '1rem', borderRadius: '9999px'}} className="flex items-center justify-center">
                  <category.icon size={24} className="text-primary"/>
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.services.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-white/80">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Why Choose{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Blue Sky Dental Care?</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => (
            <motion.div
              key={item.title}
              style={glassStyle}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'hsla(0,0%,100%,0.08)', 
                boxShadow: '0 12px 28px rgba(0,0,0,0.35)' 
              }}
              whileTap={{ 
                scale: 0.97, 
                backgroundColor: 'hsla(0,0%,100%,0.03)',
                boxShadow: '0 6px 15px rgba(0,0,0,0.2)'
              }}
              className="text-center p-8 cursor-pointer"
            >
              <div style={{...glassStyle, padding: '1.5rem', borderRadius: '9999px'}} className="w-fit mx-auto mb-6 flex items-center justify-center">
                <item.icon size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
              <p className="text-white/80">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <motion.div
            style={glassStyle}
            whileHover={{ 
              scale: 1.03, 
              backgroundColor: 'hsla(0,0%,100%,0.08)', 
              boxShadow: '0 12px 28px rgba(0,0,0,0.35)' 
            }}
            whileTap={{ 
              scale: 0.97, 
              backgroundColor: 'hsla(0,0%,100%,0.03)',
              boxShadow: '0 6px 15px rgba(0,0,0,0.2)'
            }}
            className="p-8 rounded-2xl max-w-2xl mx-auto cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Get Started?</h3>
            <p className="text-white/80 mb-6">
              Schedule your consultation with Dr. Satish Kumar and discover the difference expert dental care makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-primary px-6 py-3 rounded-full font-semibold text-primary-foreground hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                Book Consultation
              </button>
              <button 
                onClick={() => window.open('tel:+918660335356', '_self')}
                style={glassStyle}
                className="px-6 py-3 rounded-full hover:shadow-glow hover:scale-105 transition-all duration-300 font-semibold border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Call Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
