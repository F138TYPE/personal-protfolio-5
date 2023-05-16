import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">About Us</h3>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet dolor non velit interdum, in ornare magna ultrices.</p>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Quick Links</h3>
            <ul className="list-none">
              <li><a href="#main" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Services</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Contact Us</h3>
            <ul className="list-none">
              <li></li>
              <li>karachi</li>
              <li>sufiyan@gmail.com</li>
              <li>+92 4444444444</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;