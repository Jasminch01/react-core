const Navbar = () => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <nav className="flex  justify-between my-5">
        <img src="/src/assets/react.svg" alt="" />
        <ul className="flex gap-4">
          {routes.map((route, idx) => (
            <li key={idx}>
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
