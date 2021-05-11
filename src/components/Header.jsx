import { NavLink } from "react-router-dom";

const Header = () => {
  const routes = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="flex items-center mb-6 text-sm text-gray-700">
      {/* BRAND NAME */}
      <div className="brand mr-6">
        <h1 className="text-4xl font-bold">FooBar</h1>
      </div>

      {/* NAVBAR */}
      <div className="flex justify-between items-center w-full">
        <nav className="flex items-center gap-2">
          {routes.map((route) => (
            <NavLink exact to={route.to}
              activeClassName="text-purple-400"
              className="p-2 hover:underline hover:text-purple-400"
            > {route.name}
            </NavLink>
          ))}
        </nav>

        {/* AUTH LINKS */}
        <div className="flex items-center gap-2">
          <NavLink
            exact
            activeClassName="text-purple-400"
            to="/login"
            className="p-2 hover:underline hover:text-purple-400"
          > Login
          </NavLink>
          <NavLink
            to="/register"
            className="p-2 hover:underline hover:text-purple-400"
          > Register
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
