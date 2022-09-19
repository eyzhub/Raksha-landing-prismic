import React from "react";
import { createClient } from "../prismicio";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { components } from "../slices/";
import { Layout } from "../components/Layout";
import _JSXStyle from "styled-jsx/style";

function terms({ terms }) {
  const slice = terms.data.slices[0];
  console.log(slice);
  return (
    <section>
      <div className="body-text">
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.description} />
        {slice?.items?.map(
          (
            item,
            i /* import { PrismicRichText } from '@prismicio/react' */
          ) => (
            <div key={`${i + item.subtitle}`} className="text-wrapper">
              <PrismicRichText field={item.subtitle} />
              <PrismicRichText field={item.text} />
            </div>
          )
        )}
      </div>

      <style jsx>{`
        section {
          margin: 4em auto;
          text-align: left;
          display: flex;
        }
        .body-text {
          padding-left: 25px;
          width: 80%;
          line-height: 1.2;
        }
        .text-wrapper {
        }
      `}</style>
    </section>
  );
}

export default terms;
export async function getStaticProps({ locale }) {
  const client = createClient();
  const terms = await client.getByUID("terms", "terms", { lang: locale });
  return {
    props: {
      terms,
    },
  };
}
