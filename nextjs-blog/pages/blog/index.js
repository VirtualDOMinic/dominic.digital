import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Blog placeholder</title>
      </Head>
      <main>
        <h1>Hypothetical blog homepage</h1>
        <p>With a bit of explainer text</p>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </main>
    </Layout>
  );
}
