import * as React from "react";
import $ from "jquery";
import { getGroup, hasGroup } from "./functions.js";
import { Error } from './error';

export class InviteForm extends React.Component {

  success = () => {
    console.log("success");
  }
  error = () => {
    console.log("error");
  }

  send = () => {
    const { groupId } = this.props.match.params;
    $.ajax({
      type: "POST",
      url: "./send.php",
      data: { groupId: groupId, comment : "my happy comment" },
      success: this.success,
      error: this.error
    });
  }

  render () {
    const { groupId } = this.props.match.params;

    if (!hasGroup(groupId)) {
      return <Error />;
    }

    return <div>
      Invite Form: {groupId}
      <ul>
        {getGroup(groupId).map((p, i) => <li key={i}>{p}</li>)}
      </ul>
      <button onClick={this.send}>Send</button>
      {/* <form action="/send.php">
        <label>GroupId</label>
        <input type="groupId" id="groupId" name="groupId" value={groupId}/>

        <label>comment</label>
        <textarea id="comment" name="comment">My comments</textarea>
        <input type="submit" value="Submit" />
      </form> */}
    </div>;
  }
};
