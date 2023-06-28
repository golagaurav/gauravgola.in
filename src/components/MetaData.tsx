import Head from "next/head";
import useWindowLocation from "@hooks/useWindowLocation";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  description: string;
  previewImage?: string;
  keywords?: string;
  suffix?: string;
};

const getFaviconPath = (isDarkMode: boolean = true): string => {
  return `/favicon-${isDarkMode ? "dark" : "light"}.ico`;
};

export default function MetaData({
  title,
  description,
  previewImage,
  keywords,
  suffix,
}: Props) {
  const { currentURL } = useWindowLocation();
  const [faviconHref, setFaviconHref] = useState("/favicon-dark.ico");

  useEffect(() => {
    // Get current color scheme.
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");
    // Set favicon initially.
    setFaviconHref(getFaviconPath(matcher.matches));
    // Change favicon if the color scheme changes.
    matcher.onchange = () => setFaviconHref(getFaviconPath(matcher.matches));
  }, [faviconHref]);

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description || "Gaurav Gola"} />
      <title>{title + (suffix ? ` - ${suffix}` : "")}</title>
      <meta name="theme-color" content="#000" />
      <link rel="shortcut icon" href={faviconHref} sizes="any" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/img/logo.png"></link>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="author" content="Gaurav Gola"></meta>
      <meta name="robots" content="index,follow" />
      <meta
        name="keywords"
        content={`${keywords || ""} gauravgola.in, Gaurav Gola, golagaurav, GauravGola`}
      />

      {/* Og */}
      <meta property="og:title" content={`${title || ""} - Gaurav Gola`} />
      <meta property="og:description" content={description || "Gaurav Gola"} />
      <meta property="og:site_name" content="Gaurav Gola" />
      <meta property="og:url" content={currentURL} key="ogurl" />
      <meta property="og:image" content={previewImage || ""} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@gauravgolaa" />
      <meta name="twitter:title" content={`${title || ""} - Gaurav Gola`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={previewImage || ""} />
      <meta name="twitter:image:alt" content={title || "Gaurav Gola"}></meta>
      <meta name="twitter:domain" content={currentURL} />
    </Head>
  );
}
