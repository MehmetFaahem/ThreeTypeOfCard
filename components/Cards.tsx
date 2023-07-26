import Image from "next/image";
import React from "react";

import { Pacifico } from "next/font/google";

const inter = Pacifico({ subsets: ["latin"], weight: ["400"] });

import ImageOne from "../images/chocolate1.png";
import ImageTwo from "../images/chocolate2.png";
import ImageThree from "../images/chocolate3.png";

export default function Cards() {
  return (
    <section className="chocolate_section layout_padding">
      <div className="container">
        <div className="mt-16 flex-col place-items-center space-y-4 place-content-center flex">
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
        </div>
      </div>
    </section>
  );
}
