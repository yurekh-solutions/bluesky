import { CheckCircle, Microscope, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import doctor from '../assets/doctor.png';
import clinic from '../assets/clinic.png';

export const About = () => {
  // Reusable glass style
  const glassCardStyle = {
    backdropFilter: 'blur(16px)',
    backgroundColor: 'hsla(0, 0%, 100%, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  };

  const features = [
    {
      icon: Microscope,
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment and latest dental techniques',
    },
    {
      icon: Heart,
      title: 'Gentle Care',
      description: 'Painless treatments with patient comfort as our priority',
    },
    {
      icon: CheckCircle,
      title: 'Safety First',
      description: 'Strict sterilization protocols and hygiene standards',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals providing top-quality care',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Meet Dr. Manik Chowdhury
          </h2>
        </motion.div>

        {/* Doctor Intro */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 p-8 rounded-xl hover:scale-105 transition-transform duration-500"
            style={glassCardStyle}
          >
            <p className="text-lg text-gray-300 mb-4">
              <strong className="text-primary">
                MDS in Conservative Dentistry & Endodontics
              </strong>
            </p>
            <p className="text-base text-gray-400 mb-4 leading-relaxed">
              Dr. Manik Chowdhury is a Dental Surgeon and Implantologist in
              Bannerghatta Road, Bangalore and has an experience of 16 years in
              these fields. He practices at Blue Sky Dental Care in
              Bannerghatta Road, Bangalore. He completed BDS from Dayananda
              Sagar College of Dental Sciences, Bangalore in 2009.
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              He is a member of the Indian Dental Association. Some of the
              services provided by the doctor are: Teeth Whitening,
              Complete/Partial Dentures Fixing, Dental Fillings, Bleeding Gums
              Treatment and Impaction / Impacted Tooth Extraction etc.
            </p>
            <div className="mt-8 text-center lg:text-left">
              <div
                className="p-6 rounded-xl inline-block hover:scale-105 transition-transform duration-500"
                style={glassCardStyle}
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Consultation Fee
                </h3>
                <p className="text-2xl font-bold text-white">₹500</p>
                <p className="text-sm text-gray-400">
                  Initial consultation and examination
                </p>
              </div>
            </div>
          </motion.div>

          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <img
              src={doctor}
              alt="Dr. Manik Chowdhury"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-full shadow-lg border border-white/20 object-cover aspect-square"
            />
          </motion.div>
        </div>

        {/* Clinic + Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-16 mb-16"
        >
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src={clinic}
              alt="Blue Sky Dental Care Clinic"
              className="w-full max-w-lg rounded-xl shadow-lg border border-white/20"
            />
          </div>
          <div
            className="w-full lg:w-1/2 p-8 rounded-xl hover:scale-105 transition-transform duration-500"
            style={glassCardStyle}
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Our Vision
            </h3>
            <p className="text-base text-gray-400 leading-relaxed">
              At Blue Sky Dental Care, our vision is to create a trusted and
              comfortable environment where every patient feels heard and cared
              for. We are dedicated to providing the highest quality dental
              services with a focus on personalized, gentle, and effective
              treatments. We believe in empowering our patients with the
              knowledge to maintain their oral health for a lifetime.
            </p>
          </div>
        </motion.div>

        {/* Expertise + Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="p-8 rounded-xl hover:scale-105 transition-transform duration-500"
            style={glassCardStyle}
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Areas of Expertise
            </h3>
            <ul className="space-y-3">
              {[
                'Expertise in Microscopic Root Canal Treatment',
                'Painless and Minimally Invasive Techniques',
                'Gentle and Reassuring Demeanor',
                'Pain and Anxiety Management',
                'Strong Specialists Team and Referral Network',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="p-8 rounded-xl hover:scale-105 transition-transform duration-500"
            style={glassCardStyle}
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Our Commitment to Excellence
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg hover:scale-105 transition-transform duration-500"
                  style={glassCardStyle}
                >
                  <feature.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-medium text-white mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
