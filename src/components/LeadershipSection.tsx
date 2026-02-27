import { motion } from "framer-motion";
import { Award, Briefcase, TrendingUp, Users } from "lucide-react";

const achievements = [
  { icon: Briefcase, value: "20+", label: "Years in Real Estate & Construction" },
  { icon: TrendingUp, value: "100+", label: "Projects Delivered Successfully" },
  { icon: Award, value: "95%", label: "Client Success Rate" },
  { icon: Users, value: "50+", label: "Strategic Partnerships" },
];

const leaders = [
  {
    initial: "G",
    name: "B. Gopalakrishnan",
    title: "Managing Director",
    bio: "With over 20 years of experience in the construction industry, Mr. Gopalakrishnan has been the driving force behind Aikya Builders' commitment to quality and innovation.",
  },
  {
    initial: "F",
    name: "M B FURHAN SIDDIQ",
    title: "Director",
    bio: "A visionary leader with deep expertise in project management and client relations, ensuring every Aikya project is delivered with precision and excellence.",
  },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="section-padding bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our <span className="text-gray-500 italic">Leadership Team</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto font-body text-gray-600 text-sm md:text-base">
            Guided by visionary leaders dedicated to building exceptional communities
          </p>
        </motion.div>

        {/* Leaders */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl bg-gray-50 p-8 text-center transition-all hover:shadow-xl border border-gray-100"
            >
              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gray-900 text-white">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900">{leader.name}</h3>
              <p className="mt-1 font-body text-sm font-semibold text-gray-600">{leader.title}</p>
              <p className="mt-4 font-body text-sm leading-relaxed text-gray-600">{leader.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 text-center transition-all hover:shadow-lg border border-gray-100"
            >
              <a.icon className="mx-auto mb-3 h-8 w-8 text-gray-900" />
              <div className="font-heading text-2xl md:text-3xl font-bold text-gray-900 italic">{a.value}</div>
              <p className="mt-2 font-body text-xs text-gray-600">{a.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
