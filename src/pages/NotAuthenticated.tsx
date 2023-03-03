import { Link } from "react-router-dom";

const NotAuthenticated = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
        You are not logged in
      </h2>
      <p className="mt-10 mx-5 text-center">
        Login to your account or register before proceeding with checkout
      </p>

      <div className="flex flex-row mt-10">
        <Link
          to="/login"
          className="flex items-center justify-center rounded-md border border-transparent bg-green px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-800 mx-10"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="flex justify-center items-center font-medium text-gray-900 border border-gray-900 px-6 py-3 rounded-md whitespace-nowrap hover:shadow-primary transition-shadow duration-300 mx-10"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default NotAuthenticated;
