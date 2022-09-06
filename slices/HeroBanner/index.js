import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";

const HeroBanner = ({ slice }) => (
  <section>
    <img
      src={slice.primary.logo.url}
      alt={slice.primary.logo.alt}
      style={{ width: "450px", marginLeft: "auto", marginRight: "auto" }}
    />{" "}
    <div style={{ fontSize: "25px" }}>
      <PrismicRichText field={slice.primary.title} />
    </div>
    <div
      style={{
        fontSize: "20px",
        height: "50px",
        position: "relative",
        bottom: "40px",
        fontWeight: "600",
      }}
    >
      <PrismicRichText field={slice.primary.subtitle} />
    </div>
    <div
      className="button-wrapper"
      style={{
        width: "max-content",
      }}
    >
      <PrismicLink
        field={slice.primary.button_link}
        style={{
          width: "max-content",
        }}
      >
        <div
          className={`${
            slice.primary.button_variant === "Filled"
              ? "filled-button"
              : "outlined-button"
          }`}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span className="button-label" style={{}}>
            <PrismicRichText field={slice.primary.button_label} />
          </span>
        </div>
      </PrismicLink>
    </div>
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
      .button-wrapper {
        align-self: center;
      }
      .filled-button {
        background-color: white;
        border: 2px solid white;
        width: 150px;
        border-radius: 20px;
      }
      .outlined-button {
        border: 2px solid #02fdc2;
        width: 150px;

        margin: 0px;
        border-radius: 50px;
      }
      .outlined-button:hover {
        background-color: #02fdc2;
        color: black;
        width: 150px;
        border-radius: 50px;
      }
    `}</style>
    {console.log(slice)}
  </section>
);

export default HeroBanner;
