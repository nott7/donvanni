import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IubendaScript from "@/components/IubendaScript";

export const metadata = {
  title: "Don Vannì - Produttori di vino in Sicilia",
  description:
    "Don Vannì produce vino siciliano prodotto nei territori agrigentini esclusivamente da vitigni ad alberello. Scopri di più sul nostro vino.",
  icons: {
    icon: "/icon.png",
  },
  keywords: ["vino", "sicilia", "don vanni", "vini siciliani"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <IubendaScript />
        <script
          type="text/javascript"
          src="https://cs.iubenda.com/autoblocking/3679281.js"
        ></script>
        <script
          type="text/javascript"
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          async
        ></script>
      </head>
      <body>
        <div className="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
