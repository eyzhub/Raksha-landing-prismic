import React from "react";
import { createClient } from "../prismicio";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { components } from "../slices/";
import { Layout } from "../components/Layout";

function terms({ imprint }) {
  const slice = imprint.data.slices[0];
  return (
    <section>
      <div className="body-text">
        <div className="header-background">
          <PrismicRichText field={slice.primary.title} />
        </div>

        {slice?.items?.map(
          (
            item,
            i /* import { PrismicRichText } from '@prismicio/react' */
          ) => (
            <div key={`${i + item.subtitle}`} style={{ margin: "0 20px" }}>
              <PrismicRichText field={item.subtitle} />
              <PrismicRichText field={item.description} />
            </div>
          )
        )}
      </div>

      <style jsx>{`
        section {
          text-align: left;
          font-size: 20px;
        }
        .header-background {
          height: 35vh;
          width: 100vw;
          text-align: center;
          background-image: url(${slice.primary.background_image.url});
          background-repeat: no-repeat;
          background-size: cover;
          background-positiom: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: white;
          font-size: 30px;
        }
        .body-text {
          width: 80%;
        }
        .title {
          color: #8592e0;
        }
        .navigation-header {
          width: 20%;
        }
        .header {
          border-bottom: 2px solid white;
        }
      `}</style>
    </section>
  );
}

export default terms;
export async function getStaticProps({ locale }) {
  const client = createClient();
  const imprint = await client.getByUID("imprint", "imprint", { lang: locale });
  return {
    props: {
      imprint,
    },
  };
}
