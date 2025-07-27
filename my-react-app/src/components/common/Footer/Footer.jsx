import React from 'react';
import { FooterCTA } from './FooterCTA';
import { useResponsive } from '../../../hooks/useResponsive';

export const Footer = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const companyLinks = [
    { text: 'About', href: '/about' },
    { text: 'FAQ', href: '/faq' },
    { text: 'Privacy Policy', href: '/privacy' },
    { text: 'Terms of Service', href: '/terms' }
  ];

  const yachtLinks = [
    { text: 'BELLA', href: '/yachts/bella' },
    { text: 'ZEIN', href: '/yachts/zein' },
    { text: 'VIDA', href: '/yachts/vida' },
    { text: 'LIBERTY', href: '/yachts/liberty' }
  ];

  const socialLinks = [
    { icon: 'facebook', href: '#', label: 'Facebook' },
    { icon: 'twitter', href: '#', label: 'Twitter' },
    { icon: 'instagram', href: '#', label: 'Instagram' },
    { icon: 'linkedin', href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-[#002e41]">
      {/* CTA Section */}
      <FooterCTA />

      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div
          className={`grid gap-8 ${
            isMobile
              ? 'grid-cols-1'
              : isTablet
              ? 'grid-cols-2'
              : 'grid-cols-4'
          }`}
        >
          {/* Company Info */}
          <div className={`${isDesktop ? '' : 'col-span-full'}`}>
            <img
              src="/images/common/logo-light.png"
              alt="Nile Anchor"
              className="h-16 mb-6"
            />
            <p className="text-[#cccccc] text-sm leading-relaxed mb-6 max-w-xs">
              Premium luxury yacht rentals on Egypt's Nile River. 
              Creating unforgettable experiences since 2021.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#a18c6d] transition-colors"
                >
                  <span className={`fab fa-${social.icon}`}></span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-['Cormorant_Upright'] font-medium text-white text-lg tracking-wider mb-6">
              OUR COMPANY
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#cccccc] hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">▸</span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Yacht Links */}
          <div>
            <h3 className="font-['Cormorant_Upright'] font-medium text-white text-lg tracking-wider mb-6">
              YACHTS
            </h3>
            <ul className="space-y-3">
              {yachtLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#cccccc] hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">▸</span>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-['Cormorant_Upright'] font-medium text-white text-lg tracking-wider mb-6">
              CONTACT DETAILS
            </h3>
            <address className="not-italic space-y-4 text-[#cccccc]">
              <p className="text-sm">Mon - Fri, 9.00am until 6.30pm</p>
              <p className="text-sm">
                Nile view club, Dokki<br />
                Giza, Egypt
              </p>
              <a
                href="mailto:reservation@thenileanchor.com"
                className="text-sm hover:text-white transition-colors block"
              >
                reservation@thenileanchor.com
              </a>
              <a
                href="tel:+201211140222"
                className="text-sm hover:text-white transition-colors block"
              >
                +20 121 114 0222
              </a>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-[#cccccc] text-xs">
            © 2025 Nile Anchor. All Rights Reserved | Developed by Spree Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};
