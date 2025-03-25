export function Logo({ backgroundColor, textColor }) {
  return (
    <a
      href="/"
      className={`w-fit font-zilla font-[590] px-2 text-[25px] tracking-wide ${backgroundColor} ${textColor} cursor-pointer`}
    >
      paul://o
    </a>
  );
}
