import React, {Component} from 'react'
import CoverTop from '../components/HomePage/coverTop.js'
import JobList from '../components/HomePage/joblist.js'
// import SideNavJS from '../components/jobseekerSideNav.js'
import SearchBox from '../components/HomePage/searchbox.js'

class HomePage extends Component{
    render(){
        return(
            <div>
                <CoverTop />
                <SearchBox />
                <JobList /> 
                {/* <SideNavJS /> */}
            </div>
        )
    }
}

export default HomePage