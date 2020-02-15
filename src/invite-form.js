import * as React from "react";
import { getGroup } from "./functions.js"

export const InviteForm = (props) => {
  const { groupId } = props.match.params;
  return <div>
    Invite Form: {groupId}
    <ul>
      {getGroup(groupId).map(p => <li>{p}</li>)}
    </ul>
  </div>;
};
