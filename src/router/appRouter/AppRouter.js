import React, {Component, Fragment} from 'react';

import ServicePage from "../../pages/servicePage/ServicePage";
import CoursesPages from "../../pages/coursesPage/CoursesPages";
import PortFolioPage from "../../pages/portFolioPages/PortFolioPage";
import ContractPage from "../../pages/contractPage/ContractPage";
import AboutPage from "../../pages/aboutPages/AboutPage";
import HomePage from "../../pages/homePages/HomePage";
import {Route,Switch}from "react-router-dom";


class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/service' component={ServicePage}/>
                    <Route exact path='/course' component={CoursesPages}/>
                    <Route exact path='/portfolio' component={PortFolioPage}/>
                    <Route exact path='/contract' component={ContractPage}/>
                    <Route exact path='/about' component={AboutPage}/>
                </Switch>

            </Fragment>
        );
    }
}

export default AppRouter;