import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { useState, useEffect } from "react";
import { cmsAPI } from "@/services/api";

const CSR = () => {
  const [csrData, setCSRData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCSRData = async () => {
      try {
        const response = await cmsAPI.getCSR();
        setCSRData(response.data);
      } catch (error) {
        console.error("Error fetching CSR:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCSRData();
  }, []);

  if (loading || !csrData) {
    return (
      <>
        <Navbar />
        <div className="pt-24 section-padding text-center">Loading...</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>CSR - Building a Better Tomorrow | Aikya Builds Future</title>
        <meta
          name="description"
          content="Aikya Builds Future is committed to creating meaningful impact through CSR initiatives in education, healthcare, environment, and community development."
        />
      </Helmet>

      <Navbar />
      <FloatingContactButtons />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=600&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-block mb-6">
                <div className="bg-gray-900 text-white px-6 py-3 rounded inline-block">
                  <span className="font-heading text-2xl font-bold">aikya</span>
                </div>
                <p className="font-body text-sm text-gray-600 mt-2">Building Future</p>
              </div>
              
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-gray-900">RK</span> <span className="text-gray-500">CSR</span>
              </h1>
              
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building a <span className="text-gray-500">Better Tomorrow</span>
              </h2>
              
              <p className="font-body text-lg text-gray-600 max-w-3xl mx-auto">
                Making a difference through impactful initiatives that uplift communities and drive sustainability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Images Grid Section */}
        <section className="section-padding bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              <div className="rounded-3xl overflow-hidden shadow-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop"
                  alt="Environmental initiative"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
                  alt="Community service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop"
                  alt="Food donation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop"
                  alt="Donation drive"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop"
                  alt="Food distribution"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=400&h=300&fit=crop"
                  alt="Tree planting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg h-64 md:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=300&fit=crop"
                  alt="Flood relief"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop"
                  alt="Disaster relief"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Initiatives Section */}
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-gray-500">Initiatives</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {(csrData.initiatives || []).map((initiative: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                    {initiative.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed">
                    {initiative.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why We Care Section */}
        <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                {csrData.impactTitle || 'Why We Care'}
              </h2>
              <p className="font-body text-gray-300 text-lg leading-relaxed">
                {csrData.impactDescription || 'At Aikya, our commitment extends beyond infrastructure development to creating a meaningful and lasting impact on society.'}
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CSR;
