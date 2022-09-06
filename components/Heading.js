import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { linkResolver } from "../prismicio";
import { Bounded } from "./Bounded";

const FlagIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase();

  return <span className={`fi fi-${code}`} />;
};

export const Header = ({ alternateLanguages = [] }) => {
  return (
    <Bounded as="header" yPadding="sm">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none"></div>
    </Bounded>
  );
};
