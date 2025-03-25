export function ButtonIndigo({ buttonText, link, icon }) {
  return (
    <a
      href={link}
      className="w-full md:w-fit flex justify-center items-center font-bold gap-4 text-lg bg-indigo-500 hover:bg-blue-800 text-white px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out"
    >
      {buttonText}
      {icon}
    </a>
  );
}
