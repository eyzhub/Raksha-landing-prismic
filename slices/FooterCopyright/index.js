import React from "react";
import { PrismicRichText } from "@prismicio/react";

const FooterCopyright = ({ slice }) => (
  <section>
    <PrismicRichText field={slice.primary.copyright_text} />

    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
        color: grey;
      }
    `}</style>
  </section>
);

export default FooterCopyright;
