import React from 'react';
import { navigationItems } from '../../../data/navigation';

export const DesktopNav = ({ isScrolled, isHomePage }) => {
  const textColor = isScrolled || !isHomePage ? 'text-[#003950]' : 'text-white';
  const buttonStyle = isScrolled || !isHomePage
    ? 'bg-[#003950] text-white hover:bg-[#004a5e]'
    : 'bg-white text-[#003950] hover:bg-gray-100';

  return (
    <nav className="flex items-center gap-8 lg:gap-10">
      <ul className="flex items-center gap-6 lg:gap-8">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className={`font-medium text-sm lg:text-base transition-all duration-300 hover:opacity-80 ${textColor}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href="/contact"
        className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${buttonStyle}`}
      >
        Book Now
      </a>
    </nav>
  );
};
