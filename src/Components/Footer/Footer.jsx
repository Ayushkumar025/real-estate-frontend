import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-6 md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">About Magicbricks</h3>
          <p className="text-gray-600 text-sm">As the largest platform connecting property buyers and sellers, ... <a href="#" className="text-blue-500">Read more</a></p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Properties in India</h3>
          <p className="text-gray-600 text-sm">Property in New Delhi | Property in Mumbai | Property in Chennai | Property in Pune | Property in Noida | Property in Gurgaon | Property in Bangalore | Property in Ahmedabad</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">New Projects in India</h3>
          <p className="text-gray-600 text-sm">New Projects in New Delhi | New Projects in Mumbai | New Projects in Chennai | New Projects in Pune | New Projects in Noida | New Projects in Gurgaon | New Projects in Bangalore | New Projects in Ahmedabad</p>
        </div>
      </div>
      <div className="mt-6 border-t pt-4 text-center text-gray-600 text-sm">
        <p>All trademarks, logos, and names are properties of their respective owners. &copy; 2025 Magicbricks Realty Services Limited.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer
