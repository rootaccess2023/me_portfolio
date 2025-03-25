export function Navigation({ navItems, activeIndex, setActiveIndex }) {
  return (
    <div className="my-12">
      <div className="border-b">
        <div className="max-w-[1140px] mx-auto">
          <div className="px-6">
            <ul className="flex">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`mr-8 py-4 text-[15px] font-bold border-b-4 cursor-pointer ${
                    activeIndex === index
                      ? "border-black"
                      : "border-transparent"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
