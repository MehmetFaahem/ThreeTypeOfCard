import Image from "next/image";
import React from "react";

import { Pacifico } from "next/font/google";
import ImageThree from "../images/chocolate3.png";
const inter = Pacifico({ subsets: ["latin"], weight: ["400"] });

export default function TypeThree() {
  return (
    <div className="flex relative w-[60%] place-content-center px-20 py-10 justify-between h-[400px] flex-row place-items-center rounded-xl bg-slate-800">
      <span className="text-yellow-400 absolute top-0 p-6 text-[20px] right-0">
        ★★★★★
      </span>
      <div className="img-box">
        <Image src={ImageThree} width={200} height={200} alt="" />
        <h6
          className={`${inter.className} text-center mb-10 text-yellow-400 text-[35px] font-bold`}
        >
          Yummy <span>chocolate</span>
        </h6>
      </div>

      <div className="flex flex-col mt-3 ">
        <div>
          <h5 className="text-[17px] mt-6 text-white font-medium">
            <span>Price:</span> $5.0
          </h5>
          <h5 className="text-[22px] mt-1 text-white font-medium">
            <span>Discounted:</span> $3.0 (25% Off)
          </h5>
        </div>
        <button className="px-3 py-2 mt-2 bg-slate-500 text-white text-[18px] rounded-lg">
          Add to cart
        </button>
      </div>
    </div>
  );
}
