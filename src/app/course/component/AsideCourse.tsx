import ButtonCustom from "@/components/Button";
import Image from "next/image";
import React from "react";
import { useAuthStore, useCart } from "@/lib/store";
import { toast } from "react-toastify";

export default function AsideCourse({
  image,
  price,
  courseId,
}: {
  image: string;
  price: number;
  courseId: string;
}) {
  const { isLoading, addCart } = useCart();
  const { userId } = useAuthStore();

  const handleClick = () => {
    if (!userId && !courseId) return;
    try {
      addCart(courseId, userId);
      toast.success("Course added to cart!");
    } catch (error) {
      console.log(">> error");
    }
  };
  return (
    <div className="w-full shadow-custom rounded-2xl p-6 flex flex-col gap-6 bg-white">
      <div>
        <Image
          className="rounded-lg object-cover w-full"
          // src="https://res.cloudinary.com/dxaqounpg/image/upload/v1729582476/Learing%20Management%20System/courses/course-01.jpg"
          src={image}
          height={202}
          width={360}
          alt="banner course"
        />
      </div>
      {price !== 0 ? (
        <div className="flex gap-3">
          <span className="text-[24px] text-[#0F172A] font-[600] leading-[140%]">
            ${price}
          </span>
          <span className="text-[18px] text-[#0F172A] font-[600] leading-[160%] opacity-20 line-through">
            $99.5
          </span>
          <span className="text-[20px] text-[#16A34A] font-[600] leading-[150%]">
            50% Off
          </span>
        </div>
      ) : (
        <div>
          <span className="text-[24px] text-green-500 font-[600] leading-[140%]">
            Free
          </span>
        </div>
      )}

      <ButtonCustom
        p="10px 24px"
        height="48px"
        title="Add to card"
        color="#020617"
        loading={isLoading}
        click={handleClick}
      />
      {price === 0 ? (
        <ButtonCustom
          p="10px 24px"
          height="48px"
          variant="outline"
          title="Register to Receive the Course"
          color="#22C55E"
        />
      ) : (
        <ButtonCustom
          p="10px 24px"
          height="48px"
          variant="outline"
          title="Buy Now"
          color="#020617"
          click={() => toast("is running !")}
        />
      )}
    </div>
  );
}
