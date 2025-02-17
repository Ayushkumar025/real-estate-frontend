import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold mb-2">About Luxora Realty</h3>
          <p className="text-gray-600 text-sm">
            As the largest platform connecting property buyers and sellers, ... 
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Properties in India</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Property in New Delhi | Property in Mumbai | Property in Chennai | Property in Pune | 
            Property in Noida | Property in Gurgaon | Property in Bangalore | Property in Ahmedabad
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">New Projects in India</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            New Projects in New Delhi | New Projects in Mumbai | New Projects in Chennai | 
            New Projects in Pune | New Projects in Noida | New Projects in Gurgaon | 
            New Projects in Bangalore | New Projects in Ahmedabad
          </p>
        </div>
      </div>
      <div className="mt-6 border-t pt-4 text-center text-gray-600 text-sm">
        <p>
          All trademarks, logos, and names are properties of their respective owners. &copy; 2025 Luxora Realty Services Limited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;