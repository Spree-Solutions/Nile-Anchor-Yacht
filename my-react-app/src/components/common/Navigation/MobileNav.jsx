import React, { useEffect } from 'react';
import { navigationItems } from '../../../data/navigation';

export const MobileNav = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6">
          {/* Navigation Items */}
          <nav className="flex-1">
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="block py-3 text-lg font-medium text-[#003950] hover:text-[#a18c6d] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="border-t border-gray-200 pt-6 mt-6">
            <div className="space-y-4">
              <a
                href="tel:+201211140222"
                className="flex items-center gap-3 text-[#5d6c72] hover:text-[#003950] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+20 121 114 0222</span>
              </a>

              <a
                href="mailto:reservation@thenileanchor.com"
                className="flex items-center gap-3 text-[#5d6c72] hover:text-[#003950] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">
                  reservation@thenileanchor.com
                </span>
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="/contact"
              className="block w-full mt-6 px-6 py-3 bg-[#003950] text-white text-center rounded-lg hover:bg-[#004a5e] transition-colors"
            >
              Book Your Experience
            </a>
          </div>
        </div>
      </div>
    </>
  );
};