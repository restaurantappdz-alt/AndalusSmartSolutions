import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 text-center px-4">
      <div className="max-w-7xl mx-auto">
        <img
          src={logo}
          alt="Al Andalus Smart Solutions logo"
          className="h-10 w-10 rounded-lg object-cover mx-auto mb-3 opacity-90"
        />
        <p className="text-sm font-mono">
          © {new Date().getFullYear()} {t('footer')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
