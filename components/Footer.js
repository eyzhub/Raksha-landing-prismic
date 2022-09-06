import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "./Bounded";
import { Header } from "./Heading";

const SignUpForm = ({ settings }) => {
  return <div className="px-4"></div>;
};

export const Footer = ({ settings }) => {
  return (
    <Bounded
      as="footer"
      className="bg-gray-800 pb-12 text-slate-300 md:pb-12"
    ></Bounded>
  );
};
