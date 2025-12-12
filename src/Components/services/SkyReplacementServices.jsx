"use client";

import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

const image3d1 = '/assets/sky1.jpg';
const image3d2 = '/assets/3d-image_2.jpg';
const image3d3 = '/assets/sky3.jpg';
const image3d4 = '/assets/sky4.jpg';
const image1 = '/assets/sky5.jpg';
const image2 = '/assets/sky6.jpg';
const image3 = '/assets/sky7.jpg';
const image4 = '/assets/sky8.jpg';
const img1 = '/assets/sky9.jpg';
const img2 = '/assets/sky10.jpg';
const img5 = '/assets/img5.png';

const SkyReplacementServices = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center relative overflow-x-hidden w-full"
        style={{
          backgroundImage: `url(${img5})`,
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
        
        <div className=" relative z-10 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: 1, 
                x: 0
              }}
              transition={{ 
                opacity: { duration: 0.8 },
                x: { duration: 0.8 }
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
                      Sky{' '}
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
                      Replacement Services
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
                    Transform Dull Skies into Eye-Catching Property Images
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-lg text-gray-400 leading-relaxed"
                  >
                    When it comes to real estate photography, the sky can make or break a property's first impression. A cloudy, gray, or overexposed sky can make even the most stunning home appear unappealing.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 md:px-12 bg-gray-800 relative overflow-hidden">
        <div className="relative z-10">
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
                When it comes to real estate photography, the sky can make or break a property's first impression. A cloudy, gray, or overexposed sky can make even the most stunning home appear unappealing. With Voxelhaus Consultancy professional Sky Replacement services, we transform ordinary property photos into visually captivating images by replacing dull skies with vibrant, natural, and realistic ones.
              </p>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Benefits of Our Sky Replacement Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image: image3d1,
                  title: "Instant Visual Appeal",
                  description: "An enhanced sky adds vibrancy and depth to the image, making the property more eye-catching in crowded real estate listings. This immediate impact increases clicks, inquiries, and buyer engagement."
                },
                {
                  image: image3d2,
                  title: "Highlighting Property Features",
                  description: "A perfectly blended sky not only adds appeal but also highlights the architectural details and landscaping of a property. The right backdrop draws attention to the property's unique features instead of letting dull skies distract the viewer."
                },
                {
                  image: image3d3,
                  title: "Boosting Buyer Confidence",
                  description: "High-quality images with natural skies create a sense of trust. Buyers feel they are looking at professional and reliable listings, which makes them more likely to take the next step in the buying journey."
                },
                {
                  image: image3d4,
                  title: "Versatility for Marketing Use",
                  description: "Enhanced skies make your property photos perfect for websites, brochures, flyers, and social media. A polished look across all platforms builds your brand's professional identity."
                },
                {
                  image: image1,
                  title: "Fast Turnaround and Affordable Pricing",
                  description: "At Voxelhaus consultancy, we understand real estate agents and developers often work with tight deadlines. That's why we deliver flawless results quickly, ensuring your listings are ready to go live without delays—all at cost-effective rates."
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

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Our Sky Replacement Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  image: image2,
                  title: "Blue Sky Replacement",
                  description: "We replace overcast or washed-out skies with clear, bright blue skies, instantly lifting the mood of your property photos."
                },
                {
                  image: image3,
                  title: "Sunset and Twilight Skies",
                  description: "For luxury homes or evening listings, we offer dramatic sunset and twilight sky replacements. These add a warm, inviting atmosphere and highlight exterior lighting beautifully."
                },
                {
                  image: image4,
                  title: "Custom Sky Matching",
                  description: "Every property has its own style and character. We select skies that best match the property's mood, location, and season, ensuring natural and realistic results."
                },
                {
                  image: img1,
                  title: "Advanced Blending Techniques",
                  description: "Our expert editors adjust shadows, reflections, and tones to make sure the new sky blends seamlessly with the property and surroundings."
                },
                {
                  image: img2,
                  title: "Consistency Across Portfolios",
                  description: "For real estate agencies and developers managing multiple listings, Voxelhaus consultancy ensures all edited photos maintain a consistent, high-quality look."
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
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
              ))}
            </div>
          </motion.div>

          {/* Sky Replacement SEO Content Section */}
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
                Understanding{' '}
                <span className="bg-gradient-to-r from-[#00F0FF] via-[#0099FF] to-[#00F0FF] bg-clip-text text-transparent">
                  Sky Replacement Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Sky replacement is a specialized photo editing technique that replaces overcast, dull, or poorly exposed skies with more appealing alternatives. This service is particularly valuable for real estate photography, where exterior shots play a crucial role in attracting potential buyers.
              </p>
            </motion.div>

            {/* Professional Techniques Card */}
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
                  <h3 className="text-2xl font-bold text-white">Professional Techniques</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Professional sky replacement involves careful color matching, shadow adjustment, and seamless blending to ensure the new sky looks completely natural and enhances the overall property image. Our editors use industry-leading software for flawless results.
                </p>
              </div>
            </motion.div>

            {/* Impact Section */}
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
                  <h3 className="text-2xl font-bold text-white">The Impact of Professional Sky Replacement</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  A well-executed sky replacement can dramatically improve the visual appeal of property photos. Bright, clear skies create positive associations and make properties feel more inviting. This visual enhancement not only increases online listing engagement but also helps properties sell faster.
                </p>
              </div>
            </motion.div>

            {/* When You Need Section */}
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
                  <h3 className="text-3xl font-bold text-white">When You Need Sky Replacement Services</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Properties photographed during unfavorable weather conditions",
                    "When natural lighting wasn't ideal during photography",
                    "Need consistent, professional images across all listings",
                    "Want to match property style with seasonal variations"
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

            {/* Voxelhaus Services Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gradient-to-br from-gray-800/60 via-gray-800/40 to-gray-800/60 backdrop-blur-xl border border-[#00F0FF]/20 rounded-3xl p-8 md:p-10"
            >
              <div className="relative z-10">
                <p className="text-gray-300 leading-relaxed text-lg">
                  At <strong className="text-white">Voxelhaus Consultancy</strong>, we use industry-leading editing software and techniques to deliver sky replacements that are indistinguishable from natural photography. We offer various sky options including clear blue skies, sunset scenes, and seasonal variations to match your property's style and target market.
                </p>
              </div>
            </motion.div>

            {/* Why Sky Replacement is Important */}
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
                  Why Sky Replacement is Important in Real Estate
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  The background sky is crucial for setting the mood and enhancing the appeal of property photos. A bright, clear blue sky suggests positivity, openness, and warmth—qualities buyers subconsciously associate with a dream home. On the other hand, an overcast or washed-out sky may send the wrong impression and reduce the photo's attractiveness.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Why Choose Voxelhaus Consultancy for Sky Replacement?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Trusted Worldwide",
                  description: "Trusted by real estate agents, photographers, and developers worldwide."
                },
                {
                  title: "Expert Team",
                  description: "Experienced editing team specializing in real estate visuals."
                },
                {
                  title: "Secure & Confidential",
                  description: "Confidential and secure handling of all your property files."
                },
                {
                  title: "Custom Solutions",
                  description: "Customized solutions for single listings or bulk editing."
                },
                {
                  title: "Fast Delivery",
                  description: "Quick delivery with premium quality."
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
              Elevate Your Listings with Perfect Skies
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              A property's sky should inspire buyers, not discourage them. With Voxelhaus consultancy Sky Replacement services, you can turn dull and uninspiring photos into powerful marketing tools that showcase your properties in the best light. Whether you need clear blue skies, dramatic sunsets, or custom edits, we provide professional, creative, and cost-effective solutions that help your listings stand out in today's competitive market.
            </p>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkyReplacementServices;
