import * as React from "react";
import { getGroup } from "./functions.js"

export const InviteForm = (props) => {
  const { groupId } = props.match.params;
  const group = getGroup(groupId);
  return <div>Invite Form: {groupId}</div>;
};
