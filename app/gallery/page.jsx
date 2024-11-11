"use client";

import OpenedImage from "@/components/Gallery/OpenedImage";
import { useState, useEffect } from "react";

const page = () => {
  const [opened, setOpened] = useState(false);
  const [src, setSrc] = useState("");

  const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
    "/gallery/9.jpg",
    "/gallery/10.jpg",
    "/gallery/11.jpg",
    "/gallery/12.jpg",
    "/gallery/15.jpg",
    "/gallery/16.jpg",
    "/gallery/17.jpg",
    "/gallery/18.jpg",
    "/gallery/19.jpg",
    "/gallery/20.jpg",
    "/gallery/21.jpg",
    "/gallery/22.jpg",
  ];

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [opened]);

  return (
    <main>
      {opened && <OpenedImage setOpened={setOpened} src={src} />}
      <section className="bg-[url('/asset.png')] bg-right-top bg-no-repeat">
        <div className="container mx-auto flex flex-col py-24 gap-8 px-8">
          <h1 className="text-6xl lg:text-8xl font-semibold text-[#280400]">Gallery</h1>
        </div>
      </section>
      <section className="container mx-auto py-24 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Gallery"
              className="w-full h-full object-cover object-center cursor-pointer"
              onClick={() => {
                setSrc(image);
                setOpened(true);
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
