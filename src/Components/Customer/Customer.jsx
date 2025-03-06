
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Customer = () => {
  const metrics = [
    { value: 130, suffix: 'cr+', label: 'Brokerage saved monthly', showRupee: true },
    { value: 30, suffix: 'Lakh+', label: 'Customers Connected Monthly', showRupee: false },
    { value: 2, suffix: 'Lakh+', label: 'New Listings Monthly', showRupee: false }
  ];

  return (
    <div className="w-full">
      {/* Header Section - NoBroker Business Assist Plan For Builders */}
      <div className="w-full py-6 px-4 bg-white">
        <h1 className="text-center text-3xl md:text-4xl text-gray-700 font-medium">
          Our Business Assist Plan For Builders
        </h1>
      </div>
      

      <div className="w-full py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - this is where your image will go */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-md">
              <img src='/Images/img2.png'/>
            </div>
          </div>
          
          {/* Right side - text and buttons */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium mb-6">
              Get in touch with us to Sell or Rent Your Properties
            </h2>
            
            <NavLink to="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-8 mb-4 transition-colors">
            <p>Enquire Now</p>
            </NavLink>

            
            <p className="text-gray-700">
              For Builder Enquiries: +91 91080 *****
            </p>
          </div>
        </div>
      </div>
      
      {/* Metrics Section */}
      <div className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-medium text-gray-700 mb-16">
            We Make A Difference
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            {metrics.map((metric, index) => (
              <MetricCounter 
                key={index}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                showRupee={metric.showRupee}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCounter = ({ value, suffix, label, showRupee }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const counterRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  useEffect(() => {
    if (!visible) return;
    
    const duration = 2000; // 2 seconds animation
    const startTime = Date.now();
    
    const timer = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuad = progress * (2 - progress);
      const current = Math.floor(easeOutQuad * value);
      
      setCount(current);
      
      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [visible, value]);
  
  return (
    <div ref={counterRef} className="flex flex-col items-center">
      <div className="rounded-full border-2 border-yellow-500 p-4 w-40 h-40 flex items-center justify-center mb-4">
        <div className="text-center text-yellow-500 text-3xl font-bold">
          {showRupee && '₹'}{count}{suffix.startsWith('cr') ? suffix : <><br />{suffix}</>}
        </div>
      </div>
      <p className="text-gray-700 text-center max-w-xs">{label}</p>
    </div>
  );
};

export default Customer