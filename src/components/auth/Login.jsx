import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="mx-auto w-2/5 p-6 bg-white shadow rounded">
        <p className="mb-6 text-center text-sm">
          <h2 className="text-3xl font-bold">Sign in to your account</h2>
          or{" "}
          <Link
            to="/free-trial"
            className="text-purple-700 hover:text-purple-500"
          >
            Start your 14-day free trial
          </Link>
        </p>
        <form>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-1 text-gray-700 text-sm font-bold"
            >
              Username
            </label>
            <input
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
            <button className="w-full py-2 px-3 text-white font-bold bg-purple-700 rounded">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
