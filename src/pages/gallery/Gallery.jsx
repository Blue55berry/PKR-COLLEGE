import React, { useState } from 'react';

const Gallery = () => {
  const categories = [
    "All", "Campus", "Events", "Sports", "Cultural", "Achievements"
  ];
  
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Sample gallery items - in a real application, you'd likely fetch these from an API
  const galleryItems = [
    {
      id: 1,
      title: "College Main Building",
      category: "Campus",
      image: "/images/gallery/campus1.jpg",
      description: "The iconic main building of P.K.R. Arts College"
    },
    {
      id: 2,
      title: "Annual Sports Day 2024",
      category: "Sports",
      image: "/images/gallery/sports1.jpg",
      description: "Athletes competing in the track events"
    },
    {
      id: 3,
      title: "Cultural Festival",
      category: "Cultural",
      image: "/images/gallery/cultural1.jpg",
      description: "Students performing traditional dance"
    },
    {
      id: 4,
      title: "Graduation Ceremony",
      category: "Events",
      image: "/images/gallery/events1.jpg",
      description: "2024 Batch graduation ceremony"
    },
    {
      id: 5,
      title: "Award Ceremony",
      category: "Achievements",
      image: "/images/gallery/achievements1.jpg",
      description: "College receiving NAAC 'A' grade certificate"
    },
    {
      id: 6,
      title: "Science Exhibition",
      category: "Events",
      image: "/images/gallery/events2.jpg",
      description: "Annual science exhibition showcasing student projects"
    },
    {
      id: 7,
      title: "Library Building",
      category: "Campus",
      image: "/images/gallery/campus2.jpg",
      description: "The modern library facility with digital resources"
    },
    {
      id: 8,
      title: "Basketball Tournament",
      category: "Sports",
      image: "/images/gallery/sports2.jpg",
      description: "Inter-college basketball tournament final match"
    },
    {
      id: 9,
      title: "Drama Performance",
      category: "Cultural",
      image: "/images/gallery/cultural2.jpg",
      description: "Students performing Shakespeare's Hamlet"
    },
    {
      id: 10,
      title: "Research Conference",
      category: "Events",
      image: "/images/gallery/events3.jpg",
      description: "International research conference hosted by the college"
    },
    {
      id: 11,
      title: "Academic Toppers",
      category: "Achievements",
      image: "/images/gallery/achievements2.jpg",
      description: "University rank holders from the college"
    },
    {
      id: 12,
      title: "Hostel Building",
      category: "Campus",
      image: "/images/gallery/campus3.jpg",
      description: "The student hostel facility with modern amenities"
    }
  ];
  
  // Filter gallery items based on active category
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // Modal state for viewing images
  const [selectedImage, setSelectedImage] = useState(null);
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Gallery</h1>
      
      <div className="max-w-6xl mx-auto">
        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-4 rounded-full ${
                activeCategory === category 
                ? "bg-slate-600 text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{item.category}</p>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Image Viewer Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden relative">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <div className="h-96 overflow-hidden">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{selectedImage.title}</h3>
                <p className="text-gray-700">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
