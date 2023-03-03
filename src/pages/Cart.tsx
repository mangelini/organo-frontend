import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addToCart,
  deleteAllFromCart,
  deleteFromCart,
  removeFromCart,
} from "../store/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { orderAPI, useCreateOrderMutation } from "../store/order/orderAPI";
import { IOrderCreate } from "../store/order/types";
import { useCreateOrderItemMutation } from "../store/orderItem/orderItemAPI";
import { IOrderItemCreate } from "../store/orderItem/types";

export const Cart = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);
  const user = useAppSelector((state) => state.userState.user);
  const [createOrder, { isError: isErrorOrder }] = useCreateOrderMutation();
  const [createOrderItem, { isError: isErrorOrderItem }] =
    useCreateOrderItemMutation();

  const onCheckoutClick = () => {
    setOpen(false);

    if (user === null) {
      navigate("/not-authenticated");
    } else {
      const order: IOrderCreate = {
        userId: user.id,
      };
      createOrder(order)
        .unwrap()
        .then((orderRes) => {
          cartItems.forEach((item) => {
            const orderItem: IOrderItemCreate = {
              quantity: item.quantity,
              unitPrice: item.unitPrice,
              orderId: orderRes.id,
              foodId: item.food.id,
            };
            createOrderItem(orderItem);
          });
        })
        .finally(() => {
          if (isErrorOrder || isErrorOrderItem) {
            navigate("/payment-failed");
          }
          dispatch(orderAPI.util.invalidateTags(["Orders"]));
          dispatch(deleteAllFromCart());
          navigate("/payment-success");
        });
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" open={open} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white backdrop-blur-xl shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-green">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartItems.map((item) => (
                              <li key={item.food.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.food.foodImage}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-green">
                                      <h3>{item.food.name}</h3>
                                      <p className="ml-4">{item.unitPrice}</p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-green">Qty</p>
                                    <div className="flex items-center rounded border border-green">
                                      <button
                                        type="button"
                                        className="h-5 w-5 leading-5 text-green transition hover:opacity-75"
                                        onClick={() =>
                                          dispatch(removeFromCart(item.food))
                                        }
                                      >
                                        -
                                      </button>

                                      <span>
                                        <input
                                          type="number"
                                          id="Quantity"
                                          value={item.quantity}
                                          readOnly={true}
                                          className="h-5 w-5 border-y-0 border-gray-200 text-center text-green [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                      </span>

                                      <button
                                        type="button"
                                        className="h-5 w-5 leading-5 text-green transition hover:opacity-75"
                                        onClick={() =>
                                          dispatch(addToCart(item.food))
                                        }
                                      >
                                        +
                                      </button>
                                    </div>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-green hover:text-green-800"
                                        onClick={() =>
                                          dispatch(deleteFromCart(item))
                                        }
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-green">
                        <p>Subtotal</p>
                        <p>{Math.round(totalAmount * 100) / 100}</p>
                      </div>
                      <p className="mt-0.5 text-sm">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <button
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-green px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-800"
                          onClick={onCheckoutClick}
                        >
                          Checkout
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm">
                        <p>
                          or &nbsp;
                          <button
                            type="button"
                            className="font-medium text-green hover:text-green-800"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
