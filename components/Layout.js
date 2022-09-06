import { Header } from "./Heading";
import { Footer } from "./Footer";

export const Layout = ({
  alternateLanguages,

  children,
}) => {
  return (
    <div className="text-slate-800">
      <Header alternateLanguages={alternateLanguages} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
