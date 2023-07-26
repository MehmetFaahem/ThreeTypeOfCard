import Image from "next/image";
import React from "react";

import { Pacifico } from "next/font/google";
const inter = Pacifico({ subsets: ["latin"], weight: ["400"] });
import ImageTwo from "../images/chocolate2.png";

export default function TypeTwo() {
  return (
    <div className="flex  w-[60%] place-content-center px-20 py-10 space-y-5 h-[400px] flex-col place-items-center rounded-xl bg-slate-800">
      <div className="img-box">
        <Image src={ImageTwo} width={200} height={200} alt="" />
      </div>
      <div className="detail-box">
        <h6
          className={`${inter.className} text-center mb-10 text-yellow-400 text-[35px] font-bold`}
        >
          Yummy <span>chocolate</span>
        </h6>
        <div className="flex place-items-center space-x-[200px] ">
          <div>
            <h5 className="text-[17px] mt-6 text-white font-medium">
              <span>Price:</span> $5.0
            </h5>
            <h5 className="text-[22px] mt-1 text-white font-medium">
              <span>Discounted:</span> $3.0 (25% Off)
            </h5>
            <h5 className="text-[22px] mt-1 text-white font-medium">
              <span>Ratings:</span>{" "}
              <span className="text-yellow-400">★★★★★</span>
            </h5>
          </div>
          <button className="px-3 py-2 mt-2 bg-slate-500 text-white text-[18px] rounded-lg">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
