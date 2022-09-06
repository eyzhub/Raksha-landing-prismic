import React from "react";
import { PrismicRichText } from "@prismicio/react";

const HeroBanner = ({ slice }) => (
  <section>
    <img
      src={slice.primary.logo.url}
      alt={slice.primary.logo.alt}
      style={{ width: "400px", marginLeft: "auto", marginRight: "auto" }}
    />{" "}
    <div style={{ fontSize: "30px" }}>
      <PrismicRichText field={slice.primary.title} />
    </div>
    <PrismicRichText field={slice.primary.subtitle} />
    <style jsx>{`
      section {
        height: 100vh;

        background-image: url(${slice.primary.background_image.url});
        background-repeat: no-repeat;
        background-size: cover;
        background-positiom: center;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: white;
      }
      .logo {
        width: 100%;
        height: 400px;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
    {console.log(slice)}
  </section>
);

export default HeroBanner;
