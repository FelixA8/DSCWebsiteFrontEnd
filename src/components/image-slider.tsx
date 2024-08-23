
"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export function ImageSlider() {
  return (
    <div className="w-[90%] lg:h-72 h-52 md:w-[70%] md:h-80 lg:w-[100%] my-auto mx-auto border rounded-lg">
      <Carousel slide={true} pauseOnHover >
        <Image width={1600} height={1600} src="/eventsasset/ldka gen2.png" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
  );
}
