import Image from "next/image";
import React from "react";

import { Pacifico } from "next/font/google";
import ImageOne from "../images/chocolate1.png";
const inter = Pacifico({ subsets: ["latin"], weight: ["400"] });

export default function TypeOne() {
  return (
    <div className="flex w-[60%] px-20 justify-between h-[300px] flex-row place-items-center rounded-xl bg-slate-800">
      <div className="img-box">
        <Image src={ImageOne} width={200} height={200} alt="" />
      </div>
      <div className="detail-box">
        <h6
          className={`${inter.className} mb-6 text-yellow-400 text-[35px] font-bold`}
        >
          Yummy <span>chocolate</span>
        </h6>
        <h5 className="text-[22px] mt-6 text-white font-medium">
          <span>Price:</span> $5.0
        </h5>
        <button className="px-3 py-2 mt-2 bg-slate-500 text-white rounded-lg">
          Add to cart
        </button>
      </div>
    </div>
  );
}
