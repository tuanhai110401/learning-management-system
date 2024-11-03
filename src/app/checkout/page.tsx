"use client";
import { Button, Container, Divider, Rating, Checkbox } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useAuthStore, useCart } from "@/lib/store";
export default function Checkout() {
  const [totalPrice, setTotalPrice] = useState<any>({});
  const { userId } = useAuthStore();
  const { isLoading, cart, error, addCart, removeCart, fetchCart } = useCart();
  useEffect(() => {
    if (!userId && cart.length === 0) return;
    fetchCart(userId);
    console.log(">>is running");
  }, [userId]);

  useEffect(() => {
    const total = calculateTotalPrice(cart);
    setTotalPrice(total);
  }, [cart]);

  const calculateTotalPrice = (courses: [any]) => {
    const total = courses.reduce(
      (total, course) => total + course.courses.price,
      0
    );

    return { totalCoursePrice: total, tax: 10 };
  };
  return (
    <div>
      <Container fluid className="lg:px-[80px] sm:px-[16px] mb-12">
        <div className="py-12">
          <h4 className="text-[32px] text-[#0F172A] font-[600] leading-[130%]">
            Checkout Page
          </h4>
        </div>

        <div className="flex-1 flex flex-col justify-between lg:gap-16 lg:flex-row">
          <div className="flex-1 border rounded-2xl">
            <form action="#" method="POST" className="mx-auto mt-6 max-w-xl">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    State/Union Territory
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm/6"
                    />
                  </div>
                </div>
                <h4>Payment Method</h4>
                <div className="sm:col-span-2">
                  <Checkbox label="Credit Card" radius="xl" />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Name of Card
                  </label>
                  <div className="mt-2.5">
                    <input
                      placeholder="Name of Card"
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm/6 font-semibold text-gray-900"
                  >
                    Card number
                  </label>
                  <div className="mt-2.5">
                    <input
                      placeholder="Card Number"
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="number"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>

          <div className="flex-none lg:w-[330px] w-auto">
            <h4 className="text-[#0F172A] text-[20px] font-[600] leading-[150%]">
              Order Details
            </h4>
            <div className="bg-[#F8FAFC] p-4 rounded-lg border shadow-custom">
              <div className="flex justify-between">
                <span className="text-[#0F172A] text-[16px] font-[400] leading-[160%]">
                  Price
                </span>
                <span className="text-[#0F172A] text-[18px] font-[600] leading-[160%]">
                  ${totalPrice.totalCoursePrice}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0F172A] text-[16px] font-[400] leading-[160%]">
                  Discount
                </span>
                <span className="text-[#0F172A] text-[18px] font-[600] leading-[160%]">
                  $0
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0F172A] text-[16px] font-[400] leading-[160%]">
                  Tax
                </span>
                <span className="text-[#0F172A] text-[18px] font-[600] leading-[160%]">
                  - $
                  {(
                    totalPrice.totalCoursePrice *
                    (totalPrice.tax / 100)
                  ).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0F172A] text-[16px] font-[400] leading-[160%]">
                  Total
                </span>
                <span className="text-[#0F172A] text-[18px] font-[600] leading-[160%]">
                  {totalPrice.totalCoursePrice
                    ? `$${(
                        totalPrice.totalCoursePrice -
                        totalPrice.totalCoursePrice * (totalPrice.tax / 100)
                      ).toFixed(2)}`
                    : "$0"}
                </span>
              </div>
            </div>
            <Button fullWidth color="black" className="mt-4">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
