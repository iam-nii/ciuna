"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/types";

import { Clock, Heart, MapPin, Shield } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./button";

function Card({ product }: { product: Product }) {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div
      className={`sm:h-[530px] sm:w-[300px] transition-all duration-300 px-2 py-2  border-2 border-gray-200 rounded-2xl ${
        mouseOver ? "shadow-lg scale-101" : ""
      }`}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <div className="relative">
        <div className="flex items-center gap-2 absolute top-2 right-2">
          {product?.status === "used" && (
            <p className="bg-orange-500 text-white px-3 py-1 rounded-2xl text-sm">
              Used
            </p>
          )}
          <Heart className="w-5 h-5 text-slate-400 cursor-pointer hover:scale-110 transition-all duration-300" />
        </div>
        <Image
          src={product?.image}
          alt={product?.name}
          width={300}
          height={320}
          className={`rounded-t-2xl transition-all duration-300 ${
            mouseOver ? "scale-105" : "scale-100"
          }`}
        />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <div className="flex gap-2 text-slate-500 text-xs">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <p>{product?.updatedAt?.toLocaleDateString()}</p>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <p>{product?.city?.city}</p>
          </div>
        </div>
        <p
          className={`text-lg font-semibold ${
            mouseOver ? "text-orange-500" : ""
          }`}
        >
          {product?.name}
        </p>
        <p className="text-sm text-slate-500">{product?.description}</p>
        <p className="font-bold text-orange-500 text-xl">{product?.price} ₽</p>

        {/* Vendor Info */}
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={product?.Vendor?.user?.image} />
            <AvatarFallback>
              {product?.Vendor?.user?.firstName?.charAt(0)}
              {product?.Vendor?.user?.lastName?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <p className="flex items-center gap-1">
            {product?.Vendor?.user?.firstName} {product?.Vendor?.user?.lastName}{" "}
            {product?.Vendor?.user?.isVerified && (
              <Shield className="w-3 h-3 text-green-500" />
            )}
          </p>
        </div>
        <Button className="w-full h-8 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-bold">
          <p>Contact Seller</p>
        </Button>
      </div>
    </div>
  );
}

export default Card;
