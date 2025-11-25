import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/navigation";

import "@/app/_styles/globals.css";

export const metadata = {
  title: "The Wild Oasis",
  description: "The Wild Oasis is a luxury cabin rental company",
};

export default function Rootlayout({children}) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>
          <p>Copyright 2025 The Wild Oasis</p>
        </footer>
      </body>
    </html>
  );
}
