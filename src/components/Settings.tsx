import { useAppDispatch } from "../store/hooks";
import { IUser } from "../store/user/types";
import { logout } from "../store/userSlice";

const Settings = ({ user }: { user: IUser }) => {
  const dispatch = useAppDispatch();

  const onSignOut = () => {
    dispatch(logout());
  };

  return (
    <div className="">
      <h2 className="mt-20 text-center text-3xl font-bold tracking-tight">
        Settings
      </h2>
      <div className="bg-white/30 p-5 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 mt-10">
        <p className="text-lg">Name: {user.firstName}</p>
        <p className="text-lg mt-4">Surname: {user.lastName}</p>
        <p className="text-lg mt-4">Email: {user.email}</p>
        <div className="flex flex-row">
          <button
            type="submit"
            className="flex last:grow mx-10 justify-center items-center mt-4 px-8 bg-green font-medium text-white rounded-xl whitespace-nowrap hover:shadow-primary transition-shadow duration-300 h-10"
            onClick={onSignOut}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
