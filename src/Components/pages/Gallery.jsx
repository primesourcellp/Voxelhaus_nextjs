"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NextLink from 'next/link';
import { X, Eye, Grid, List, Sparkles, Zap } from 'lucide-react';

const image3d1 = '/assets/3d_image_1.jpg';
const image3d2 = '/assets/3d-image_2.jpg';
const image3d3 = '/assets/3d_image_3.jpg';
const image3d4 = '/assets/3d_image_4.jpg';
const image = '/assets/Image.jpg';
const image3 = '/assets/Image3.jpg';
const image4 = '/assets/Image4.jpg';
const galleryWebp = '/assets/gallery.webp';
const gallery2 = '/assets/gallery2.jpg';
const gallery3 = '/assets/gallery3.jpg';
const photoEditing = '/assets/photoedit.jpg';
const beforeImage = '/assets/before.jpg';
const afterImage = '/assets/after.jpg';

const Link = ({ to, href, ...props }) => {
  const targetHref = href ?? to ?? '#';
  return <NextLink href={targetHref} {...props} />;
};


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const galleryItems = [
    {
      id: 1,
      image: image3d1,
      title: "3D Visualization - Modern Living Room",
      category: "3d-visualization",
      description: "Stunning 3D rendering of a contemporary living space with modern furniture and lighting.",
      service: "3D Visualization Services"
    },
    {
      id: 2,
      image: image3d2,
      title: "3D Floor Plan - Residential Layout",
      category: "floor-plans",
      description: "Detailed 3D floor plan showing room layout and spatial relationships.",
      service: "3D Floor Plan Redraw Services"
    },
    {
      id: 3,
      image: image3d3,
      title: "3D Exterior Visualization",
      category: "3d-visualization",
      description: "Professional 3D exterior rendering showcasing architectural details and landscaping.",
      service: "3D Visualization Services"
    },
    {
      id: 4,
      image: image3d4,
      title: "3D Interior Design",
      category: "3d-visualization",
      description: "Immersive 3D interior visualization with realistic textures and lighting.",
      service: "3D Visualization Services"
    },
    {
      id: 5,
      image: image,
      title: "2D Floor Plan - Black & White",
      category: "floor-plans",
      description: "Detailed 2D floor plan showing room layout and spatial relationships.",
      service: "2D Floor Plan Redraw Services"
    },
    {
      id: 6,
      image: galleryWebp,
      title: "Virtual Staging - Dining Room",
      category: "virtual-staging",
      description: "Digitally furnished living space creating an inviting atmosphere for potential buyers.",
      service: "Visual Staging Services"
    },
    {
      id: 7,
      image: image3,
      title: "2D Floor Plan - Color & Site Plan",
      category: "floor-plans",
      description: "Detailed 2D floor plan showing room layout and spatial relationships.",
      service: "2D Floor Plan Redraw Services"
    },
    {
      id: 8,
      image: image4,
      title: "2D Floor Plan - Textured & Site Plan",
      category: "floor-plans",
      description: "Detailed 2D floor plan showing room layout and spatial relationships.",
      service: "2D Floor Plan Redraw Services"
    },
    {
      id: 9,
      image: gallery2,
      title: "Virtual Staging - Bed Room",
      category: "virtual-staging",
      description: "Digitally furnished living space creating an inviting atmosphere for potential buyers.",
      service: "Visual Staging Services"
    },
    {
      id: 10,
      image: gallery3,
      title: "Virtual Staging - Living Room",
      category: "virtual-staging",
      description: "Digitally furnished living space creating an inviting atmosphere for potential buyers.",
      service: "Visual Staging Services"
    },
    {
      id: 11,
      image: photoEditing,
      beforeImage: beforeImage,
      afterImage: afterImage,
      title: "Photo Editing - Enhanced Property Image",
      category: "photo-editing",
      description: "Professional photo editing and enhancement services to make your property listings stand out.",
      service: "Photo Editing Services"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: '3d-visualization', name: '3D Visualization' },
    { id: 'floor-plans', name: 'Floor Plans' },
    { id: 'photo-editing', name: 'Photo Editing' },
    { id: 'virtual-staging', name: 'Virtual Staging' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white ">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-[#0099FF]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-10 w-16 h-16 bg-[#00F0FF]/20 rounded-full blur-lg"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-3 mb-8 px-6 py-3 bg-[#00F0FF]/10 backdrop-blur-sm border border-[#00F0FF]/30 rounded-full"
            >
              <motion.div 
                className="w-2 h-2 bg-[#00F0FF] rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-[#00F0FF] font-semibold text-lg tracking-wider uppercase">Our Portfolio</span>
              <motion.div 
                className="w-2 h-2 bg-[#00F0FF] rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold text-white mb-8"
            >
              Project{' '}
              <motion.span 
                className="bg-gradient-to-r from-[#00F0FF] via-[#0099FF] to-[#00F0FF] bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Gallery
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto"
            >
              Explore our portfolio of professional real estate visualizations, from stunning 3D renderings to enhanced property photos that help sell properties faster.
            </motion.p>

            {/* Floating Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex justify-center space-x-8"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles size={32} className="text-[#00F0FF]/60" />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Zap size={32} className="text-[#0099FF]/60" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter and View Controls */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-8 px-6 md:px-12 bg-gray-800"
      >
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(0,240,255,0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-[#00F0FF] text-black shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>

            {/* View Mode Toggle */}
            <motion.div 
              className="flex items-center space-x-2 bg-gray-700 rounded-xl p-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={() => setViewMode('grid')}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 5
                }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' ? 'bg-[#00F0FF] text-black' : 'text-gray-300 hover:text-white'
                }`}
              >
                <Grid size={20} />
              </motion.button>
              <motion.button
                onClick={() => setViewMode('list')}
                whileHover={{ 
                  scale: 1.05,
                  rotate: -5
                }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list' ? 'bg-[#00F0FF] text-black' : 'text-gray-300 hover:text-white'
                }`}
              >
                <List size={20} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <section className="py-12 px-6 md:px-12">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${filter}-${viewMode}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`${
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
                  : 'space-y-8'
              }`}
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -15,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className={`group cursor-pointer ${
                    viewMode === 'list' ? 'flex items-center space-x-6' : 
                    viewMode === 'grid' && item.id === 11 ? 'w-full mb-4 md:mb-0 md:col-span-2 lg:col-span-3 xl:col-span-4' : ''
                  }`}
                  onClick={() => openModal(item)}
                >
                  {item.id === 11 && viewMode === 'grid' ? (
                    <>
                      {/* Mobile: Before/After Side by Side */}
                      <div className="md:hidden w-full">
                        <div className="flex gap-2 mb-2">
                          <div className="relative overflow-hidden rounded-2xl w-1/2 h-[280px] sm:h-[320px]">
                            <img
                              src={item.beforeImage}
                              alt="Before"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-white text-xs font-semibold">
                              Before
                            </div>
                          </div>
                          <div className="relative overflow-hidden rounded-2xl w-1/2 h-[280px] sm:h-[320px]">
                            <img
                              src={item.afterImage}
                              alt="After"
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-2 right-2 px-2 py-1 bg-[#00F0FF]/80 backdrop-blur-sm rounded text-black text-xs font-semibold">
                              After
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Desktop: Single Wide Image */}
                      <motion.div 
                        className="hidden md:block relative overflow-hidden rounded-2xl w-full aspect-[2/1] lg:aspect-[3/1]"
                        whileHover={{ 
                          boxShadow: "0 20px 40px rgba(0,240,255,0.3)"
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="w-16 h-16 bg-[#00F0FF]/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                          >
                            <Eye size={32} className="text-white" />
                          </motion.div>
                        </motion.div>
                        
                        {/* Floating Elements */}
                        <motion.div
                          className="absolute top-4 right-4 w-3 h-3 bg-[#00F0FF] rounded-full opacity-0 group-hover:opacity-100"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0, 0.8, 0]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </>
                  ) : (
                    <motion.div 
                      className={`relative overflow-hidden rounded-2xl ${
                        viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'aspect-square'
                      }`}
                      whileHover={{ 
                        boxShadow: "0 20px 40px rgba(0,240,255,0.3)"
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="w-16 h-16 bg-[#00F0FF]/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                        >
                          <Eye size={32} className="text-white" />
                        </motion.div>
                      </motion.div>
                      
                      {/* Floating Elements */}
                      <motion.div
                        className="absolute top-4 right-4 w-3 h-3 bg-[#00F0FF] rounded-full opacity-0 group-hover:opacity-100"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0, 0.8, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  )}
                  
                  <motion.div 
                    className={`${viewMode === 'list' ? 'flex-1' : 'mt-4'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.h3 
                      className="text-xl font-bold text-white mb-2 group-hover:text-[#00F0FF] transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-400 text-sm mb-2"
                      whileHover={{ x: 5 }}
                    >
                      {item.service}
                    </motion.p>
                    <motion.p 
                      className="text-gray-300 text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SEO Content Section - Redesigned */}
      <section className="py-20 px-6 md:px-12 bg-gray-800/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            {/* Main Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-[#00F0FF] via-[#0099FF] to-[#00F0FF] bg-clip-text text-transparent">
                  Voxelhaus Consultancy Gallery
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Where professional real estate visualization meets creative excellence. Our extensive portfolio showcases the transformative power of high-quality visual content in property marketing.
              </p>
            </motion.div>

            {/* Services Showcase Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-gradient-to-br from-[#00F0FF]/10 via-gray-800/50 to-gray-800/50 backdrop-blur-xl border border-[#00F0FF]/30 rounded-3xl p-8 hover:border-[#00F0FF]/60 hover:shadow-[0_0_40px_rgba(0,240,255,0.2)] transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#00F0FF]/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#00F0FF]/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#00F0FF]/30 transition-all duration-300">
                      <Sparkles className="text-[#00F0FF]" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Our Services Showcase</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Each project represents our commitment to excellence. From <strong className="text-white">3D architectural renderings</strong> that bring floor plans to life to <strong className="text-white">virtual staging services</strong> that transform empty spaces into inviting homes.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-gradient-to-br from-[#0099FF]/10 via-gray-800/50 to-gray-800/50 backdrop-blur-xl border border-[#0099FF]/30 rounded-3xl p-8 hover:border-[#0099FF]/60 hover:shadow-[0_0_40px_rgba(0,153,255,0.2)] transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#0099FF]/10 rounded-full blur-3xl -ml-16 -mt-16 group-hover:bg-[#0099FF]/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#0099FF]/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-[#0099FF]/30 transition-all duration-300">
                      <Zap className="text-[#0099FF]" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Photo Editing Expertise</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Our <strong className="text-white">photo editing expertise</strong> includes object removal, color correction, and sky replacement, ensuring every property image stands out in competitive markets.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* What You'll Find Section */}
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
                  <h3 className="text-3xl font-bold text-white">What You'll Find in Our Gallery</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "2D and 3D floor plans with detailed layouts",
                    "Interior and exterior 3D visualizations",
                    "Virtual staging transformations",
                    "Professional photo editing examples"
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

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Browse through our categories to see real examples of how professional visualization services can enhance property listings, increase buyer engagement, and accelerate sales. Each image tells a story of attention to detail, technical skill, and creative vision—the hallmarks of our work.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="relative max-w-5xl max-h-[90vh] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={closeModal}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 90,
                  backgroundColor: "rgba(0,240,255,0.2)"
                }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
              >
                <X size={24} className="text-white" />
              </motion.button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <motion.div 
                  className="relative overflow-hidden"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Animated Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-8 left-8 w-4 h-4 bg-[#00F0FF] rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-8 right-8 w-3 h-3 bg-[#0099FF] rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </motion.div>
                
                <motion.div 
                  className="p-8 flex flex-col justify-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.h2 
                    className="text-3xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {selectedImage.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-[#00F0FF] font-semibold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {selectedImage.service}
                  </motion.p>
                  
                  <motion.p 
                    className="text-gray-300 leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    {selectedImage.description}
                  </motion.p>
                  
                  {/* Animated Decorative Line */}
                  <motion.div
                    className="w-20 h-1 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] rounded-full mb-6"
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                  
                  {/* Project Stats */}
                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <div className="text-center p-4 bg-gray-700/50 rounded-xl">
                      <div className="text-2xl font-bold text-[#00F0FF]">100%</div>
                      <div className="text-sm text-gray-400">Quality</div>
                    </div>
                    <div className="text-center p-4 bg-gray-700/50 rounded-xl">
                      <div className="text-2xl font-bold text-[#00F0FF]">24hrs</div>
                      <div className="text-sm text-gray-400">Delivery</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Something{' '}
              <span className="text-[#00F0FF]">Amazing?</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Let us transform your property listings with our professional visualization services. 
              From 3D renderings to photo enhancements, we help you sell properties faster.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#0099FF] text-black font-semibold rounded-xl shadow-lg hover:shadow-[0px_0px_30px_5px_rgba(0,240,255,0.3)] transition-all duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Get Started Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;