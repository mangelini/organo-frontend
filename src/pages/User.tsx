import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import OrderList from "../components/OrderList";
import Settings from "../components/Settings";

const User = () => {
  const [openTab, setOpenTab] = useState(1);
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.userState.user);

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-sm">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-xl rounded block leading-normal " +
                (openTab === 1
                  ? "text-white bg-green"
                  : "text-green bg-white/60 backdrop-blur-xl")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Orders
            </a>
          </li>

          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-xl rounded block leading-normal " +
                (openTab === 2
                  ? "text-white bg-green"
                  : "text-green bg-white/60 backdrop-blur-xl")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Profile
            </a>
          </li>
        </ul>
      </div>

      <div className={openTab === 1 ? "block" : "hidden"}>
        {user && <OrderList user={user} />}
      </div>
      <div className={openTab === 2 ? "block" : "hidden"}>
        {user && <Settings user={user} />}
      </div>
    </div>
  );
};

export default User;
