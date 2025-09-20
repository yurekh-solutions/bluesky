import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Bangalore',
      rating: 5,
      text: 'Dr. Manik Chowdhury is an exceptional dentist! I was terrified of root canal treatment, but he made the entire process completely painless. His gentle approach and modern techniques are truly impressive. Highly recommended!',
      treatment: 'Root Canal Treatment',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Arekere',
      rating: 5,
      text: 'Best dental clinic in Bangalore! The staff is professional, the clinic is spotlessly clean, and Dr. Manik explains everything clearly. My dental implant procedure was smooth and successful.',
      treatment: 'Dental Implant',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Anitha Reddy',
      location: 'Bannerghatta Road',
      rating: 5,
      text: 'Amazing experience at Blue Sky Dental Care! Dr. Manik transformed my smile with teeth whitening and veneers. The results exceeded my expectations. The clinic has a very calming atmosphere.',
      treatment: 'Smile Makeover',
      date: '3 weeks ago'
    },
    {
      id: 4,
      name: 'Suresh Babu',
      location: 'Hulimavu',
      rating: 5,
      text: 'I have been visiting Dr. Manik for my family\'s dental needs for 2 years. He is patient with children and adults alike. Emergency services are excellent - they saved my tooth during a weekend emergency.',
      treatment: 'Family Dentistry',
      date: '1 week ago'
    },
    {
      id: 5,
      name: 'Meera Iyer',
      location: 'JP Nagar',
      rating: 5,
      text: 'The orthodontic treatment with clear aligners was perfect! Dr. Manik guided me through the entire process. The clinic\'s technology and hygiene standards are top-notch. Worth every penny!',
      treatment: 'Clear Aligners',
      date: '2 months ago'
    },
    {
      id: 6,
      name: 'Vikram Singh',
      location: 'Gottigere',
      rating: 5,
      text: 'Professional service and excellent results! The crown and bridge work done by Dr. Manik looks natural and feels comfortable. The clinic timing is convenient for working professionals.',
      treatment: 'Crowns & Bridges',
      date: '3 weeks ago'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-sky">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied patients have to say about their experience at Blue Sky Dental Care.
          </p>
          
          {/* Rating Overview */}
          <div className="border border-gray-700 bg-transparent p-6 rounded-xl inline-block mt-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-foreground">4.9</span>
            </div>
            <p className="text-muted-foreground">Based on 2669+ patient reviews</p>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="border border-gray-700 bg-transparent p-6 rounded-xl relative hover-glow interactive-card"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-4 h-4 ${star <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Patient Info */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{testimonial.location}</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                    {testimonial.treatment}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="border border-gray-700 bg-transparent p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book your appointment with Dr. Manik Chowdhury and experience world-class dental care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                Book Consultation
              </button>
              <button
                onClick={() => window.open('tel:+918660335356')}
                className="border border-primary text-primary bg-transparent px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                Call Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
