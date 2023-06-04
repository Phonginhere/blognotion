import Link from "next/link"

const NavBar: React.FC = () => {
  const links = [{ id: 1, name: "About", to: "/about" }, { id: 2, name: "Resume", to: "/resume" }, { id: 3, name: "Search (Recommend)", to: "https://www.google.com/advanced_search?q=site:phongporter.vercel.app" }]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className="block ml-4 text-black text-gray-500 dark:text-white nav">
            {link.id === 3 ? (
              <a href={link.to} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            ) : (
              <Link href={link.to}>
                <a>{link.name}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
