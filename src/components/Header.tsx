import React, { useState } from "react";

import {
  Bars3Icon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

import { NavLink } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import { toggleSidebar } from "../store/sidebarSlice";
import { Cart } from "../pages/Cart";

const Header = () => {
  const [open, setOpen] = useState(false);

  const sidebarOpen = useAppSelector((state) => state.sidebar.value);
  const dispatch = useAppDispatch();
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  const activeStyle =
    "text-lg md:text-base lg:text-lg font-medium group text-green";
  const inactiveStyle = "text-lg md:text-base lg:text-lg font-medium group";

  const nav__links = [
    {
      key: 1,
      display: "Home",
      path: "homepage",
    },
    {
      key: 2,
      display: "Foods",
      path: "foods",
    },
    {
      key: 4,
      display: "Contact",
      path: "contact",
    },
  ];

  return (
    <nav className="flex justify-between items-center py-8 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24">
      <NavLink
        to="homepage"
        className="text-3xl md:text-4xl font-bold tracking-wide"
      >
        Organ<span className="text-green">o</span>
      </NavLink>
      <div
        className={
          sidebarOpen
            ? "inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14 fixed flex"
            : "inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14 hidden"
        }
      >
        <div className={open ? "lg:fixed lg:flex md:hidden" : ""}>
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8">
            {nav__links.map((link) => {
              return (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? activeStyle : inactiveStyle
                  }
                  onClick={() => dispatch(toggleSidebar())}
                >
                  {link.display}
                  <div className="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
      <button onClick={() => setOpen(true)}>
        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
        {totalQuantity > 0 && (
          <div className="absolute top-5">
            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-green p-3 text-xs text-white">
              {totalQuantity}
            </p>
          </div>
        )}
      </button>
      <NavLink to="/user" className="flex items-center">
        <UserIcon className="h-6 w-6" aria-hidden="true" />
      </NavLink>

      <button
        className={"block md:hidden relative z-30" + (open ? "hidden" : "")}
        onClick={() => dispatch(toggleSidebar())}
      >
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      <Cart open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Header;
