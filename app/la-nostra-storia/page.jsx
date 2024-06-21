import React from "react";

const page = () => {
  return (
    <main>
      <section className="bg-[url('/asset.png')] bg-right-top bg-no-repeat">
        <div className="container mx-auto flex flex-col py-24 gap-8 px-8">
          <h1 className="text-5xl md:text-8xl font-semibold text-[#280400]">
            La nostra <br />
            storia
          </h1>
          <img
            src="winery.jpg"
            alt="Winery"
            className="h-[150px] w-full object-cover object-center"
          />
        </div>
      </section>
      <section
        className="container mx-auto flex flex-col lg:flex-row justify-between py-24 gap-12
        border-y border-gray-200 px-8
      "
      >
        <div className="flex-[2] flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-[#280400] mb-2">
              Tradizione di famiglia
            </h2>
            <p className="text-gray-500 text-lg">
              Il marchio Don Vannì nasce nel 2012 dalla determinata volontà del
              rag. Piero Castronovo di riprendere una antica tradizione di
              famiglia. Il trisavolo, Don Giovanni Castronovo, nato nel 1810,
              latifondista, appassionato cultore del vino deliziava tutti i
              salotti nobili del tempo con le sue bottiglie.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#280400] mb-2">
              Metodologia scrupolosa di vinificazione
            </h2>
            <p className="text-gray-500 text-lg">
              Don Giovanni, chiamato da tutti Don Vannì, era un nobile
              signorotto del quale si avevano solo notizie legate alla sua
              scrupolosa metodologia di vinificazione e del modo attraverso cui
              il suo vino riusciva a giungere oltre i confini regionali.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#280400] mb-2">
              Un vino sciliano fatto con metodi di vinificazione tradizionali
            </h2>
            <p className="text-gray-500 text-lg">
              Il Don Vanni è un vino siciliano che intende riportare le antiche
              tecniche alla vinificazione attuale, grazie anche al supporto
              professionale e competente di enologi qualificati.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/raccolta.jpg"
            alt="Raccolta"
            className="h-full mx-auto
            object-cover object-center
            "
          />
        </div>
      </section>

      <section
        className="container mx-auto flex flex-col md:flex-row justify-between py-24 gap-12 px-8 xl:px-0
      "
      >
        <div className="flex-1 hidden md:block">
          <img
            src="/wine.png"
            alt="Raccolta"
            className="h-full mr-auto
            object-cover object-center
            "
          />
        </div>
        <div className="flex-[2] flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-[#280400] mb-2">
              I nostri vigneti
            </h2>
            <p className="text-gray-500 text-lg">
              Da vigneti curati con passione e un'attenta selezione dei migliori
              grappoli di uva, nasce il nostro vino, un vino che racchiude in sé
              la storia e la tradizione di una terra unica.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#280400] mb-2">
              Competenza e professionalità
            </h2>
            <p className="text-gray-500 text-lg">
              L'intenzione del don Vannì è quella di riportare le antiche
              tecniche di vinificazione a quelle attuali, grazie anche alla
              competenza dei migliori enologi siciliani.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#280400] mb-2">
              Don Vannì rosso - Nero d'Avola
            </h2>
            <ul className="text-gray-500 mt-4 text-lg">
              <li>Vitigni di Nero d'Avola</li>
              <li>
                <strong>Gusto</strong> raffinato, equilibrato e molto corposo
              </li>
              <li>
                <strong>Colore</strong> rosso rubino
              </li>
              <li>
                <strong>Riflessi</strong> violacei
              </li>
              <li>
                <strong>Profumo</strong> intenso, con sentori di frutta rossa
                matura
              </li>
            </ul>
            <p className="text-gray-500 mt-2 italic">
              Si consiglia di bere il vino in accostamento a piatti a base di
              carni rosse, arrosti e formaggi.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#280400] mb-2">
              Don Vannì bianco - blend di Chardonnay e Inzolia
            </h2>
            <ul className="text-gray-500 mt-4 text-lg">
              <li>Vitigni di Chardonnay e Inzolia</li>
              <li>
                <strong>Gusto</strong> persistente, equilibrato, con buona
                freschezza e sapidità
              </li>
              <li>
                <strong>Colore</strong> giallo paglierino
              </li>
              <li>
                <strong>Riflessi</strong> verdolini
              </li>
              <li>
                <strong>Profumo</strong> fruttato armonico, con note esotiche
              </li>
              <li>Molto gradevole al gusto</li>
            </ul>
            <p className="text-gray-500 mt-2 italic">
              Si accosta bene a tutti i tipi di piatti a base di pesce, carni
              bianche e crostacei.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
