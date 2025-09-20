import { Calendar, User, ArrowRight } from 'lucide-react';
import image44 from '../assets/image44.jpeg';
import image88 from '../assets/image88.jpeg';
import image6 from '../assets/image6.jpeg';
import image8 from '../assets/image8.jpeg';
import image1 from '../assets/image1.png';
import image90 from '../assets/image90.jpeg';

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Signs You Need a Root Canal Treatment",
      excerpt: "Understanding the warning signs that indicate you might need root canal treatment can save your tooth and prevent further complications.",
      author: "Dr. Satish Kumar",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Treatment",
      image: image44,
    },
    {
      id: 2,
      title: "Complete Guide to Dental Implants",
      excerpt: "Everything you need to know about dental implants - from procedure to recovery and long-term care tips.",
      author: "Dr. Satish Kumar", 
      date: "January 10, 2025",
      readTime: "8 min read",
      category: "Procedures",
      image: image88,
    },
    {
      id: 3,
      title: "Teeth Whitening: Professional vs At-Home",
      excerpt: "Comparing professional teeth whitening treatments with at-home options to help you make the best choice for your smile.",
      author: "Dr. Satish Kumar",
      date: "January 5, 2025", 
      readTime: "6 min read",
      category: "Cosmetic",
      image: image6,
    },
    {
      id: 4,
      title: "Maintaining Oral Health During Pregnancy",
      excerpt: "Essential dental care tips for expecting mothers to ensure both maternal and baby's health throughout pregnancy.",
      author: "Dr. Satish Kumar",
      date: "December 28, 2024",
      readTime: "7 min read", 
      category: "Health Tips",
      image: image8,
    },
    {
      id: 5,
      title: "Children's Dental Care: A Parent's Guide",
      excerpt: "Comprehensive guide to maintaining your child's oral health from infancy through adolescence.",
      author: "Dr. Satish Kumar",
      date: "December 20, 2024",
      readTime: "9 min read",
      category: "Pediatric",
      image: image1,
    },
    {
      id: 6,
      title: "Understanding Gum Disease Prevention",
      excerpt: "Learn about the causes, symptoms, and prevention strategies for gum disease to maintain healthy gums.",
      author: "Dr. Satish Kumar",
      date: "December 15, 2024",
      readTime: "6 min read",
      category: "Prevention",
      image: image90,
    }
  ];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dental Health{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Stay informed with the latest insights, tips, and expert advice on dental health and oral care
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="rounded-2xl overflow-hidden bg-transparent hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Left */}
              <div className="aspect-video lg:aspect-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Right */}
              <div className="p-8 lg:p-12 bg-transparent">
                <div className="flex items-center gap-4 mb-4">
                  <span className="glass-button px-3 py-1 rounded-full text-sm font-semibold text-primary">
                    Featured
                  </span>
                  <span className="text-primary text-sm">{featuredPost.category}</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-foreground/60 mb-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <button className="bg-gradient-primary px-6 py-3 rounded-full font-semibold text-primary-foreground hover:shadow-glow hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Read Full Article
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article 
              key={post.id}
              className="rounded-2xl overflow-hidden bg-transparent hover:shadow-glow transition-all duration-300 hover:scale-105 group"
            >
              {/* Image Top */}
              <div className="aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 bg-transparent">
                <div className="flex items-center gap-2 mb-3">
                  <span className="glass-button px-2 py-1 rounded-full text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-foreground/60 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <button className="text-primary font-semibold text-sm hover:text-primary-glow transition-colors duration-300 flex items-center gap-2 group">
                  Read More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="glass p-8 rounded-2xl text-center max-w-2xl mx-auto bg-transparent">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-foreground/80 mb-6">
              Subscribe to our newsletter for the latest dental health tips and clinic updates
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 glass-button px-4 py-3 rounded-full border border-card-border focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-gradient-primary px-6 py-3 rounded-full font-semibold text-primary-foreground hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
