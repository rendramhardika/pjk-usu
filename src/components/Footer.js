import React, {Component} from "react"
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact"

class Footer extends Component{
    render(){
    return(
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <MDBCol>
            <h2 align="justify-content-center">Footer Content</h2>
          </MDBCol>
          {/* <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="psi.usu.ac.id"> Pusat Sistem Informasi USU </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
}
export default Footer;
