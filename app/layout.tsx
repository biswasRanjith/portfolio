import Header from "@/components/header";
import { Nunito } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Footer from "@/components/footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Ranjith Biswas | FullStack Developer",
  description: "I'm a software engineer at Humanforce in Brisbane. I'm currently working with Laravel, React.js, GraphQL, and AWS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${nunito.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}

            <Toaster position="top-right" />
            <ThemeSwitch />
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
