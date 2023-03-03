import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { useLoginMutation } from "../store/user/authAPI";
import { IUserLogIn } from "../store/user/types";
import { setUser } from "../store/userSlice";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { data, isSuccess, isLoading }] = useLoginMutation();

  const dispatch = useAppDispatch();

  const onSignIn = () => {
    const userInput: IUserLogIn = {
      email,
      password,
    };
    loginUser(userInput);
  };

  useEffect(() => {
    if (isSuccess) {
      if (data !== undefined) {
        dispatch(setUser(data));
        navigate("/user");
      }
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="bg-white/30 flex items-center p-5 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 max-w-4xl">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
            Login
          </h2>
          <p className="text-xs mt-4">
            If you are already a member, easily log in
          </p>
          <div className="mt-8 space-y-6">
            <div className="flex flex-col gap-4">
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="p-2 h-10 font-medium text-gray-900 placeholder:text-gray-900 border border-gray-900 rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="p-2 h-10 font-medium text-gray-900 placeholder:text-gray-900 border border-gray-900 rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="group relative flex w-full justify-center items-center px-8 bg-green font-medium text-white rounded-xl whitespace-nowrap hover:shadow-primary transition-shadow duration-300 h-10"
                onClick={onSignIn}
              >
                Sign in
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-900">
              <hr className="border-gray-900" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-900" />
            </div>

            <Link
              to="/register"
              className="group relative flex w-full justify-center items-center px-8 bg-green font-medium text-white rounded-xl whitespace-nowrap hover:shadow-primary transition-shadow duration-300 h-10"
            >
              Register
            </Link>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl"
            src="https://img.freepik.com/free-vector/fruit-salad-bowls-hand-drawn-design_23-2148494147.jpg?w=2000"
          />
        </div>
      </div>
    </div>
  );
};
