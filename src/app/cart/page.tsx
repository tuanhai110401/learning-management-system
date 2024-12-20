"use client";
import { Button, Container, Divider, Rating, Skeleton } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useAuthStore, useCart } from "@/lib/store";
import CartItem from "./CartItem";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Cart() {
  const [totalPrice, setTotalPrice] = useState<any>({});
  const { userId, isLogin } = useAuthStore();
  const { isLoading, cart, error, addCart, removeCart, fetchCart } = useCart();
  const router = useRouter();
  useEffect(() => {
    if (userId && cart.length > 0) {
      return;
    }
    fetchCart(userId);
    console.log(">>is running");
  }, [userId]);

  useEffect(() => {
    if (!userId && cart.length === 0) {
      return;
    }
    const total = calculateTotalPrice(cart);
    setTotalPrice(total);
  }, [cart]);
  const handleRemove = (cartId: string) => {
    removeCart(cartId);
  };

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
            Shopping Cart
          </h4>
        </div>

        <div className="flex-1 flex flex-col justify-between lg:gap-16 lg:flex-row">
          <div className="flex-1">
            <h5 className="text-[14px] text-[#334155] font-[400] leading-[150%]">
              1 Course in cart
            </h5>
            <Divider className="mb-4" />

            {isLoading === true && (
              <div className="flex-1 mb-4 shadow-custom flex gap-3 p-4">
                <Skeleton height={108} width={192} radius={8} />
                <div>
                  <Skeleton height={28} width={240} radius={8} />
                  <Skeleton
                    height={18}
                    width={240}
                    radius={8}
                    className="my-6"
                  />
                  <Skeleton height={18} width={240} radius={8} />
                </div>
              </div>
            )}
            {isLoading === false && cart && cart.length === 0 && (
              <div>
                {userId ? (
                  <h1>Your cart is empty. Add some items to get started!</h1>
                ) : (
                  <h4>
                    You must be logged in to access your cart. Click here to{" "}
                    <span
                      onClick={() => router.push("/login")}
                      className="text-blue-600 cursor-pointer py-2 hover:underline"
                    >
                      Log in.
                    </span>
                  </h4>
                )}
              </div>
            )}
            {isLoading === false &&
              cart &&
              cart.length > 0 &&
              cart.map((item: any, index: any) => (
                <CartItem
                  key={index}
                  isLoading={isLoading}
                  dataCart={item && item.courses && item}
                  handleRemove={handleRemove}
                />
              ))}
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
                  ${totalPrice?.totalCoursePrice || "0"}
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
                    totalPrice?.totalCoursePrice *
                    (totalPrice?.tax / 100)
                  ).toFixed(2) || "0"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0F172A] text-[16px] font-[400] leading-[160%]">
                  Total
                </span>
                <span className="text-[#0F172A] text-[18px] font-[600] leading-[160%]">
                  {totalPrice?.totalCoursePrice
                    ? `$${(
                        totalPrice?.totalCoursePrice -
                        totalPrice?.totalCoursePrice * (totalPrice?.tax / 100)
                      ).toFixed(2)}`
                    : "$0"}
                </span>
              </div>
            </div>
            <Button
              fullWidth
              color="black"
              className="mt-4"
              disabled={!isLogin}
            >
              {isLogin ? (
                <Link href="/checkout">Proceed to Checkout</Link>
              ) : (
                "Proceed to Checkout"
              )}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
