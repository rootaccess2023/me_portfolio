export function ButtonWhite({ buttonText, link, icon }) {
  return (
    <a
      href={link}
      target="_blank"
      className="w-fit flex  items-center gap-2 font-bold text-base md:text-lg border-2 border-white text-white px-4 py-1 cursor-pointer hover:text-black hover:bg-white transition-all duration-300 ease-in-out"
    >
      {buttonText}
      {icon}
    </a>
  );
}
