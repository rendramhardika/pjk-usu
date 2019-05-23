import React, {Component} from 'react'
import {MDBContainer, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem} from 'mdbreact'
import {NavLink} from 'react-router-dom'

class SideNavJS extends Component{
    render(){
        return(
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="3">
                        <img alt="Job Seeker Profile" className="img-fluid" src=""/>
                        <MDBListGroup>
                            <NavLink exact={true} to="/profile">
                                <MDBListGroupItem>
                                    My Profile
                                </MDBListGroupItem>
                            </NavLink>
                            <NavLink exact={true} to="/bio/basic">
                                <MDBListGroupItem>
                                    My CV
                                </MDBListGroupItem>
                            </NavLink>
                            <NavLink exact={true} to="/application">
                                <MDBListGroupItem>
                                    Application History
                                </MDBListGroupItem>
                            </NavLink>
                            <NavLink exact={true} to="/password">
                                <MDBListGroupItem>
                                    Change Password
                                </MDBListGroupItem>
                            </NavLink>
                            <NavLink exact={true} to="/logout">
                                <MDBListGroupItem>
                                    Logout
                                </MDBListGroupItem>
                            </NavLink>
                        </MDBListGroup>
                    </MDBCol>
                    <MDBCol md="9">
                        <MDBCol md="12">
                            <h1 className="h1-responsive">Informasi Umum</h1>
                        </MDBCol>
                        <MDBCol>
                            <MDBCol md="3">
                                <MDBListGroup>
                                    <NavLink exact={true} to="/profile/basic">
                                        <MDBListGroupItem>
                                            Informasi Umum
                                        </MDBListGroupItem>
                                    </NavLink>
                                    <NavLink exact={true} to="/profile/basic">
                                        <MDBListGroupItem>
                                            profil Singkat
                                        </MDBListGroupItem>
                                    </NavLink>
                                    <NavLink exact={true} to="/profile/basic">
                                        <MDBListGroupItem>
                                            Pendidikan Formal
                                        </MDBListGroupItem>
                                    </NavLink>
                                    <NavLink exact={true} to="/profile/basic">
                                        <MDBListGroupItem>
                                            Pengalaman Kerja
                                        </MDBListGroupItem>
                                    </NavLink>
                                    <NavLink exact={true} to="/profile/basic">
                                        <MDBListGroupItem>
                                            Pengalaman Organisasi
                                        </MDBListGroupItem>
                                    </NavLink>
                                    <NavLink exact={true} to="/profile/basic">
                                        <MDBListGroupItem>
                                            Penghargaan / Prestasi
                                        </MDBListGroupItem>
                                    </NavLink>
                                    <NavLink exact={true} to="/profile/basic">
                                        <MDBListGroupItem>
                                            Rekomendasi
                                        </MDBListGroupItem>
                                    </NavLink>
                                    <NavLink exact={true} to="/profile/basic">
                                        <MDBListGroupItem>
                                            Portfolio
                                        </MDBListGroupItem>
                                    </NavLink>
                                </MDBListGroup>
                            </MDBCol>
                        </MDBCol>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default SideNavJS