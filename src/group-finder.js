import * as React from "react";
import { hasGroup } from "./functions";
import { Link } from "react-router-dom";

export class GroupFinder extends React.Component {
  state = { groupId : "" };

  onChange = (e) => {
    this.setState({groupId: e.target.value});
  }

  render(){
    const {groupId} = this.state;
    return <div>
      Group Finder
      <input onChange={this.onChange} />
      { hasGroup(groupId)
        ? <Link to={`/${groupId}`} className="find-button">Next</Link>
        : <button disabled className="find-button">Next</button>
      }
    </div>;
  }

};