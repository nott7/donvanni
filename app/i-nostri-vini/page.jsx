import React from "react";

const page = () => {
  return (
    <main>
      <section className="container mx-auto py-24 px-8">
        <h1 className="text-6xl text-center font-semibold text-[#280400]">
          I nostri vini
        </h1>
        <h2 className="text-2xl font-semibold text-[#280400] mt-10 mb-2">
          Le note che caratterizzano il Don Vannì
        </h2>
        <p className="text-gray-500 text-lg">
          Il gusto degli amatori del vino é sempre più conquistato dal nostro{" "}
          <strong>Don Vannì</strong>. <br />
          Bottiglia dalla veste elegante, raffigurante nell'etichetta l'immagine
          di un signorotto <strong>Don Giovanni</strong>, vissuto nel 1800
          nell'entrorterra agrigentino, ma chiamato proprio dai suoi conterranei
          ed amici Don Vannì.
        </p>
        <h2 className="text-2xl font-semibold text-[#280400] my-2">
          Tecniche genuine di vinificazione in Sicilia
        </h2>
        <p className="text-gray-500 text-lg">
          L'arte della vinificazione è stata tramandata dal lontano 1800,
          periodo in cui si produceva solo buon vino utilizzando tecniche
          rudimentali e genuine, producendo vino esclusivamente da vigneti ad
          alberello di Nero d'Avola, Inzolia e Chardonnay.
        </p>
      </section>
      <section
        className="container mx-auto py-24 px-8 border-y 
        border-gray-200 
      "
      >
        <h1 className="text-5xl text-center font-semibold text-[#280400]">
          I vini
        </h1>
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mt-8">
          <div className="flex-[2] flex flex-col">
            <p className="text-gray-500 text-xl">
              il don Vannì adatta e riporta le antiche tecniche della
              vinificazione a quella attuale, grazie anche al supporto
              professionale e competente messo in campo da qualificati enologi.
              Il nostro vino incarna una buona sintesi dei vini siciliani, per
              bontà, gusto e caratteristiche salutistiche.
            </p>
          </div>
          <div className="flex-1">
            <img src="/tappo.png" alt="Tappo" className="w-[250px] ml-auto" />
          </div>
        </div>
      </section>
      <section className="container mx-auto py-24 px-8 flex flex-col gap-28  justify-between items-center">
        <div className="flex flex-col md:flex-row gap-6 justify-between mt-8 w-full">
          <div className="flex-1 flex flex-col">
            <h3 className="text-6xl font-semibold text-[#280400] mb-2">
              Don Vannì
            </h3>
            <h4 className="text-3xl font-semibold text-[#280400] mb-2">
              Vino Rosso Siciliano
            </h4>
            <ul className="text-gray-500  mt-4 text-lg">
              <li>Vitigni di Nero d'Avola</li>
              <li>Gusto raffinato, equilibrato e molto corposo</li>
              <li>Colore rosso rubino</li>
              <li>Riflessi violacei</li>
              <li>Profumo intenso, con sentori di frutta rossa matura</li>
            </ul>
            <p className="text-gray-500 mt-2 italic">
              Si consiglia di bere il vino in accostamento a piatti a base di
              carni rosse, arrosti e formaggi.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/vini.jpg"
              alt="Don Vanni Vino"
              className="w-[400px] ml-auto"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-6 justify-between mt-8 w-full">
          <div className="flex-1 flex flex-col items-end text-right">
            <h3 className="text-6xl font-semibold text-[#280400] mb-2">
              Don Vannì
            </h3>
            <h4 className="text-3xl font-semibold text-[#280400] mb-2">
              Vino Bianco Siciliano
            </h4>
            <ul className="text-gray-500  mt-4 text-lg">
              <li>Vitigni di Chardonnay e Inzolia</li>
              <li>
                Gusto persistente, equilibrato, con buona freschezza e sapidità
              </li>
              <li>Colore giallo paglierino</li>
              <li>Riflessi verdolini</li>
              <li>Profumo fruttato armonico, con note esotiche</li>
              <li>Molto gradevole al gusto</li>
            </ul>
            <p className="text-gray-500 mt-2 italic">
              Si accosta bene a tutti i tipi di piatti a base di pesce, carni
              bianche e crostacei.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/vini2.jpg"
              alt="Don Vanni Vino"
              className="w-[600px] mr-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
