import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal = ({ isOpen, onClose }: AppointmentModalProps) => {
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSuccess = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative glass max-w-md w-full rounded-2xl p-6 animate-slide-up">
        {!isSuccess ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Appointment Confirmation</h3>
              <button
                onClick={onClose}
                className="glass-button p-2 rounded-full hover:bg-card"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="text-center">
              <p className="text-foreground/80 mb-6">
                Your appointment details have been sent to WhatsApp. 
                Please check your messages to confirm your booking.
              </p>
              
              <button
                onClick={handleSuccess}
                className="bg-gradient-primary px-6 py-3 rounded-full text-primary-foreground hover:shadow-glow transition-all duration-300 w-full"
              >
                Continue to WhatsApp
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-pulse-glow" />
            <h3 className="text-2xl font-bold text-green-500 mb-2">Success!</h3>
            <p className="text-foreground/80">
              Your appointment request has been submitted successfully. 
              We'll contact you shortly to confirm your booking.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};