import React from 'react';
import {MDBIcon, MDBNavLink, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem } from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom'

class TopNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropCollapseID:"",
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  dropdownCollapse = dropCollapseID => () =>{
    this.setState(prevState =>({
      dropCollapseID: prevState.dropCollapseID !== dropCollapseID ? dropCollapseID : ""
    }))
  }

  render() {
    const navcolor={backgroundColor:'#2bbd7e'}
    return (
      <div>
           
        <Router>      
            <MDBNavbar style={navcolor} dark expand="md" scrolling fixed="top">
              <MDBContainer>
                <MDBNavbarBrand href="/">
                  <strong>CDC - USU</strong>
                </MDBNavbarBrand>
                {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="#">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="about">Tentang Kami</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="profile">Profile</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" onClick={this.dropdownCollapse("dropMenu")}>Dropdown</MDBNavLink>
                      <MDBContainer fluid>
                        <MDBCollapse className="mt-3" id="dropMenu" isOpen={this.state.dropCollapseID}>
                          <p>rendra mahardika</p>
                        </MDBCollapse>
                      </MDBContainer>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBNavLink to="#">
                        <MDBIcon icon="user" className="pr-2" />Sign In
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </Router>
        

      </div>
    );
  }
}

export default TopNavigation;