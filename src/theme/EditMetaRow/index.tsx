import React, { type ReactNode } from "react";
import clsx from "clsx";
import EditThisPage from "@theme/EditThisPage";
import LastUpdated from "@theme/LastUpdated";
import type EditMetaRowType from "@theme/EditMetaRow";
import type { WrapperProps } from "@docusaurus/types";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import Link from "@docusaurus/Link";

type Props = WrapperProps<typeof EditMetaRowType>;

function SuggestChangeLink(): ReactNode {
  const { metadata } = useDoc();
  const url = new URL("https://github.com/werewolv-es/how-to-play/issues/new");
  url.searchParams.set("template", "suggest-change.yml");
  url.searchParams.set("page", metadata.title);

  return (
    <Link to={url.toString()} className="theme-edit-this-page">
      <FontAwesomeIcon icon={faLightbulb} style={{ marginRight: "0.3em" }} />
      Suggest a change
    </Link>
  );
}

export default function EditMetaRowWrapper({
  className,
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
}: Props): ReactNode {
  return (
    <div className={clsx("row", className)}>
      <div className="col" style={{ display: "flex", gap: "1em" }}>
        {editUrl && <EditThisPage editUrl={editUrl} />}
        <SuggestChangeLink />
      </div>
      <div className="col" style={{ textAlign: "right" }}>
        {(lastUpdatedAt || lastUpdatedBy) && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </div>
    </div>
  );
}
