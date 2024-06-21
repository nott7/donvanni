import React from "react";

const page = () => {
  return (
    <main>
      <section className="bg-[url('/asset.png')] bg-right-top bg-no-repeat">
        <div className="container mx-auto flex flex-col py-24 gap-8 px-8">
          <h1 className="text-6xl lg:text-8xl font-semibold text-[#280400]">Chi siamo</h1>
          <img
            src="winery.jpg"
            alt="Winery"
            className="h-[150px] w-full object-cover object-center"
          />
        </div>
      </section>
      <section
        className="container mx-auto px-8 flex flex-col md:flex-row justify-between py-24 gap-12
        border-t border-gray-200
      "
      >
        <div className="flex-1">
          <img
            src="/winery-67.png"
            alt="Tappo"
            className="w-[400px] h-full mx-auto
            object-contain object-center
            "
          />
        </div>
        <div className="flex-[2] flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-[#280400] mb-2">
              La tradizione della vinificazione in Sicilia
            </h2>
            <p className="text-gray-500 text-lg">
              L'azienda vinicola di Castronovo Piero è innanzitutto tradizione
              nell'arte della vinificazione, che affonda le proprie radici nel
              lontano 1800, epoca in cui si produceva buon vino utilizzando le
              rudimentali e genuine tecniche del tempo da vigneti esclusivamente
              ad alberello.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#280400] mb-2">
              Don Vannì
            </h2>
            <p className="text-gray-500 text-lg">
              Il Don Vanni è un vino siciliano che intende riportare le antiche
              tecniche alla vinificazione attuale, grazie anche al supporto
              professionale e competente di enologi qualificati.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#280400] mb-2">
              Vino rosso di Sicilia
            </h2>
            <p className="text-gray-500 text-lg">
              Entrato in punta di piedi nel mercato di settore sta conquistando,
              giorno dopo giorno, spazi di mercato sempre più ampi, grazie alla
              sua bontà, al suo gusto e alle sue caratteristiche salutistiche.
              Con un gusto intensoe e sentori di frutta rossa matura: si
              consiglia di accostarlo a tutti i piatti di carne rossa, agli
              arrosti e ai formaggi.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#280400] mb-2">
              Vino bianco di Sicilia
            </h2>
            <p className="text-gray-500 text-lg">
              Il Don Vanni bianco invece, proviene da vitigni Chardonnay e
              Inzolia, dal colore giallo paglierino con riflessi verdolini, dal
              profumo fruttato armonico e dal gusto persistente, equilibrato con
              una buona freschezza e sapidità, fruttato armonico con note
              esotiche. Si accosta bene a tutti i tipi di piatti a base di
              pesce, carni bianche e crostacei, molto gradevole al gusto.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
