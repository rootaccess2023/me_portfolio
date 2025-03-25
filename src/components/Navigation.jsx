import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

export function Navigation({ navItems, activeIndex, setActiveIndex }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle item selection
  const handleItemClick = (index) => {
    setActiveIndex(index);
    setIsDropdownOpen(false);
  };

  return (
    <div className="my-8 sm:my-12">
      <div className="border-b">
        <div className="max-w-[1140px] mx-auto">
          <div className="px-4 sm:px-6">
            {/* Desktop Navigation - Hidden on mobile */}
            <ul className="hidden sm:flex">
              {navItems.map((item, index) => (
                <li
                  key={`desktop-${index}`}
                  className={`mr-6 md:mr-8 py-4 text-sm md:text-[15px] font-bold border-b-4 cursor-pointer transition-colors duration-300 ${
                    activeIndex === index
                      ? "border-black"
                      : "border-transparent hover:border-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Mobile Dropdown - Visible only on mobile */}
            <div className="relative sm:hidden" ref={dropdownRef}>
              <div
                className="flex items-center justify-between py-3 border-b-4 border-black cursor-pointer"
                onClick={toggleDropdown}
              >
                <span className="font-bold">{navItems[activeIndex]}</span>
                <IoIosArrowDown
                  className={`ml-2 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 shadow-lg rounded-md py-1 max-h-60 overflow-auto">
                  {navItems.map((item, index) => (
                    <li
                      key={`mobile-${index}`}
                      className={`px-4 py-2 cursor-pointer ${
                        activeIndex === index
                          ? "bg-gray-100 font-bold"
                          : "hover:bg-gray-50"
                      }`}
                      onClick={() => handleItemClick(index)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
