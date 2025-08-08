// src/pages/BlogPage.jsx
import React from 'react';
import { FaCalendarAlt, FaUser, FaComments, FaSearch, FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const BlogPage = () => {
  // Updated blog data with East Africa focus
  const featuredPosts = [
    {
      id: 1,
      title: "Top 10 Hidden Gems in East Africa",
      excerpt: "Discover breathtaking destinations off the beaten path in Kenya, Uganda, Tanzania and Rwanda...",
      date: "May 15, 2023",
      author: "Sarah Johnson",
      comments: 24,
      category: "Destinations",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Gorilla Trekking",
      excerpt: "Everything you need to know for an unforgettable experience in Uganda and Rwanda...",
      date: "April 28, 2023",
      author: "Michael Chen",
      comments: 18,
      category: "Adventure",
      readTime: "10 min read"
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: "Cultural Journey Through Tanzania",
      excerpt: "Experience the rich Maasai culture and traditions of northern Tanzania...",
      date: "June 2, 2023",
      author: "Emma Rodriguez",
      comments: 32,
      category: "Culture",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Hiking Mount Kenya: What to Expect",
      excerpt: "Everything you need to know before embarking on this majestic adventure...",
      date: "May 28, 2023",
      author: "David Thompson",
      comments: 15,
      category: "Adventure",
      readTime: "12 min read"
    },
    {
      id: 5,
      title: "Budget Safari Hacks for East Africa",
      excerpt: "How to experience wildlife wonders without breaking the bank - insider tips...",
      date: "May 20, 2023",
      author: "Olivia Smith",
      comments: 27,
      category: "Budget Travel",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Photographing the Great Migration",
      excerpt: "Capture the magic of wildebeest crossings in the Serengeti...",
      date: "May 10, 2023",
      author: "James Wilson",
      comments: 21,
      category: "Photography",
      readTime: "9 min read"
    }
  ];

  const popularPosts = [
    { id: 1, title: "Best Time to Visit Rwanda", views: 1243 },
    { id: 2, title: "Uganda Safari Packing List", views: 987 },
    { id: 3, title: "Beaches of Zanzibar", views: 856 },
    { id: 4, title: "Nairobi Food Tour Guide", views: 754 },
  ];

  const categories = [
    { name: "Kenya", count: 24 },
    { name: "Uganda", count: 18 },
    { name: "Tanzania", count: 15 },
    { name: "Rwanda", count: 22 },
    { name: "Safari Tips", count: 17 },
    { name: "Culture", count: 12 },
  ];

  const tags = ["Safari", "Mountains", "Gorillas", "Lakes", "Beaches", "Hiking", "Food", "Wildlife"];

  return (
    <div className="min-h-screen bg-[#f9f7f2]">
      {/* Header */}
      <header className="bg-[#3a3a2c] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-[#f9f7f2]">SafariExplorer</div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-[#f9f7f2] hover:text-[#7c3e2d]">Home</a>
              <a href="#" className="text-[#7c3e2d] font-medium border-b-2 border-[#7c3e2d]">Blog</a>
              <a href="#" className="text-[#f9f7f2] hover:text-[#7c3e2d]">Destinations</a>
              <a href="#" className="text-[#f9f7f2] hover:text-[#7c3e2d]">Tours</a>
              <a href="#" className="text-[#f9f7f2] hover:text-[#7c3e2d]">About</a>
              <a href="#" className="text-[#f9f7f2] hover:text-[#7c3e2d]">Contact</a>
            </nav>
            
            <button 
              className="md:hidden text-[#f9f7f2]" 
              title="Open navigation menu" 
              aria-label="Open navigation menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-[#3a3a2c] text-[#f9f7f2] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">East Africa Travel Stories</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover Kenya, Uganda, Tanzania and Rwanda through our travel experiences
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search destinations, tips, guides..." 
                className="w-full px-5 py-3 ll text-[#3a3a2c] focus:outline-none focus:ring-2 focus:ring-[#7c3e2d]"
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#7c3e2d] hover:bg-[#6a3526] text-[#f9f7f2] ll p-2"
                title="Search"
                aria-label="Search"
              >
                <FaSearch className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Column */}
          <div className="lg:w-2/3">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#3a3a2c] mb-6 pb-2 border-b-2 border-[#7c3e2d] inline-block">Featured Stories</h2>
            </div>

            {/* Featured Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map(post => (
                <div key={post.id} className="bg-white  shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  <div className="h-64 bg-gray-200 border-2 border-dashed xl"></div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-[#8c8479] mb-3">
                      <span className="inline-flex items-center mr-4">
                        <FaCalendarAlt className="mr-1" /> {post.date}
                      </span>
                      <span className="inline-flex items-center">
                        <FaUser className="mr-1" /> {post.author}
                      </span>
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#f9f7f2] text-[#7c3e2d] ll mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#3a3a2c] mb-3 hover:text-[#7c3e2d] transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-[#8c8479] mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#8c8479]">{post.readTime}</span>
                      <button className="text-[#7c3e2d] hover:text-[#6a3526] font-medium flex items-center">
                        Read more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Posts */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#3a3a2c] mb-6 pb-2 border-b-2 border-[#7c3e2d] inline-block">Recent Articles</h2>
            </div>

            <div className="space-y-10">
              {recentPosts.map(post => (
                <div key={post.id} className="bg-white  shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg md:flex">
                  <div className="md:w-1/3 h-64 md:h-auto bg-gray-200 border-2 border-dashed"></div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center text-sm text-[#8c8479] mb-3">
                      <span className="inline-flex items-center mr-4">
                        <FaCalendarAlt className="mr-1" /> {post.date}
                      </span>
                      <span className="inline-flex items-center mr-4">
                        <FaUser className="mr-1" /> {post.author}
                      </span>
                      <span className="inline-flex items-center">
                        <FaComments className="mr-1" /> {post.comments}
                      </span>
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#f9f7f2] text-[#3a3a2c] ll mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#3a3a2c] mb-3 hover:text-[#7c3e2d] transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-[#8c8479] mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#8c8479]">{post.readTime}</span>
                      <button className="text-[#7c3e2d] hover:text-[#6a3526] font-medium flex items-center">
                        Read more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>

          {/* Sidebar Column */}
          <div className="lg:w-1/3">
            <div className="bg-white  shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-[#3a3a2c] mb-4 pb-2 border-b">About Our Blog</h3>
              <div className="flex justify-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed ll w-24 h-24"></div>
              </div>
              <p className="text-[#8c8479] mb-4">
                SafariExplorer shares authentic travel stories and practical tips for exploring Kenya, Uganda, Tanzania and Rwanda.
              </p>
              <div className="flex justify-center space-x-4 mt-6">
                <a href="#" className="bg-[#3a3a2c] text-[#f9f7f2] p-2 ll hover:bg-[#7c3e2d] transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="bg-[#3a3a2c] text-[#f9f7f2] p-2 ll hover:bg-[#7c3e2d] transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="bg-[#3a3a2c] text-[#f9f7f2] p-2 ll hover:bg-[#7c3e2d] transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="bg-[#3a3a2c] text-[#f9f7f2] p-2 ll hover:bg-[#7c3e2d] transition-colors">
                  <FaPinterest />
                </a>
              </div>
            </div>

            <div className="bg-white  shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-[#3a3a2c] mb-4 pb-2 border-b">Popular Posts</h3>
              <div className="space-y-4">
                {popularPosts.map(post => (
                  <a key={post.id} href="#" className="flex items-start group">
                    <div className="bg-gray-200 border-2 border-dashed  w-16 h-16 mr-4"></div>
                    <div>
                      <h4 className="font-medium text-[#3a3a2c] group-hover:text-[#7c3e2d] transition-colors">{post.title}</h4>
                      <div className="text-sm text-[#8c8479]">{post.views} views</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white  shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-[#3a3a2c] mb-4 pb-2 border-b">Countries</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <a key={category.name} href="#" className="flex justify-between items-center py-2 border-b border-[#f9f7f2] hover:text-[#7c3e2d] transition-colors">
                    <span>{category.name}</span>
                    <span className="bg-[#f9f7f2] text-[#3a3a2c] ll px-2 py-1 text-xs">{category.count}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white  shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-[#3a3a2c] mb-4 pb-2 border-b">Newsletter</h3>
              <p className="text-[#8c8479] mb-4">
                Get East Africa travel inspiration and exclusive deals delivered to your inbox.
              </p>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-2 border border-[#8c8479]  focus:outline-none focus:ring-2 focus:ring-[#7c3e2d]"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-2 border border-[#8c8479]  focus:outline-none focus:ring-2 focus:ring-[#7c3e2d]"
                />
                <button 
                  type="submit"
                  className="w-full bg-[#7c3e2d] hover:bg-[#6a3526] text-[#f9f7f2] font-medium py-2 px-4  transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="bg-white  shadow-md p-6">
              <h3 className="text-xl font-bold text-[#3a3a2c] mb-4 pb-2 border-b">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <a 
                    key={tag} 
                    href="#" 
                    className="px-3 py-1 bg-[#f9f7f2] text-[#3a3a2c] ll text-sm hover:bg-[#7c3e2d] hover:text-[#f9f7f2] transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;