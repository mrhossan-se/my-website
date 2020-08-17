import React, {Component, Fragment} from 'react';
import TopNavigation from "../../component/topNavigation/TopNavigation";
import PageTop from "../../component/pageTop/PageTop";
import AboutDescription from "../../component/aboutDescription/AboutDescription";
import Footer from "../../component/footer/Footer";

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title='About'/>
                <PageTop pageTitle='About Me'/>
                <AboutDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;