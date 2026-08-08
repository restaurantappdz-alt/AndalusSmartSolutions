import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-400 py-8 text-center px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} Al Andalus Smart Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
