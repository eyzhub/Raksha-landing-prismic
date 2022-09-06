import React from "react";
import { createClient } from "../prismicio";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { components } from "../slices/";
import { Layout } from "../components/Layout";

function terms({ policy }) {
  const slice = policy.data.slices[0];
  console.log(slice);
  return (
    <section>
      <div className="navigation-header">
        {slice?.items?.map(
          (
            item,
            i /* import { PrismicRichText } from '@prismicio/react' */
          ) => (
            <div key={`${i + item.subtitle}`} className="header">
              <PrismicRichText field={item.subtitle} />
            </div>
          )
        )}
      </div>
      <div className="body-text">
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.description} />
        {slice?.items?.map(
          (
            item,
            i /* import { PrismicRichText } from '@prismicio/react' */
          ) => (
            <div key={`${i + item.subtitle}`}>
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
          width: 80%;
        }
        .title {
          color: #8592e0;
        }
        .navigation-header {
          width: 17%;
          padding-right: 25px;
        }
        .header {
          border-bottom: 2px solid black;
        }
      `}</style>
    </section>
  );
}

export default terms;
export async function getStaticProps({ locale }) {
  const client = createClient();
  const policy = await client.getByUID("policy", "policy", { lang: locale });
  return {
    props: {
      policy,
    },
  };
}
