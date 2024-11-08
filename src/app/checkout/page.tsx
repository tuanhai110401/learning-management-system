"use client";
import { Button, Container, Divider, Rating, Checkbox } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useAuthStore, useCart } from "@/lib/store";
import { PaypalIcon, VisaIcon } from "@/svg";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const [totalPrice, setTotalPrice] = useState<any>({});
  const { userId, isLogin } = useAuthStore();
  const { isLoading, cart, error, addCart, removeCart, fetchCart } = useCart();
  const router = useRouter();
  useEffect(() => {
    if (!isLogin) {
      toast.error("Please login to proceed with checkout!");
      router.push("/login");
      return;
    }
    if (userId || cart.length > 0) return;
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
  const handleCheckout = () => {
    toast.success("Congratulations! Your course purchase was successful!");
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
          <div className="flex-1 ">
            <form
              action="#"
              method="POST"
              className="mx-auto mt-6 max-w-3xl border rounded-2xl p-6"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <div className=" col-span-2 sm:col-span-1 ">
                  <label
                    htmlFor="first-name"
                    className="block text-[#0F172A] text-lg font-[600]"
                  >
                    Country
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      placeholder="Enter Country"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className=" col-span-2 sm:col-span-1">
                  <label
                    htmlFor="last-name"
                    className="block text-[#0F172A] text-lg font-[600]"
                  >
                    State/Union Territory
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      placeholder="Enter State"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm/6"
                    />
                  </div>
                </div>
                <h4 className="text-[#0F172A] text-lg font-[600] mt-4">
                  Payment Method
                </h4>
                <div className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 bg-[#F8FAFC] rounded-lg p-4">
                  <div className="sm:col-span-2 flex justify-between items-center">
                    <Checkbox
                      label="Credit Card"
                      radius="xl"
                      className="text-[#0F172A] text-lg font-[600]"
                    />
                    <VisaIcon />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-[#0F172A] text-sm font-[400]"
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
                      className="block text-[#0F172A] text-sm font-[400]"
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
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-[#0F172A] text-sm font-[400]"
                    >
                      Expiry Date
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
                      className="block text-[#0F172A] text-sm font-[400]"
                    >
                      CVC/CVV
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
                </div>
                <div className="sm:col-span-2 flex justify-between items-center bg-[#F8FAFC] rounded-lg p-4">
                  <Checkbox
                    className="text-[#0F172A] text-lg font-[600]"
                    label="Paypal"
                    radius="xl"
                  />
                  <PaypalIcon />
                </div>
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
            <Button
              fullWidth
              color="black"
              className="mt-4"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
