import { useEffect, useState } from "react";
import { useGetAllOrdersByUserQuery } from "../store/order/orderAPI";
import { IOrder } from "../store/order/types";
import { IOrderItem } from "../store/orderItem/types";
import { IUser } from "../store/user/types";

const OrderList = ({ user }: { user: IUser }) => {
  const {
    data: arrayOfOrders,
    isSuccess,
    isFetching,
    refetch,
  } = useGetAllOrdersByUserQuery(user.id);
  const [oldFetchState, setOldFetchState] = useState(isFetching);

  return (
    <>
      <h2 className="mt-20 text-center text-3xl font-bold tracking-tight">
        Your orders
      </h2>

      <div className="flex flex-col justify-center items-center mt-10">
        {arrayOfOrders &&
          arrayOfOrders.map((orders: IOrder[]) => {
            return (
              <div className="bg-white/30 p-5 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 my-5">
                <time className="text-lg font-semibold">
                  {new Date(orders[0].createdAt).toDateString()}
                </time>
                {orders.map((order: IOrder) => (
                  <ol className="divide-y divider-gray-900">
                    {order.orderItems.map((orderItem: IOrderItem) => (
                      <li className="p-3">
                        <div className="flex flex-row justify-center items-center">
                          <img
                            src={orderItem.food.foodImage}
                            className="w-12 h-12 rounded-full mr-5"
                          />
                          <div className="items-center text-gray-900 font-semibold mx-10 md:mx-13">
                            {orderItem.food.name}
                          </div>
                        </div>
                        <div className="flex flex-row justify-between flex-wrap pt-2">
                          <div className="text-gray-900 font-normal mr-5">
                            Unit Price: ${orderItem.unitPrice}
                          </div>
                          <div className="flex last:grow justify-end text-gray-900 text-sm">
                            Quantity: {orderItem.quantity}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                ))}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default OrderList;
