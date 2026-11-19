import { Merriweather, Open_Sans } from "next/font/google";
import Nav from "../components/Nav";
import "./globals.css";

const display = Merriweather({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-display" });
const body = Open_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Do bigger slugs carry more worms?",
  description: "Our BI 221 experiment on whether the number of nematodes in a slug is related to the slug's size.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <footer className="site-footer">
          <p>BI 221 Principles of Biology: Cells, Oregon State University, Fall 2026.</p>
          <p>AI use: Claude (Anthropic) was used to help clean the class data, run the statistics, make the figures, find sources, and draft the website text. Our group checked and edited all content.</p>
        </footer>
      </body>
    </html>
  );
}
