import React, {Component} from 'react'
import {MDBView, MDBMask} from 'mdbreact'

class CoverTop extends Component{
    render(){
        return(
            <div>
                <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
                    <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
                        <strong className="h2-responsive">Career Development Center</strong>
                        <h1 className="h1-responsive">Universitas Sumatera Utara</h1>
                    </MDBMask>
                </MDBView>
            </div>
        )
    }
}

export default CoverTop