import React, {Component, Fragment} from 'react';
import PageTop from "../../component/pageTop/PageTop";
import ContractSection from "../../component/contractSecktion/ContractSection";
import Footer from "../../component/footer/Footer";
import TopNavigation from "../../component/topNavigation/TopNavigation";

class ContractPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title='Contract'/>
               <PageTop pageTitle='Contract'/>
               <ContractSection/>
               <Footer/>
            </Fragment>
        );
    }
}

export default ContractPage;