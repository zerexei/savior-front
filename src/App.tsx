import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <main className="min-h-screen p-8 girassol">
        <header className="flex items-end mb-6">
          <div className="brand mr-6">
            <h1 className="text-4xl font-bold">FooBar</h1>
          </div>

          <div className="flex justify-between items-center">
            <nav className="flex items-center gap-2 text-purple-700 underline">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <div>
              <a href="#a">Login</a>
              <a href="#a" className="py-2 px-3 text-white bg-purple-400 rounded">Register</a>
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
