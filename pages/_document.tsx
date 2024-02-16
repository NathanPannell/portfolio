import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Nathan Pannell | AI</title>
      <meta
        name="description"
        content="Nathan Pannell, a dedicated student at the University of Victoria with a passion for web development, artificial intelligence, and data science. Exploring the intersection of technology and innovation."
      />
      <meta
        name="keywords"
        content="Nathan Pannell, Web Development, AI, Artificial Intelligence, Data Science, University of Victoria"
      />
      <meta name="author" content="Nathan Pannell" />
      <meta property="og:title" content="Nathan Pannell | Web Developer & AI/Data Science Enthusiast" />
      <meta
        property="og:description"
        content="Discover the world of web development, AI, and data science with Nathan Pannell, a student at the University of Victoria."
      />
      <meta property="og:type" content="website" />
      {/* <meta property="og:image" content="" /> */}
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
