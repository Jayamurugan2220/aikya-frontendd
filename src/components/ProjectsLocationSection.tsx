import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const locations = [
  {
    name: "CHENNAI",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop",
    description: "Explore our premium projects in Chennai",
  },
  {
    name: "TIRUNELVELI",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    description: "Discover quality homes in Tirunelveli",
  },
  {
    name: "CHENGALPATTU",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    description: "Find your dream property in Chengalpattu",
  },
];

const ProjectsLocationSection = () => {
  return (
    <section className="section-padding bg-gray-100 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
            Find your Perfect
          </h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Dream <span className="text-gray-500 italic">Home</span>
          </h3>
          <p className="mt-4 max-w-2xl mx-auto font-body text-gray-600 text-sm md:text-base">
            Explore our projects across prime locations. Select your preferred area and take the first step toward finding your ideal home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-96">
                <img
                  src={location.image}
                  alt={location.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Location name overlay */}
                <div className="absolute top-8 left-0 right-0 text-center">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-wider">
                    {location.name}
                  </h3>
                </div>

                {/* View Project button */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                  <button className="bg-white/95 backdrop-blur-sm px-10 py-4 rounded-full font-body font-semibold text-gray-900 hover:bg-white transition-all flex items-center gap-2 shadow-lg group-hover:shadow-xl">
                    View Project
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsLocationSection;
