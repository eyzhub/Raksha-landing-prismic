import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";

const FooterLinks = ({ slice }) => (
  <section className="footer-section">
    <div
      className="footer-items"
      style={{
        display: "flex",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      {slice?.items?.map((item, i) => (
        <div key={i + item.footer_item_title} style={{ color: "#d5d5d5" }}>
          <PrismicLink field={item.footer_item_link}>
            <PrismicRichText field={item.footer_item_title} />
          </PrismicLink>
        </div>
      ))}
    </div>
    <style jsx>{`
      section {
        width: 100%;
        margin-top: 4em;
        margin-bottom: 2em;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
        display: flex;
      }
    `}</style>
  </section>
);

export default FooterLinks;
