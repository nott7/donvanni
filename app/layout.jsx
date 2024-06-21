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
