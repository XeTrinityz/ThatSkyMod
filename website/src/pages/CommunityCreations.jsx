import React, { useState, useEffect } from 'react';
import { Search, Filter, Download, Star, User } from 'lucide-react';
import GradientCustomizer from '../components/GradientCustomizer';
import CustomButtons from '../components/CustomButtons';

const CommunityGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState([]);

  // Gallery Items
  const galleryItems = [
    {
      id: 1,
      title: "Valley of Triumph - Sunset",
      author: "XeTrinityz",
      category: "locations",
      description: "An OOB location in Valley of Triumph with a sunset view",
      previewImage: "VoT_Sunset.png",
      downloadUrl: "resources/Valley of Triumph - Sunset.json",
      tags: ["location"]
    },
    {
      id: 2,
      title: "Russian Translation",
      author: "k0ra",
      category: "translations",
      description: "Complete Russian translation for all mod features",
      previewImage: "Translation.png",
      downloadUrl: "resources/Russian.json",
      tags: ["translation", "russian"]
    },
    {
      id: 3,
      title: "Cherry Theme",
      author: "XeTrinityz",
      category: "themes",
      description: "A cherry colored theme",
      previewImage: "Theme_Cherry.png",
      downloadUrl: "resources/Theme_Cherry.json",
      tags: ["theme"]
    },
    {
      id: 4,
      title: "Vietnamese Translation",
      author: "Havier",
      category: "translations",
      description: "Complete Vietnamese translation for all mod features",
      previewImage: "Translation.png",
      downloadUrl: "resources/Vietnamese.json",
      tags: ["translation", "vietnamese"]
    },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'locations', name: 'Locations' },
    { id: 'translations', name: 'Translations' },
    { id: 'themes', name: 'Themes' }
  ];

  useEffect(() => {
    const filtered = galleryItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredItems(filtered);
  }, [searchTerm, selectedCategory]);

  const handleDownload = (downloadUrl) => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = downloadUrl.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-blue-950 via-purple-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Community Creations
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore and download community-created content for That Sky Mod
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="relative mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-[1px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
                <div className="relative bg-gray-900 rounded-xl">
                  <input
                    type="text"
                    placeholder="Search creations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent text-white px-12 py-4 focus:outline-none"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <button
                    onClick={() => setFilterOpen(!filterOpen)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Filter className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>

            <div className={`mt-4 flex flex-wrap gap-2 justify-center transition-all duration-300 ${
              filterOpen ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
            }`}>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="transition-all duration-500 ease-in-out transform"
              style={{
                opacity: 1,
                transform: 'scale(1)',
              }}
            >
              <div className="group h-full">
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-[1px] overflow-hidden transition-all duration-300 hover:scale-105 h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:opacity-100 opacity-0 transition-opacity" />
                  <div className="relative bg-gray-900/90 rounded-xl overflow-hidden h-full">
                    <div className="relative pt-[75%]">
                      <img
                        src={item.previewImage}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{item.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <User size={16} />
                          {item.author}
                        </span>
                      </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm">
                    <button
                        onClick={() => handleDownload(item.downloadUrl)}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium transform hover:scale-105 transition-transform cursor-pointer">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Footer */}
        <footer className="py-6 sm:py-8 text-center text-gray-400 mt-auto">
          <p className="text-xs sm:text-sm">© 2025 That Sky Mod. Not affiliated with thatgamecompany.</p>
        </footer>

        {/* Controls */}
        <div className="fixed bottom-4 right-4 z-50 flex flex-row-reverse gap-4">
          <GradientCustomizer />
          <div className="h-14">
            <CustomButtons.DiscordButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityGallery;