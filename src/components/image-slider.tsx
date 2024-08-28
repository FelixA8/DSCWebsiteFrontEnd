
"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export function ImageSlider() {
  return (
    <div className="w-[100%] my-auto mx-auto border rounded-lg lg:mx-0">
      <Carousel slide={true} pauseOnHover style={{ aspectRatio: 16 / 9 }} >
        <Link href={""}><img src="/main-slider-assets/1.png" alt="..." className="object-cover w-full h-full" /></Link>
        <Link href={""}><img src="/eventsasset/dsc-cascade-2024.jpg" alt="..." className="object-cover w-full h-full" /></Link>
        <Link href={""}><img src="/eventsasset/ldkcp-dsc-2024.jpeg" alt="..." className="object-cover w-full h-full" /></Link>
      </Carousel>
    </div>
  );
}
