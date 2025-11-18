import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The Wild Oasis",
  description: "The Wild Oasis is a luxury cabin rental company",
};

export default function Rootlayout({children}) {
  return (
    <html lang="en">
      <body>
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
