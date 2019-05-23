import React, {Component} from 'react';
import { MDBContainer, MDBIcon, MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBRow,  } from 'mdbreact';
import Axios from 'axios'
import Pagination from 'react-js-pagination'

class JobList extends Component{
    constructor(props){
        super(props)
        this.state = {
            jobs:[],
            activePage:1,
            totalJobsCount:100,
        }
        
    }
    

    componentDidMount(){
        Axios.get('https://api.career.dev.usu.ac.id/job_vacancy?per_page=5')
        .then((response)=>{
            const jobs = response.data.payload.data
            this.setState({jobs:jobs})
            
        })
    }

    handlePadChange = (pageNumber) =>{
        console.log('https://api.career.dev.usu.ac.id/job_vacancy?per_page=5&page='+pageNumber)
        this.setState({activePage: pageNumber})
        
        Axios.get('https://api.career.dev.usu.ac.id/job_vacancy?per_page=5&page='+pageNumber)
        .then((response)=>{
            const jobs_perPage = response.data.payload.data
            // let dataL = response.data.payload.total_page
            console.log(response.data.payload.data)
            this.setState({jobs:jobs_perPage})
        })
    }


    render(){
        // const btnapply={backgroundColor:'#2bbd7e'};
        return (
            <MDBContainer className="JobContainer">
                <MDBRow>
                    <MDBCol md="12" className="mb-1">
                        <h3 className="h3-responsive mb-3">Lowongan Pekerjaan yang Tersedia</h3>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                {this.state.jobs.map(job=>
                    <MDBCard key={job.id_lowongan} className="brows-job-list">
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md="1" sm="2" className="p-sm">
                                    <div className="company-img">
                                        <a href="/detailFilm">
                                            <img className="img-fluid" alt="Logo Mitra" src={"https://api.career.dev.usu.ac.id/sources/mitra/"+job.id_mitra+".jpg"} />
                                        </a>
                                    </div>
                                </MDBCol>
                                <MDBCol md="6" sm="5">
                                    <div className="brows-job-position">
                                        <a href="/detailFilm">
                                            <h3 className="h3-responsive">{job.posisi}</h3>
                                        </a>
                                        <p>
                                            <span>{job.nama_mitra}</span>
                                            <span className="job-type">{job.jenis_lowongan}</span>
                                        </p>
                                    </div>
                                </MDBCol>
                                <MDBCol md="3" sm="3">
                                    <div className="brows-job-location">
                                        <p>
                                            <MDBIcon className="icon-location" icon="map-marker-alt" />
                                            <small className="job-location">
                                                {job.lokasi}
                                            </small>
                                        </p>
                                    </div>
                                </MDBCol>
                                <MDBCol md="2" sm="2">
                                    <div className="brows-job-link">
                                        <MDBBtn className="button-apply" href="">
                                            Apply Job
                                        </MDBBtn>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                )}
                </MDBRow>
                
                <MDBRow className="d-flex justify-content-center mt-4">
                    <Pagination
                        
                        prevPageText='prev'
                        nextPageText='next'
                        firstPageText='first'
                        lastPageText='last'
                        activePage={this.state.activePage}
                        
                        totalItemsCount={this.state.totalJobsCount}
                        // itemsCountPerPage={3}
                        onChange={this.handlePadChange}
                    />
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default JobList;