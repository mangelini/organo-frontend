import * as React from "react";
import { useGetFoodsByMenuQuery } from "../store/food/foodAPI";
import Card from "../components/Card";

export const AllFoods = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const { data: burgers, isSuccess: isSuccessBurgers } =
    useGetFoodsByMenuQuery(1);

  const { data: salads, isSuccess: isSuccessSalads } =
    useGetFoodsByMenuQuery(2);

  const { data: meats, isSuccess: isSuccessMeats } = useGetFoodsByMenuQuery(3);

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
              Burgers
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
              Salad
            </a>
          </li>

          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-xs font-bold uppercase px-5 py-3 shadow-xl rounded block leading-normal " +
                (openTab === 3
                  ? "text-white bg-green"
                  : "text-green bg-white/60 backdrop-blur-xl")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Meat
            </a>
          </li>
        </ul>
      </div>

      <div className={openTab === 1 ? "block" : "hidden"} id="link1">
        <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-3">
          {isSuccessBurgers && burgers.map((burger) => <Card food={burger} />)}
        </div>
      </div>
      <div className={openTab === 2 ? "block" : "hidden"} id="link2">
        <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-3">
          {isSuccessSalads && salads.map((salad) => <Card food={salad} />)}
        </div>
      </div>
      <div className={openTab === 3 ? "block" : "hidden"} id="link3">
        <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-3">
          {isSuccessMeats && meats.map((meat) => <Card food={meat} />)}
        </div>
      </div>
    </div>
  );
};
