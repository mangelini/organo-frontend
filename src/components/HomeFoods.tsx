import Card from "./Card";
import { useGetFoodQuery } from "../store/food/foodAPI";

const HomeFoods = () => {
  const { data: food1 } = useGetFoodQuery(3);

  const { data: food2 } = useGetFoodQuery(7);

  const { data: food3 } = useGetFoodQuery(9);

  return (
    <div className="">
      <h3 className="flex justify-center items-center pt-16 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight whitespace-nowrap">
        Popular Foods
      </h3>
      <div className="flex justify-center items-center mt-10">
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {food1 !== undefined && <Card food={food1} />}
          {food2 !== undefined && <Card food={food2} />}
          {food3 !== undefined && <Card food={food3} />}
        </div>
      </div>
    </div>
  );
};

export default HomeFoods;
