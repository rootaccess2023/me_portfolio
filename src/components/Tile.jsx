export function Tile({ imgSrc, title, link }) {
  return (
    <li className="flex flex-col space-y-4">
      <a href={link}>
        <img src={imgSrc} alt={title} />
      </a>
      <a>
        <p className="text-2xl cursor-pointer hover:underline">{title}</p>
      </a>
    </li>
  );
}
