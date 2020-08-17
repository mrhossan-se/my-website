import React, {Component, Fragment} from 'react';
import TopNavigation from "../../component/topNavigation/TopNavigation";
import PageTop from "../../component/pageTop/PageTop";
import AllCourses from "../../component/allCourses/AllCourses";
import Footer from "../../component/footer/Footer";

class CoursesPages extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title='Course'/>
                <PageTop pageTitle='All Courses'/>
                <AllCourses/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursesPages;