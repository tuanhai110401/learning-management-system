import { Button, Rating } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

interface CartItemProps {
  dataCart: any;
  isLoading: boolean;
  handleRemove: (cartId: string) => void;
}

export default function CartItem({
  dataCart,
  handleRemove,
  isLoading,
}: CartItemProps) {
  const handleRemoveCartItem = () => {
    if (isLoading) return;
    handleRemove(dataCart.id);
    toast.success("Course remove from cart!");
  };
  return (
    <div className="flex-1 mb-4 shadow-custom">
      <div className="">
        <div className="border rounded-lg p-4 flex flex-col sm:flex-row gap-2">
          <div className="sm:flex-none sm:w-[192px] flex justify-center">
            <Image
              className="sm:w-[192px] sm:h-[108px] w-[384px] h-[216px]"
              src={dataCart.courses?.image}
              height={2000}
              width={2000}
              alt="cart"
            />
          </div>

          <div className="flex-1 flex flex-col gap-2 sm:gap-0">
            <h4 className="text-[18px] font-[600] leading-[160%] text-black line-clamp-1">
              {dataCart.courses?.title}
            </h4>
            <p className="text-[#334155] text-[14px] font-[400] leading-[150%]">
              {`By ${dataCart.courses.instructor_name}`}
            </p>
            <div className="flex">
              <span className="text-[#FEC84B] text-[16px] font-[500] leading-[120%]">
                {dataCart.courses?.star}
              </span>
              <Rating
                value={dataCart.courses?.star}
                fractions={3}
                readOnly
                className="px-1"
              />
              <span className="text-[#64748B] text-[14px] font-[400] leading-[150%] line-clamp-1">
                {`(${dataCart.courses?.rating} ranting)`}
              </span>
              <span className="text-[#020617] text-[14px] font-[400] leading-[150%] hidden xl:block">
                22 Total Hours. 155 Lectures. All levels
              </span>
            </div>
            <Button
              className="w-[120px]"
              variant="outline"
              color="red"
              onClick={handleRemoveCartItem}
              loading={isLoading}
            >
              Remove
            </Button>
          </div>
          <div className="flex-none flex items-center">
            {dataCart.courses?.price > 0 ? (
              <span className="text-black text-[24px] font-[600] leading-[120%]">
                {`$${dataCart.courses?.price}`}
              </span>
            ) : (
              <span className="text-green-500 text-[24px] font-[600] leading-[120%]">
                Free
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
