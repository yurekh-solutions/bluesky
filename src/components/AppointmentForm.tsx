import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageCircle } from 'lucide-react';
import { AppointmentModal } from './AppointmentModal';

export const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    date: '',
    message: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const treatments = [
    'General Checkup',
    'Teeth Cleaning',
    'Root Canal Treatment',
    'Dental Implants',
    'Teeth Whitening',
    'Orthodontic Braces',
    'Crowns & Bridges',
    'Emergency Dental Care'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Appointment Request*
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Treatment: ${formData.treatment}
Preferred Date: ${formData.date}
Message: ${formData.message || 'None'}

Please confirm this appointment.`;

    const whatsappUrl = `https://wa.me/918660335356?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(true);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      treatment: '',
      date: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="appointment" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Smile?</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Book your appointment with Dr. Satish Kumar and experience world-class dental care
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-8 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
                      <MessageCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-foreground/80 text-sm">
                        54/55, 3rd Cross Rd, Arakere Gate<br />
                        Omkar Nagar, Arekere<br />
                        Bengaluru, Karnataka 560076
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-foreground/80">086603 35356</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Open Hours</h4>
                      <p className="text-foreground/80">Monday - Sunday<br />4:30 PM to 10:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <span className="font-bold">5.0</span>
                  </div>
                  <p className="text-sm text-foreground/70">Based on 266+ patient reviews</p>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="p-8 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6">Book Your Appointment</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    <Mail className="inline w-4 h-4 mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Choose Your Treatment *
                  </label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-gray-100 text-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a treatment</option>
                    {treatments.map(treatment => (
                      <option key={treatment} value={treatment} className="bg-gray-100 text-gray-800">
                        {treatment}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Any specific concerns or preferences..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 py-4 rounded-2xl text-lg font-semibold text-white hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
                >
                  Book Appointment
                </button>

                <p className="text-xs text-foreground/60 text-center">
                  By booking an appointment, you agree to our terms of service and privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      /> */}
    </section>
  );
};
