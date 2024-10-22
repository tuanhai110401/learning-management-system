import React from "react";
import Image from "next/image";
import { Rating } from "@mantine/core";
interface ProductProp {
  title: string;
  description: string;
  price: number;
  image: string;
  author: string;
  rating?: number;
  star?: number;
}

interface ProductCardProps {
  product: ProductProp;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-[298px] p-4 flex flex-col justify-center items-center gap-2 cursor-pointer rounded-[16px] border-[1] border-[#E2E8F0] shadow-custom transform transition-transform duration-100 hover:scale-105">
      <div>
        <Image
          className="rounded-lg"
          src="https://res.cloudinary.com/dxaqounpg/image/upload/v1728456358/Learing%20Management%20System/product-1.jpg"
          width={266}
          height={139}
          alt="Product course"
        />
      </div>
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-[#0F172A] text-[16px] font-[600] leading-[160%]">
          {product.title}
        </h2>
        <p className="text-[#334155] text-[14px] font-[400] leading-[150%]">{`By ${product.author}`}</p>
        <div className="flex flex-nowrap gap-2">
          <Rating
            value={product.star}
            size="md"
            color="#EAB308"
            fractions={4}
            readOnly
          />
          <span className="text-[#334155] text-[12px] font-[600]">{`(${product.rating} Ratings)`}</span>
        </div>
        <p className="text-[#334155] text-[14px] font-[400] leading-[150%]">
          {product.description}
        </p>
        {product.price > 0 ? (
          <span className="text-[#0F172A] text-[20px] font-[600] leading-[150%]">{`$${product.price}`}</span>
        ) : (
          <span className="text-green-500 text-[20px] font-[600] leading-[150%]">
            Free
          </span>
        )}
      </div>
    </div>
  );
}
