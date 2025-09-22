import { Outlet, useLocation, Link } from "react-router-dom";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import Footer from "../Footer";
import content from "@/data/content.json";
import { useState, useEffect } from "react";

// Language selector with state management
const LanguageSelector = ({ currentLanguage, onLanguageChange }) => (
  <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 text-sm border border-gray-200">
    <select 
      className="bg-transparent border-none outline-none text-xs"
      value={currentLanguage}
      onChange={(e) => onLanguageChange(e.target.value)}
    >
      {content.layout.languageSelector.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

// Function to get translated text
const getTranslatedText = (key, language) => {
  return content.translations[language]?.[key] || content.translations.en[key] || key;
};

const Layout = () => {
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState("en");

  // Load language from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage") || "en";
    setCurrentLanguage(savedLanguage);
  }, []);

  // Save language to localStorage when it changes
  const handleLanguageChange = (newLanguage) => {
    setCurrentLanguage(newLanguage);
    localStorage.setItem("preferredLanguage", newLanguage);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="flex items-center justify-between py-4 bg-white rounded-3xl shadow-sm border border-gray-200">
            
            {/* Logo */}
            <Link to="/" className="w-32 h-10">
              <img
                src="healthlogo1.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-2">
              {content.layout.navigation.map((item) => {
                const isActive = location.pathname === item.href;
                const translatedName = getTranslatedText(item.id, currentLanguage);
                
                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors rounded-lg",
                      isActive
                        ? "bg-gray-100 text-black font-semibold"
                        : "text-gray-600 hover:text-black hover:bg-gray-50"
                    )}
                  >
                    {translatedName}
                  </Link>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <button className="p-1 text-gray-600 hover:text-gray-800 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <Link to="/profile">
                <img
                  src="https://picsum.photos/id/1005/100/100"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </Link>
              <LanguageSelector 
                currentLanguage={currentLanguage} 
                onLanguageChange={handleLanguageChange} 
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;