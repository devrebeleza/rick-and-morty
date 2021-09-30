import Head from "next/head";

export const PersonalHead = (props) => {
  return (
    <Head>
      <title>Rick&Morty - {props.title}</title>
      <meta name="devReBeleza" content="Challenge StarCoding IA - nextjs" />
      <meta httpEquiv="cache-control" content="no-cache" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="-1" />
      <link rel="icon" href="/rick-and-morty-icon-4.jpg" />
    </Head>
  );
};
