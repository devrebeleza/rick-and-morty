import Head from "next/head";

export const PersonalHead = (props) => {
  return (
    <Head>
      <title>Rick&Morty - {props.title}</title>
      <meta name="devReBeleza" content="Challenge StarCoding IA - nextjs" />
      <link rel="icon" href="/rick-and-morty-icon-4.jpg" />
    </Head>
  );
};
