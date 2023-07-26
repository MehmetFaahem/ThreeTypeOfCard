import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <header className="flex place-items-center justify-between">
        <div className="font-bold text-[30px]">Choco Chocko</div>
        <div className="flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/">Products</Link>
          <Link href="/">Offers</Link>
          <Link href="/">Hots</Link>
          <Link href="/">About Us</Link>
        </div>
      </header>
    </div>
  );
}
