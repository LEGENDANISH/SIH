import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  // Footer navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "My Health", href: "/health" },
    { name: "My Planner", href: "/planner" },
    { name: "Ask AI", href: "/ai" },
  ];

  const supportLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "Help", href: "/help" },
    { name: "Support", href: "/support" },
  ];

  return (
    <footer className="bg-[#FFF7F9] py-8 px-4 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src="healthlogo1.png"
              alt="Health Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium transition-colors ${
                    isActive
                      ? "text-pink-600"
                      : "text-gray-500 hover:text-pink-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-2 text-center md:text-right">
            {supportLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors ${
                    isActive
                      ? "text-pink-600 font-medium"
                      : "text-gray-500 hover:text-pink-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            2025 ©. All Rights Reserved. Made in India (with Pride)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
