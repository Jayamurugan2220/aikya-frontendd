import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Flats & Apartments", "Villas & Homes", "Commercial", "Plots"];

const projects = [
  {
    name: "Aikya Eden Park",
    location: "Tambaram, Chennai",
    category: "Flats & Apartments",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
  },
  {
    name: "Aikya Green Meadows",
    location: "Pallavaram, Chennai",
    category: "Villas & Homes",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
  },
  {
    name: "Aikya Business Square",
    location: "T. Nagar, Chennai",
    category: "Commercial",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  },
  {
    name: "Aikya Horizon Towers",
    location: "Velachery, Chennai",
    category: "Flats & Apartments",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop",
  },
  {
    name: "Aikya Lakewood Villas",
    location: "Sholinganallur, Chennai",
    category: "Villas & Homes",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
  },
  {
    name: "Aikya Grand Avenue",
    location: "Porur, Chennai",
    category: "Plots",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
  },
  {
    name: "Aikya Tech Hub",
    location: "OMR, Chennai",
    category: "Commercial",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    name: "Aikya Serenity Heights",
    location: "Medavakkam, Chennai",
    category: "Flats & Apartments",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&h=400&fit=crop",
  },
  {
    name: "Aikya Palm Residency",
    location: "Guduvancheri, Chennai",
    category: "Plots",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=600&h=400&fit=crop",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <Helmet>
        <title>Projects | Aikya Builds Future - Our Portfolio</title>
        <meta
          name="description"
          content="Explore Aikya Builds Future's portfolio of 100+ successfully delivered projects across residential, commercial, and plot developments in Chennai."
        />
      </Helmet>

      <Navbar />
      <main className="pt-24">
        <section className="section-padding bg-navy-gradient">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
                Our Portfolio
              </span>
              <h1 className="mt-4 font-heading text-4xl font-bold md:text-5xl">
                Project <span className="text-gradient-gold">Highlights</span>
              </h1>
            </motion.div>

            {/* Filter tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex flex-wrap justify-center gap-3"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-full px-5 py-2 font-body text-sm font-medium transition-all ${
                    active === cat
                      ? "bg-primary text-primary-foreground glow-gold"
                      : "border border-border bg-card-glass text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* Projects grid */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <motion.div
                    key={project.name}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.95 }}
                    layout
                    className="group overflow-hidden rounded-xl bg-card-glass transition-all hover:glow-gold"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {project.name}
                      </h3>
                      <div className="mt-1 flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        <span className="font-body text-sm">{project.location}</span>
                      </div>
                      <span
                        className={`mt-3 inline-block rounded-full px-3 py-1 font-body text-xs font-semibold ${
                          project.status === "Completed"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
