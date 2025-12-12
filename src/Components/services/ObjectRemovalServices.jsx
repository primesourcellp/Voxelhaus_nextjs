"use client";

import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

const furnitureRemoval = '/assets/furniture_removal.png';
const wireRemoval = '/assets/wire_removal.png';
const personalRemoval = '/assets/personal_removal.png';
const outdoorRemoval = '/assets/outdoor_removal.jpeg';
const backgroundCleanup = '/assets/background-cleanup.jpeg';
const natural = '/assets/natural.jpeg';
const onlinePerformance = '/assets/online_performance.jpeg';
const objectTrueValue = '/assets/object.jpeg';
const professional = '/assets/professional.jpeg';
const about1 = '/assets/object1.jpeg';
const img3 = '/assets/img3.png';
const ObjectRemovalServices = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center relative overflow-x-hidden w-full"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        
        {/* Static Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#0099FF]/10 rounded-full blur-3xl"></div>
        
        <div className=" relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -5, 0]
              }}
              transition={{ 
                opacity: { duration: 0.8 },
                x: { duration: 0.8 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="space-y-8 px-4 lg:px-8"
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="block"
                    >
                      Real Estate Object{' '}
                    </motion.span>
                    <motion.span 
                      className="bg-gradient-to-r from-[#00F0FF] to-[#0099FF] bg-clip-text text-transparent block"
                      style={{ textShadow: '0 0 30px rgba(0, 240, 255, 0.5)' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      whileHover={{ 
                        scale: 1.05,
                        textShadow: '0 0 40px rgba(0, 240, 255, 0.8)'
                      }}
                    >
                      Removal Services
                    </motion.span>
                  </motion.h1>
                </div>
                
                <div className="space-y-6">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-xl text-gray-300 leading-relaxed"
                    whileHover={{ 
                      scale: 1.02,
                      color: '#ffffff'
                    }}
                  >
                    Showcasing Properties Without Distractions
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-lg text-gray-400 leading-relaxed"
                  >
                    In real estate, visuals are everything. A cluttered room, distracting wires, personal belongings, or unnecessary objects in a property photo can take the focus away from the actual space.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 md:px-12 bg-gray-800 relative overflow-hidden">
        <div className=" relative z-10">
          {/* Main Content */}
          <div className="max-w-6xl mx-auto space-y-16">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="space-y-8 mb-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                In real estate, visuals are everything. A cluttered room, distracting wires, personal belongings, or unnecessary objects in a property photo can take the focus away from the actual space. That's where Voxelhaus Consultancy Real Estate Object Removal services come in.
              </p>
            </div>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#00F0FF]/10 via-gray-800/40 to-gray-800/40 backdrop-blur-xl border border-[#00F0FF]/30 rounded-2xl p-6 md:p-8 mb-8 hover:border-[#00F0FF]/50 transition-all duration-300 text-center"
            >
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
                <span className="w-2 h-2 bg-[#00F0FF] rounded-full mr-3 animate-pulse"></span>
                Our Real Estate Object Removal Services
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                We offer a wide range of object removal solutions designed to enhance property images and make them more appealing to potential buyers. Our services go beyond simple edits — we ensure every photo looks natural, seamless, and professional.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  image: furnitureRemoval,
                  title: "Clutter & Furniture Removal",
                  description: "Take away unwanted furniture, boxes, or clutter from rooms to highlight clean, spacious interiors."
                },
                {
                  image: wireRemoval,
                  title: "Wire, Cable & Fixture Removal",
                  description: "Eliminate distracting wires, outlets, or unnecessary fixtures that reduce the elegance of property images."
                },
                {
                  image: personalRemoval,
                  title: "Personal Item Removal",
                  description: "Erase personal belongings such as photos, toys, or clothes to create neutral, buyer-friendly spaces."
                },
                {
                  image: outdoorRemoval,
                  title: "Outdoor Object Removal",
                  description: "Remove vehicles, bins, signage, or other distractions from exterior shots to improve curb appeal."
                },
                {
                  image: backgroundCleanup,
                  title: "Background Clean-Up",
                  description: "Ensure every corner of the property image looks neat, polished, and free from visual distractions."
                }
              ].map((service, index) => {
                const directions = [
                  { x: -50, y: 0 }, // Left
                  { x: 50, y: 0 },  // Right
                  { x: 0, y: -30 }, // Top
                  { x: 0, y: 30 },  // Down
                  { x: -30, y: -30 } // Top-left
                ];
                const direction = directions[index % directions.length];
                
                return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: direction.x, y: direction.y }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-[#00F0FF]/50 transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Key Benefits of Choosing Voxelhaus Consultancy
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center">
              Our object removal services are not just about cleaning photos — they're about creating images that sell. Here's how our solutions benefit your real estate marketing:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image: objectTrueValue,
                  title: "Highlight the Property's True Value",
                  description: "By removing distractions, we ensure buyers focus on the property's architecture, design, and potential rather than what's in the background."
                },
                {
                  image: natural,
                  title: "Create Spacious & Neutral Interiors",
                  description: "Clean images help buyers imagine themselves in the space, making the property more inviting and easier to sell."
                },
                {
                  image: onlinePerformance,
                  title: "Improve Online Performance",
                  description: "Polished, distraction-free images perform better on property portals and social media, generating more clicks and inquiries."
                },
                {
                  image:professional,
                  title: "Professional Quality Every Time",
                  description: "Our editing team ensures that every image looks natural, seamless, and industry-standard, giving you confidence in your listings."
                },
                {
                  image: about1,
                  title: "Confidential & Reliable Services",
                  description: "We handle your project files with complete confidentiality, delivering results on time while respecting your privacy."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-[#00F0FF]/50 transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-4">{benefit.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Real Estate Object Removal SEO Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What is{' '}
                <span className="bg-gradient-to-r from-[#00F0FF] via-[#0099FF] to-[#00F0FF] bg-clip-text text-transparent">
                  Real Estate Object Removal?
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Real estate object removal is a professional photo editing service that eliminates unwanted elements from property images. This includes removing furniture, personal items, wires, fixtures, and other distractions that can make a space appear smaller, cluttered, or less appealing to potential buyers.
              </p>
            </motion.div>

            {/* Advanced Editing Techniques Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gradient-to-br from-[#00F0FF]/10 via-gray-800/50 to-gray-800/50 backdrop-blur-xl border border-[#00F0FF]/30 rounded-3xl p-8 md:p-10 hover:border-[#00F0FF]/60 hover:shadow-[0_0_40px_rgba(0,240,255,0.2)] transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00F0FF]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#00F0FF]/20 rounded-xl flex items-center justify-center mr-4">
                    <Sparkles className="text-[#00F0FF]" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Advanced Editing Techniques</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our expert editors use advanced techniques including color matching, shadow reconstruction, and texture blending to ensure the final image looks natural and seamless, as if the objects were never there in the first place.
                </p>
              </div>
            </motion.div>

            {/* Why Professional Object Removal Matters */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gradient-to-br from-[#0099FF]/10 via-gray-800/50 to-gray-800/50 backdrop-blur-xl border border-[#0099FF]/30 rounded-3xl p-8 md:p-10 hover:border-[#0099FF]/60 hover:shadow-[0_0_40px_rgba(0,153,255,0.2)] transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-40 h-40 bg-[#0099FF]/10 rounded-full blur-3xl -ml-20 -mt-20"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#0099FF]/20 rounded-xl flex items-center justify-center mr-4">
                    <Zap className="text-[#0099FF]" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Why Professional Object Removal Matters</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Professional object removal goes beyond simple photo editing. It requires understanding lighting, shadows, textures, and spatial relationships to create realistic results. At <strong className="text-white">Voxelhaus Consultancy</strong>, we ensure every edited photo maintains the property's authentic appearance while highlighting its best features.
                </p>
              </div>
            </motion.div>

            {/* Key Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gradient-to-r from-[#00F0FF]/10 via-gray-800/40 to-[#0099FF]/10 backdrop-blur-xl border border-[#00F0FF]/30 rounded-3xl p-8 md:p-12 hover:border-[#00F0FF]/50 transition-all duration-500"
            >
              {/* Animated Background Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <motion.div
                  className="absolute top-10 left-10 w-20 h-20 bg-[#00F0FF]/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-10 right-10 w-24 h-24 bg-[#0099FF]/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-3 h-3 bg-[#00F0FF] rounded-full mr-4 animate-pulse"></div>
                  <h3 className="text-3xl font-bold text-white">Key Benefits for Your Property Listings</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Helps properties stand out in competitive real estate markets",
                    "Attracts more qualified buyers with cleaner visuals",
                    "Perfect for occupied properties or staging improvements",
                    "Helps buyers visualize themselves in the space"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-[#00F0FF]/20 rounded-lg flex items-center justify-center group-hover:bg-[#00F0FF]/30 transition-all duration-300 mt-1">
                        <span className="text-[#00F0FF] font-bold text-lg">✓</span>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Services Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gradient-to-br from-gray-800/60 via-gray-800/40 to-gray-800/60 backdrop-blur-xl border border-[#00F0FF]/20 rounded-3xl p-8 md:p-10"
            >
              <div className="relative z-10">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Our services are particularly valuable for properties that are currently occupied, need staging improvements, or have minor visual imperfections that can be easily corrected through professional editing. By removing distractions, we help buyers visualize themselves in the space, which is essential for successful property sales.
                </p>
              </div>
            </motion.div>

            {/* Why Real Estate Object Removal is Essential */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gradient-to-r from-[#00F0FF]/10 via-gray-800/40 to-[#0099FF]/10 backdrop-blur-xl border border-[#0099FF]/30 rounded-3xl p-8 md:p-10"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0099FF]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <div className="w-3 h-3 bg-[#0099FF] rounded-full mr-4 animate-pulse"></div>
                  Why Real Estate Object Removal is Essential
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Property buyers are often distracted by items in photos that don't belong. A beautiful living room can look smaller with clutter, and a modern kitchen can lose its charm if appliances, bins, or wires are visible. By removing these distractions, buyers can focus on the layout, design, and features of the home rather than its imperfections.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Who Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Who Can Benefit from Object Removal Services?
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-12 text-center">
              Our services are tailored to meet the needs of various real estate professionals and property owners who want to maximize their marketing impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Real Estate Agents & Brokers",
                  description: "Make listings look more professional and appealing."
                },
                {
                  title: "Property Developers",
                  description: "Present large-scale projects with flawless visuals."
                },
                {
                  title: "Interior Designers",
                  description: "Showcase clean, distraction-free design portfolios."
                },
                {
                  title: "Photographers",
                  description: "Outsource object removal to save time and ensure polished results."
                },
                {
                  title: "Homeowners",
                  description: "Prepare properties for faster and more profitable sales."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-[#00F0FF]/50 transition-all duration-300 hover:bg-gray-800/70"
                >
                  <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Enhance Your Property Marketing Today
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              At Voxelhaus consultancy, we understand that the smallest details make the biggest difference in real estate marketing. Our object removal services are designed to transform ordinary property photos into professional, buyer-focused visuals.
            </p>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ObjectRemovalServices;
