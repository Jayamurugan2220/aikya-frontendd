import { motion } from "framer-motion";
import { Clock, Shield, MessageCircle, Heart, Palette, Star } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Rapid Delivery", desc: "We honor timelines with on-time project completion and best-in-class safety standards." },
  { icon: Shield, title: "Proven Track Record", desc: "100+ successful projects with a 95% client success rate and unwavering commitment to excellence." },
  { icon: MessageCircle, title: "Transparent Process", desc: "Open communication at every milestone—keeping you informed throughout your journey." },
  { icon: Heart, title: "Partner-First Mindset", desc: "Your success is our success. We build lasting relationships and co-create value together." },
  { icon: Palette, title: "Innovation-Led Design", desc: "Modern architectural designs combined with sustainable construction techniques." },
  { icon: Star, title: "Trusted by Partners", desc: "50+ strategic partnerships with investors and clients who believe in our vision." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose <span className="text-gray-500 italic">Aikya</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-4 max-w-2xl mx-auto font-body text-gray-600 text-sm md:text-base">
            Experience the difference with our commitment to quality, innovation, and customer satisfaction
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              custom={i}
              className="group rounded-2xl bg-white p-8 transition-all hover:shadow-xl border border-gray-100"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-white transition-colors">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900">{r.title}</h3>
              <p className="mt-2 font-body text-sm text-gray-600 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
