import React, {Component, Fragment, useLayoutEffect} from 'react';
import  {Navbar,Nav } from "react-bootstrap";
import whiteLogo from '../../images/navLogoWhite.svg';
import blueLogo from '../../images/navlogoScrollBlue.svg'
import {NavLink} from "react-router-dom";



class TopNavigation extends Component {

    constructor(props) {
        super();
        this.state={
            navBarTitle: "navTitle",
            // navBarTitleScroll: 'navTitleScroll',
            navBarBg: 'navBarBackground',
            // navBarBgScroll: 'navBarBackgroundScroll',
            navBarIte: 'nabBarItem',
            // navBarIteScroll: 'nabBarItemScroll',
            navBarLogo: [whiteLogo],
            navVariant: 'dark',
            pageTitle: props.title,
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBarTitle: 'navTitleScroll',   navBarBg: 'navBarBackgroundScroll',  navBarIte: 'nabBarItemScroll',  navBarLogo: [blueLogo], navVariant: 'light',})
        }
       else if(window.scrollY<100){
           this.setState({ navBarTitle:'navTitle',   navBarBg: 'navBarBackground',  navBarIte: 'nabBarItem',  navBarLogo: [whiteLogo], navVariant: 'dark',})
        }
    }

componentDidMount() {
        window.addEventListener("scroll",this.onScroll)
}

    render() {

        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar className={this.state.navBarBg}  variant={this.state.navVariant}collapseOnSelect expand="lg"  fixed='top'>
                    <Navbar.Brand className={this.state.navBarTitle}> <img src={this.state.navBarLogo} alt='shimul'/>Mr Hossan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav>
                               <Nav.Link> <NavLink exact activeStyle={{color: '#00a8ee'}} to="/" className={this.state.navBarIte}>Home</NavLink> </Nav.Link>
                               <Nav.Link> <NavLink exact activeStyle={{color: '#00a8ee'}} to="/service" className={this.state.navBarIte}>Services</NavLink></Nav.Link>
                               <Nav.Link> <NavLink exact activeStyle={{color: '#00a8ee'}} to="/course" className={this.state.navBarIte}>Courses</NavLink></Nav.Link>
                               <Nav.Link> <NavLink exact activeStyle={{color: '#00a8ee'}} to="/portfolio" className={this.state.navBarIte}>Portfolio</NavLink></Nav.Link>
                               <Nav.Link> <NavLink exact activeStyle={{color: '#00a8ee'}} to="/contract" className={this.state.navBarIte}>Contact </NavLink></Nav.Link>
                               <Nav.Link> <NavLink exact activeStyle={{color: '#00a8ee'}} to="/about" className={this.state.navBarIte}>About</NavLink></Nav.Link>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;