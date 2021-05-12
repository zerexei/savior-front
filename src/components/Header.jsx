import { NavLink } from "react-router-dom";

const Header = () => {
  const routes = [
    { name: "Home", to: "/" },
    { name: "Dashboard", to: "/dashboard" },
    { name: "Posts", to: "/posts" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="flex items-center mb-3 p-6 text-sm text-gray-700 bg-white shadow rounded">
      {/* BRAND NAME */}
      <div className="brand mr-6">
        <h1 className="text-4xl font-bold">FooBar</h1>
      </div>

      {/* NAVBAR */}
      <div className="flex justify-between w-full">
        <nav className="flex items-center gap-2">
          {routes.map((route) => (
            <NavLink key={route.to} exact to={route.to}
              activeClassName="text-purple-400"
              className="p-2 hover:underline hover:text-purple-400"
            > {route.name}
            </NavLink>
          ))}
        </nav>

        {/* AUTH LINKS */}
        <div className="flex gap-2">
          <NavLink
            exact
            activeClassName="text-purple-400"
            to="/login"
            className="p-2 hover:underline hover:text-purple-400"
          > Login
          </NavLink>
          <NavLink
            to="/register"
            activeClassName="text-purple-400"
            className="p-2 hover:underline hover:text-purple-400"
          > Register
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
