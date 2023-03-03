import { IFood } from "../store/food/types";
import { useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/cart/cartSlice";

const Card = ({ food }: { food: IFood }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="max-w-xs right-0 lg:-right-6 top-0 lg:top-28 flex flex-col rounded-2xl shadow-xl bg-white/30 backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <img
        src={food?.foodImage}
        alt=""
        className="h-48 w-full object-cover object-center rounded-t-2xl"
      />
      <div className="flex items-center justify-center pt-3 font-bold">
        {food?.name}
      </div>
      <div className="flex justify-between items-center px-8 py-4">
        <div className="px-4 font-bold font-green">${food?.price}</div>
        <button
          className="px-4 w-full sm:w-auto h-10 bg-green font-medium text-white rounded-xl whitespace-nowrap"
          onClick={() => dispatch(addToCart(food))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
