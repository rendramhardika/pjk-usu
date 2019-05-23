import React, {Component} from 'react'
import {MDBContainer, MDBCol, MDBRow, MDBBtn } from 'mdbreact'

class SearchBox extends Component{
    render(){
        return(
            <MDBContainer fluid className="searchboxContainer">
                <MDBContainer>
                    <div className="from-group pt-4 pb-4">
                        <MDBRow>
                        <MDBCol md="4" sm="6" className="">
                            <input type="text" className="searchboxinput form-control form-control-lg " placeholder="Job Position"/>
                        </MDBCol>
                        <MDBCol md="4" sm="6">
                            <input type="text" className="searchboxinput form-control form-control-lg" placeholder="Job Category"/>
                        </MDBCol>
                        <MDBCol md="4" sm="6" className="rounded mb-2">
                            <MDBBtn className="btn btn-block rounded mb-1" role="button"  type="submit">
                                Search Job
                            </MDBBtn>
                        </MDBCol>
                        </MDBRow>
                    </div>
                </MDBContainer>
            </MDBContainer>
        )
    }
}

export default SearchBox