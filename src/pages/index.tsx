import { Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Home() {
  return <Redirect to={useBaseUrl("/how-to-play-online-werewolf")} />;
}
