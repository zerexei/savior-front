import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="mx-auto w-2/5 p-6 bg-white shadow rounded">
        <h2 className="text-3xl font-bold text-center">
          Sign up an account
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
              placeholder="username..."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-1 text-gray-700 text-sm font-bold"
            >
              Email
            </label>
            <input
              id="email"
              className="w-full p-2 border rounded"
              type="email"
              placeholder="email address..."
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
              placeholder="password..."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password-confirmation"
              className="block mb-1 text-gray-700 text-sm font-bold"
            >
              Confirm Password
            </label>
            <input
              id="password-confirmation"
              className="w-full p-2 border rounded"
              type="password"
              placeholder="confirm password..."
            />
          </div>
          <div className="mb-6 text-sm flex justify-end">
            <Link
              to="/forgot-password"
              className="text-purple-700 hover:text-purple-500"
            >
              Already have an account?
            </Link>
          </div>
          <div className="mb-6">
            <button className="w-full py-2 px-3 text-white font-bold bg-purple-700 rounded">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
