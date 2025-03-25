export function Header({ title, description, backgroundColor }) {
  return (
    <header className="bg-white">
      <div className="h-[322px] mx-auto">
        <div className={`h-36 ${backgroundColor}`}></div>
        <div>
          <div className="relative -top-10 z-10 max-w-[1140px] mx-auto">
            <div className="w-2/3 bg-white pt-6 px-6 ">
              <h1 className="font-zilla text-5xl mb-4">{title}</h1>
              <div>
                <p className="text-xl font-light">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
