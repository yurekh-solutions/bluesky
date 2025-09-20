import { Phone, MessageCircle, Calendar } from 'lucide-react';

export const FloatingButtons = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/918660335356', '_blank');
  };

  const handleCall = () => {
    window.open('tel:+918660335356', '_self');
  };

  const scrollToAppointment = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="floating-button bottom-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-green-500/80 text-green-500 hover:text-white transition-all"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </button>

      {/* Call Button */}
      <button
        onClick={handleCall}
        className="floating-button bottom-24 right-6 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-primary/80 text-primary hover:text-white transition-all"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </button>

      {/* Appointment Button */}
      <button
        onClick={scrollToAppointment}
        className="floating-button bottom-6 left-6 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-accent/80 text-accent hover:text-white transition-all"
        aria-label="Book Appointment"
      >
        <Calendar size={24} />
      </button>
    </>
  );
};
