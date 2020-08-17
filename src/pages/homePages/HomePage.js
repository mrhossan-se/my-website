import React, {Component,Fragment} from 'react';
import TopNavigation from "../../component/topNavigation/TopNavigation";
import TopBanner from "../../component/topBanner/TopBanner";
import Services from "../../component/services/Services";
import Analysis from "../../component/analysis/Analysis";
import Summary from "../../component/summary/Summary";
import RecentProjects from "../../component/recentProjects/RecentProjects";
import Courses from "../../component/courses/Courses";
import Video from "../../component/video/Video";
import ClientReview from "../../component/clientReview/ClientRe";
import Footer from "../../component/footer/Footer";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title='Home'/>
                <TopBanner/>
                <Services/>
                <Analysis/>
                <Summary/>
                <RecentProjects/>
                <Courses/>
                <Video/>
                <ClientReview/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;