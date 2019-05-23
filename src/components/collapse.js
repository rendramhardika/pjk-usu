import React, { Component } from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";

class CollapsePage extends Component {
state = {
  collapseID: ""
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
}

render() {
  return (
      <>
        <MDBBtn color="primary" onClick={this.toggleCollapse("basicCollapse")} style={{ marginBottom: "1rem" }}>
          Toggle1
        </MDBBtn>
        <MDBBtn color="info" onClick={this.toggleCollapse("basicCollapse")} style={{ marginBottom: "1rem" }}>
          Toggle2
        </MDBBtn>
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
          <p>
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid. Nihil anim keffiyeh
            helvetica, craft beer labore wes anderson cred nesciunt sapiente
            ea proident.
          </p>
        </MDBCollapse>
      </>
    );
  }
}

export default CollapsePage;