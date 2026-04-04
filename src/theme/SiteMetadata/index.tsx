import React, { type ReactNode } from "react";
import SiteMetadata from "@theme-original/SiteMetadata";
import type SiteMetadataType from "@theme/SiteMetadata";
import type { WrapperProps } from "@docusaurus/types";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";
import { applyTrailingSlash } from "@docusaurus/utils-common";

type Props = WrapperProps<typeof SiteMetadataType>;

// Canonical URLs should always point to the prod deployment at /guides,
// regardless of the baseUrl used to build (beta uses baseUrl="/").
// Also works around https://github.com/facebook/docusaurus/issues/9170
// where useLocation().pathname changes after hydration.
const PROD_BASE = "/guides";

function useCanonicalUrl(): string {
  const {
    siteConfig: { url: siteUrl, baseUrl, trailingSlash },
  } = useDocusaurusContext();
  const { pathname } = useLocation();

  const stripped = pathname.startsWith(baseUrl)
    ? pathname.slice(baseUrl.length)
    : pathname;

  return (
    siteUrl +
    applyTrailingSlash(`${PROD_BASE}/${stripped}`, {
      trailingSlash,
      baseUrl: PROD_BASE,
    })
  );
}

export default function SiteMetadataWrapper(props: Props): ReactNode {
  const canonicalUrl = useCanonicalUrl();

  // Rendered after SiteMetadata so react-helmet picks our canonical last (wins).
  return (
    <>
      <SiteMetadata {...props} />
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
      </Head>
    </>
  );
}
