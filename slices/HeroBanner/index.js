import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicLink } from "@prismicio/react";
import _JSXStyle from "styled-jsx/style";

const HeroBanner = ({ slice }) => (
  <section>
    <img
      className="hero-logo"
      src={slice.primary.logo.url}
      alt={slice.primary.logo.alt}
      style={{ marginLeft: "auto", marginRight: "auto" }}
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
    </div>
    <style jsx>{`
      section {
        height: 100vh;
        overscroll-behavior-y: none;
        background-image: url(${slice.primary.background_image.url});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
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
        color: #02fdc2;

        margin: 0px;
        border-radius: 50px;
      }
      .outlined-button:hover {
        background-color: #02fdc2;
        color: black;
        width: 150px;
        border-radius: 50px;
        cursor: pointer;
      }
    `}</style>
  </section>
);

export default HeroBanner;
