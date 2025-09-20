
import { Star, Users, Award, Clock } from 'lucide-react';
import hero from '../assets/hero.jpeg';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6 animate-slide-up leading-tight text-white">
            Welcome to{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Blue Sky
            </span>
            <br />
            Dental Care
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-slide-up">
            Your path to a healthier, brighter smile starts here. We provide gentle, 
            comprehensive dental care with state-of-the-art technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-12">
  <button
    onClick={() => {
      console.log('Book Appointment clicked');
    }}
    className="w-[250px] px-6 py-2 rounded-full text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
  >
    Book Appointment
  </button>
  <button
    onClick={() => window.open('tel:+918660335356', '_self')}
    className="w-[250px] px-6 py-2 rounded-full text-base sm:text-lg font-semibold border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white hover:shadow-lg transition-all duration-300"
  >
    Call Now →
  </button>
</div>


          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-slide-up">
            {[{
              icon: Users, value: '266+', label: 'Happy Patients'
            }, {
              icon: Award, value: '8+', label: 'Years Experience'
            }, {
              icon: Star, value: '5.0', label: 'Google Rating'
            }, {
              icon: Clock, value: '24/7', label: 'Emergency Care'
            }].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="glass p-6 rounded-xl text-center bg-gradient-to-br from-primary/10 to-background/10 hover:from-primary/20 hover:to-background/20 transition-all duration-500"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2 drop-shadow-lg" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
