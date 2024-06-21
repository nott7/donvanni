"use client";


import dynamic from "next/dynamic";
import { useMemo } from "react";

const page = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        loading: () => <p>Loading...</p>,
        ssr: false,
      }),
    []
  );
  return (
    <main>
      <section className="container mx-auto pt-24 px-8">
        <h1 className="text-6xl lg:text-8xl  font-semibold text-[#280400]">Contatti</h1>
      </section>
      <section className="container mx-auto py-24 px-8 flex flex-col lg:flex-row gap-4 justify-between">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-2xl font-semibold text-[#280400]">Telefono</h2>
          <a
            href="tel:+393286777038"
            className="text-gray-500 underline hover:text-[#280400]"
          >
            +39 3286777038
          </a>
          <a
            href="tel:+393779703353"
            className="text-gray-500 underline hover:text-[#280400]"
          >
            +39 3779703353
          </a>
        </div>
        <div className="flex flex-col gap-2 ">
          <h2 className="text-2xl font-semibold text-[#280400]">Email</h2>
          <a
            href="mailto:piero.castronovo@gmail.com"
            className="text-gray-500 underline hover:text-[#280400]"
          >
            piero.castronovo@gmail.com
          </a>
        </div>
        <div className="flex flex-col gap-2 ">
          <h2 className="text-2xl font-semibold text-[#280400]">Indirizzo</h2>
          <p className="text-gray-500">
            Via Padre Annibale, Maria di Francia 3, 92010 Grotte (AG)
          </p>
        </div>
      </section>
      <section className="container mx-auto px-8 pb-24 flex justify-between">
        <div className="map-container h-[400px] w-full">
          <Map position={[37.3997011, 13.6977579]} zoom={17} />
        </div>
      </section>
    </main>
  );
};

export default page;
