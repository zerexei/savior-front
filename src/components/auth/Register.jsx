import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState(false);

  const history = useHistory();

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const handleClick = async (e) => {
    e.preventDefault();

    const data = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value,
    };

    if (data.password !== data.passwordConfirmation) {
      setError("Password and Confirm password didn't match");
      return;
    }

    try {
      const req = await fetch("http://127.0.0.1:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (req.status === 201) {
        setError(false);
        console.log(await req.json());
        history.push("/dashboard");
        // usernameRef.current.value = '';
        // emailRef.current.value = '';
        // passwordRef.current.value = '';
        // passwordConfirmationRef.current.value = '';
      }
  
      setError(req.statusText);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mx-auto w-2/5 p-6 text-sm bg-white shadow rounded">
        <h2 className="text-3xl font-bold text-center">
          Sign up an account
          <p className="mb-6 text-xs">
            or{" "}
            <Link
              to="/free-trial"
              className="text-purple-700 hover:text-purple-500"
            >
              Start your 14-day free trial
            </Link>
          </p>
        </h2>
        {error && <p className="my-5 text-xs text-red-400">{error}</p>}
        <form onSubmit={(e) => handleClick(e)}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-1 text-gray-700 text-xs font-bold"
            >
              Username
            </label>
            <input
              ref={usernameRef}
              id="username"
              className="w-full p-2 border rounded"
              type="text"
              placeholder="username..."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-1 text-gray-700 text-xs font-bold"
            >
              Email
            </label>
            <input
              ref={emailRef}
              id="email"
              className="w-full p-2 border rounded"
              type="email"
              placeholder="email address..."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-1 text-gray-700 text-xs font-bold"
            >
              Password
            </label>
            <input
              ref={passwordRef}
              id="password"
              className="w-full p-2 border rounded"
              type="password"
              placeholder="password..."
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="password-confirmation"
              className="block mb-1 text-gray-700 text-xs font-bold"
            >
              Confirm Password
            </label>
            <input
              ref={passwordConfirmationRef}
              id="password-confirmation"
              className="w-full p-2 border rounded"
              type="password"
              placeholder="confirm password..."
            />
          </div>
          <div className="mb-6 text-xs flex justify-end">
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
