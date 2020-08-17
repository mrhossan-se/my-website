import React, {Component, Fragment} from 'react';
import TopNavigation from "../../component/topNavigation/TopNavigation";
import PageTop from "../../component/pageTop/PageTop";
import Services from "../../component/services/Services";
import ContractSection from "../../component/contractSecktion/ContractSection";
import Footer from "../../component/footer/Footer";

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
             <TopNavigation title='Services'/>
             <PageTop pageTitle='Get My Service'/>
             <Services/>
             <ContractSection/>
             <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;