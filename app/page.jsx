import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="container mx-auto flex flex-col md:flex-row gap-4 justify-between py-24 px-8 border-b border-gray-200">
        <div className="flex-1 flex flex-col">
          <h1 className="text-4xl font-semibold text-[#280400]">
            Don Vannì <br /> Vini di Sicilia
          </h1>
          <p className="text-gray-500 text-lg mt-4">
            L'azienda vinicola di Castronovo Piero realizza vini secondo
            tradizione, una tradizione che affonda le sue radici nel lontano
            1800 nell'arte della vinificazione, epoca in cui si produceva vino
            utilizzando rudimentali e genuine tecniche del tempo, coltivando
            esclusivamente vigneti ad alberello.
          </p>
          <Link
            href="/chi-siamo"
            className="text-[#DFC78C] border-[#DFC78C] w-fit border-2 px-6 py-2 mt-4
          rounded-md hover:bg-[#DFC78C] hover:text-white transition-colors duration-300 ease-in-out
          "
          >
            Scopri di più
          </Link>
        </div>
        <div className="flex-1">
          <img src="/home1.jpg" alt="Vigneti" className="w-[500px] ml-auto" />
        </div>
      </section>
      <section className="container mx-auto px-8 flex flex-col items-center gap-4 py-16 border-b border-gray-200">
        <img src="/home2.jpg" alt="Vigneti" className="w-full" />
        <p className="text-gray-500 text-lg max-w-[800px] text-center">
          Il Brand "Don Vannì" nasce nel 2012 dalla volontà del rag. Pietro
          Castronovo di riprendere una antica tradizione di famigia. Un
          trisavolo, Don Giovanni Castronovo nato nel 1810, latifondista,
          appassionato cultore del vino che con la sua produzione deliziava
          tutti i salotti nobili del tempo.
        </p>
      </section>

      <section className="container mx-auto px-8 flex flex-col gap-4 py-8 text-gray-500 ">
        <h2 className="text-4xl font-semibold text-center text-[#280400] mb-2">
          I nostri vini
        </h2>
        <p>
          Una delle bottiglie che attualmente sta conquistando il gusto dei veri
          amatori di vino é il <strong>Don Vannì</strong>. <br />
          Bottiglia dalla veste elegante, raffigurante nell'etichetta l'immagine
          di un signorotto - Don Giovanni - vissuto nel 1800 <br />
          nell'entroterra agrigentino, ma chiamato proprio dai suoi conterranei
          ed amici Don Vannì.
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-[#280400] mb-2">
            Don Vannì - Nero d'Avola
          </h2>
          <p>Prodotto dai vitigni di Nero d'Avola</p>
          <ul>
            <li>
              <strong>Gusto</strong> raffinato, equilibrato e molto corposo
            </li>
            <li>
              <strong>Colore</strong> rosso rubino e dai riflessi violacei.
            </li>
            <li>
              <strong>Profumo</strong> intenso, con sentori di frutta rossa
              matura.
            </li>
            <li>
              Si consiglia l'accostamento a piatti a base di carni rosse,
              arrosti e formaggi
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#280400] mb-2">
            Don Vannì - blend di Chardonnay e Inzolia
          </h2>
          <p>Prodotto dai vitigni di Chardonnay e Inzolia</p>
          {/* <ul>
            <li>
              <strong>Gusto</strong> raffinato, equilibrato e molto corposo
            </li>
            <li>
              <strong>Colore</strong> rosso rubino e dai riflessi violacei.
            </li>
            <li>
              <strong>Profumo</strong> intenso, con sentori di frutta rossa
              matura.
            </li>
            <li>
              Si consiglia l'accostamento a piatti a base di carni rosse,
              arrosti e formaggi
            </li>
          </ul> */}
        </div>
        <img src="/home3.jpg" alt="Vigneti" className="w-full" />
      </section>
    </main>
  );
}
