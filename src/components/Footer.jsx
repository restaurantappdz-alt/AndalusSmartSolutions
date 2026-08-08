import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 text-center px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-mono">
          © {new Date().getFullYear()} {t('footer')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
