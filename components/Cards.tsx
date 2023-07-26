import Image from "next/image";
import React from "react";
import TypeOne from "./TypeOne";
import TypeTwo from "./TypeTwo";
import TypeThree from "./TypeThree";

export default function Cards() {
  return (
    <section className="chocolate_section layout_padding">
      <div className="container">
        <div className="mt-16 flex-col place-items-center space-y-4 place-content-center flex">
          <TypeOne />
          <TypeTwo />
          <TypeThree />
        </div>
      </div>
    </section>
  );
}
