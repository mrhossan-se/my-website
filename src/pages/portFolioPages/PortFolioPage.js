import React, {Component, Fragment} from 'react';
import PageTop from "../../component/pageTop/PageTop";
import TopNavigation from "../../component/topNavigation/TopNavigation";
import AllProjects from "../../component/allProjects/AllProjects";
import Footer from "../../component/footer/Footer";

class PortFolioPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title='Portfolio'/>
                <PageTop pageTitle="Portfolio"/>
                <AllProjects/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PortFolioPage;