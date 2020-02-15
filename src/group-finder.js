import * as React from "react";
import { hasGroup } from "./functions";

class GroupFinder extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      isGroupIdValid : false
    }
  }

  onChange(){
    const {isGroupIdValid} = this.state;
    const groupId = document.getElementById("groupIdInput").value;
    const isValid = hasGroup(groupId);
    if (isValid || (!isValid && isGroupIdValid)){
      this.setState({isGroupIdValid: isValid});
    }
  }

  render(){
    const {isGroupIdValid} = this.state;
    return <div>
    Group Finder
    <input id="groupIdInput" onChange={e => this.onChange(e)}></input>
    <button disabled={!isGroupIdValid}>Next</button>
    </div>;
  }

};
export default GroupFinder;