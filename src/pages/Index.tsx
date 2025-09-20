import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { AppointmentForm } from '../components/AppointmentForm';
import { Blog } from '../components/Blog';
import { Footer } from '../components/Footer';
import { FloatingButtons } from '../components/FloatingButtons';
import Gallery from '../components/Gallery';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Star Field Background */}
     
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Services Section */}
        <Services />
                  <Gallery />
<Testimonials />
        
        {/* Appointment Section */}
        <AppointmentForm />
        
        {/* Blog Section */}
        <Blog/>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
};

export default Index;
