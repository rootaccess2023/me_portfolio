export function Header({ title, description, backgroundColor }) {
  return (
    <header className="bg-white w-full">
      <div className="w-full mx-auto">
        {/* Colored top section - responsive height */}
        <div
          className={`h-24 sm:h-28 md:h-32 lg:h-36 ${backgroundColor}`}
        ></div>
        <div>
          <div className="relative -top-6 sm:-top-8 md:-top-10 z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Content container - responsive width */}
            <div className="w-full md:w-4/5 lg:w-2/3 bg-white pt-4 sm:pt-5 md:pt-6 px-4 sm:px-5 md:px-6 shadow-md">
              {/* Responsive typography */}
              <h1 className="font-zilla text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4">
                {title}
              </h1>
              <div>
                <p className="text-base sm:text-lg md:text-xl font-light pb-4 md:pb-6">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
