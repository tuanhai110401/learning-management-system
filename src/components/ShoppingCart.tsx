import { Close, ShoppingCart } from "@/svg";
import { ActionIcon, Button, HoverCard, Indicator, Text } from "@mantine/core";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAuthStore, useCart } from "@/lib/store";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useCheckAuth } from "@/utils/supabase/handlers/userInfo";

export default function Cart() {
  const { userId, isLogin } = useAuthStore();
  const { isLoading, cart, removeCart, fetchCart } = useCart();
  const router = useRouter();
  const { setStore } = useCheckAuth();
  useEffect(() => {
    if (isLogin) return;
    setStore();
  }, []);
  const handleRemoveCart = (cartId: string) => {
    removeCart(cartId);
    toast.success("Course remove from cart!");
  };
  return (
    <div className="relative">
      <HoverCard width={420} shadow="md" radius={8}>
        <HoverCard.Target>
          <Indicator
            size={22}
            inline
            label={cart.length || "0"}
            color="red"
            processing
          >
            <ActionIcon
              variant="transparent"
              radius="xl"
              aria-label="cart"
              onClick={() => console.log(cart)}
            >
              <ShoppingCart />
            </ActionIcon>
          </Indicator>
        </HoverCard.Target>
        <HoverCard.Dropdown className="ml-[-100px]">
          <div className="max-h-[390px] overflow-y-auto">
            <h4 className="text-black text-[18px] font-[600] leading-[160%] py-2">
              Shopping Cart
            </h4>
            {cart && cart.length === 0 && (
              <div>
                {isLogin ? (
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
            {(isLoading === false &&
              cart &&
              cart.length > 0 &&
              cart.map((item: any, index: any) => (
                <div
                  key={`cart-${index}`}
                  className="flex gap-1 mb-1 cursor-pointer h-auto group overflow-hidden"
                >
                  <div>
                    <Image
                      className="w-[94px] h-[54] object-cover"
                      height={2000}
                      width={2000}
                      src={item?.courses?.image ? item?.courses.image : ""}
                      alt="course image"
                    />
                  </div>
                  <p className=" flex-1 text-[#020617] text-[16px] font-[400] leading-[150%] line-clamp-2">
                    {item?.courses?.title}
                  </p>
                  {item?.courses?.price > 0 ? (
                    <span className="text-black text-[18px] font-[600] leading-[120%]">
                      {`$${item?.courses?.price}`}
                    </span>
                  ) : (
                    <span className="text-green-500 text-[18px] font-[600] leading-[120%]">
                      Free
                    </span>
                  )}
                  <div className="h-[54px]] bg-red-100 transition-transform duration-300 transform translate-x-full flex items-center justify-center px-1 rounded-md group-hover:translate-x-0">
                    <ActionIcon
                      variant="transparent"
                      onClick={() => handleRemoveCart(item.id)}
                      loading={isLoading}
                    >
                      <Close color="red" />
                    </ActionIcon>
                  </div>
                </div>
              ))) ||
              ""}

            <div className="flex justify-between py-2 items-center">
              <span>{cart?.length || "0"} Course in Cart</span>
              <Link href="/cart">
                <Button variant="fill" size="sm" className="ml-auto">
                  View Cart
                </Button>
              </Link>
            </div>
          </div>
        </HoverCard.Dropdown>
      </HoverCard>
    </div>
  );
}
