"use client";

import { motion } from "framer-motion";

const page = () => {
  return (
    <main>
      <motion.section
        className="bg-[url('/asset.png')] bg-right-top bg-no-repeat"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex flex-col py-24 gap-8 px-8">
          <h1 className="text-5xl md:text-8xl font-semibold text-[#280400]">
            Valori nutrizionali
          </h1>
          <img
            src="winery.jpg"
            alt="Winery"
            className="h-[150px] w-full object-cover object-center"
          />
        </div>
      </motion.section>

      <section className="container mx-auto py-24 px-8 flex flex-col gap-28  justify-between items-center">
        {/* <div className="flex flex-col md:flex-row gap-6 justify-between mt-8 w-full">
          <motion.div
            className="flex-1 flex flex-col"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/vini.jpg"
              alt="Don Vanni Vino"
              className="w-[400px] ml-auto"
            />
          </motion.div>
        </div> */}
        <div className="flex flex-col md:flex-row gap-6 justify-between mt-8 w-full">
          <motion.div
            className="flex-1 flex flex-col text-left"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-4xl font-semibold text-[#280400] mb-2">
              Don Vannì - Vino Bianco Siciliano
            </h3>
            <h4 className="text-2xl font-semibold text-[#280400] mb-2">
              Valori nutrizionali per 100ml
            </h4>
            <ul className="text-gray-500  mt-4 text-lg">
              <li>
                <strong>Energia</strong>: 288,3 kJ / 70,14 Kcal
              </li>
              <li>
                <strong>Carboidrati</strong>: 1,3g
              </li>
              <li className="ml-2">
                di cui <strong>Zuccheri</strong>: 1,3g
              </li>
              <li>
                <strong>Grassi</strong>: 0g
              </li>
              <li className="ml-2">
                di cui <strong>Saturi</strong>: 0g
              </li>
              <li>
                <strong>Proteine</strong>: 0g
              </li>
              <li>
                <strong>Sale</strong>: 0g
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/vini2.jpg"
              alt="Don Vanni Vino"
              className="w-[600px] ml-auto"
            />
          </motion.div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-6 justify-between mt-16 w-full">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/vini.jpg"
              alt="Don Vanni Vino"
              className="w-[400px] mr-auto"
            />
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col text-right"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-4xl font-semibold text-[#280400] mb-2">
              Don Vannì - Vino Rosso Siciliano
            </h3>
            <h4 className="text-2xl font-semibold text-[#280400] mb-2">
              Valori nutrizionali per 100ml
            </h4>
            <ul className="text-gray-500  mt-4 text-lg">
              <li>
                <strong>Energia</strong>: 300,4 kJ / 73,1 Kcal
              </li>
              <li>
                <strong>Alcol</strong>: 71,9g
              </li>
              <li>
                <strong>Carboidrati</strong>: 1,2g
              </li>
              <li className="mr-2">
                di cui <strong>Zuccheri</strong>: 1,2g
              </li>
              <li>
                <strong>Grassi</strong>: 0g
              </li>
              <li className="mr-2">
                di cui <strong>Saturi</strong>: 0g
              </li>
              <li>
                <strong>Proteine</strong>: 0g
              </li>
              <li>
                <strong>Sale</strong>: 0g
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default page;
