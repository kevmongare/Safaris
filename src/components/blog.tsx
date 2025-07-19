import { useState } from 'react';
import Lodge from '../assets/villa-2-beautiful-bedouin.jpg'
import Safari from '../assets/safaris.webp'
import SafariTruck from '../assets/safaris.jpeg'
import Giraff from '../assets/masai-mara-wildlife.jpg'

const categories = ["All", "Kenya", "Tanzania", "Tips", "Conservation"];

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Safari Camps in East Africa",
    excerpt: "Experience the wild in comfort. Discover luxurious and eco-friendly safari camps...",
    image: Lodge,
    category: "Kenya",
  },
  {
    id: 2,
    title: "What to Pack for a Safari",
    excerpt: "Make the most of your safari by packing smart. Here's your essential checklist...",
    image: SafariTruck,
    category: "Tips",
  },
  {
    id: 3,
    title: "The Great Migration: Best Times to Go",
    excerpt: "Witness the epic journey of wildebeests across the Serengeti and Masai Mara...",
    image: Safari,
    category: "Tanzania",
  },
  {
    id: 4,
    title: "Eco-Safaris: Travel with a Purpose",
    excerpt: "Explore how safaris can be both adventurous and sustainable...",
    image: Giraff,
    category: "Conservation",
  },
  // Add more if needed
];


export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  return (
    <section className="py-20 bg-white px-5 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-['Playfair Display']">
          Safari Blog & Travel Insights
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Get inspired with stories and expert tips to plan your next African adventure.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setVisibleCount(3); // Reset load more
            }}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? 'bg-[var(--primary)] text-white'
                : 'text-gray-700 border-gray-300'
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {visiblePosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-60 object-cover "
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 font-['Playfair Display']">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.category}</span>
                <a href="#" className="text-[var(--primary)] hover:underline">
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < filteredPosts.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-white px-6 py-2 rounded-lg transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
