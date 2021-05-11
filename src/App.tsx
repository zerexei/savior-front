import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <main className="min-h-screen p-8">
        <header className="flex items-center mb-6">
          <div className="brand mr-6">
            <h1 className="text-4xl font-bold">FooBar</h1>
          </div>

          <div className="flex justify-between items-center w-full">
            <nav className="flex items-center gap-2 text-gray-700">
              <NavLink
                exact
                activeClassName="text-purple-400"
                to="/"
                className="p-2 hover:underline hover:text-purple-400"
              >
                Home
              </NavLink>
              <NavLink
                exact
                activeClassName="text-purple-400"
                to="/about"
                className="p-2 hover:underline hover:text-purple-400"
              >
                About
              </NavLink>
              <NavLink
                exact
                activeClassName="text-purple-400"
                to="/contact"
                className="p-2 hover:underline hover:text-purple-400"
              >
                Contact
              </NavLink>
            </nav>
            <div className="flex items-center gap-5">
              <a
                href="#a"
                className="p-2 hover:underline hover:text-purple-400"
              >
                Login
              </a>
              <a
                href="#a"
                className="py-2 px-3 text-white bg-purple-400 rounded hover:bg-purple-700"
              >
                Register
              </a>
            </div>
          </div>
        </header>
        <div className="p-6 bg-white shadow rounded">
          <Switch>
            <Route exact path="/">
              <h2>Home</h2>
            </Route>
            <Route exact path="/about">
              <h2>About</h2>
            </Route>
            <Route exact path="/contact">
              <h2>Contact</h2>
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
};

export default App;
