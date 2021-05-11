import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

// TODO: setup auth router
const Login = () => {
  const [user, setUser] = useState({});
  const history = useHistory();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: usernameRef.current.value,
        password: passwordRef.current.value,
      };

      const req = await fetch("http://127.0.0.1:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setUser(await req.json());
      console.log(user);

      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mx-auto w-2/5 p-6 bg-white shadow rounded">
        <h2 className="text-3xl font-bold text-center">
          Sign in to your account
          <p className="mb-6 text-sm">
            or{" "}
            <Link
              to="/free-trial"
              className="text-purple-700 hover:text-purple-500"
            >
              Start your 14-day free trial
            </Link>
          </p>
        </h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-1 text-gray-700 text-sm font-bold"
            >
              Username
            </label>
            <input
              ref={usernameRef}
              id="username"
              className="w-full p-2 border rounded"
              type="text"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-1 text-gray-700 text-sm font-bold"
            >
              Password
            </label>
            <input
              ref={passwordRef}
              id="password"
              className="w-full p-2 border rounded"
              type="password"
              placeholder="Password..."
            />
          </div>
          <div className="mb-6 text-sm flex justify-between">
            <label htmlFor="remember-me" className="select-none">
              <input type="checkbox" id="remember-me" className="mr-1" />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-purple-700 hover:text-purple-500"
            >
              Forgot password?
            </Link>
          </div>
          <div className="mb-6">
            <button className="w-full py-2 px-3 text-white font-bold bg-purple-700 rounded">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
