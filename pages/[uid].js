import * as prismicH from "@prismicio/helpers";
import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";

const Page = ({ page }) => {
  return (
    <Layout>
      <Head></Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Page;
// Fetch content from prismic
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  /*
   * `params.uid` contains an array of each part of the URL separated by a `/`.
   * In this example, the last part is the document's UID.
   */
  const uid = params.uid[params.uid.length - 1];
  console.log(uid);

  const page = await client.getByUID("page", uid);

  return {
    props: {
      slices: page.data.body,
    },
  };
}

// Define Paths
export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page");

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: true,
  };
}
