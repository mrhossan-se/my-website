import React, {Component, Fragment} from 'react';
import  {Container,  Row, Col} from "react-bootstrap";
import  {ResponsiveContainer, Tooltip,XAxis, BarChart, Bar} from "recharts";

class Analysis extends Component {

    constructor() {
        super();
        this.state={
            data:[
                {Technology: 'JAVA', Projects: 100},
                {Technology: 'Kotlin', Projects: 40},
                {Technology: 'Sql', Projects: 90},
                {Technology: 'Bootstrap', Projects: 95},
                {Technology: 'Jquery', Projects: 60},
                {Technology: 'React', Projects: 90},
                {Technology: 'Php', Projects: 100},
                {Technology: 'Angular', Projects: 65}
            ]
        }
    }

    render() {
        let blue="rgba(63, 127, 191.08)"
        return (
            <Fragment>
                <Container>
                    <h1 className="text-center mainServiceTitle">Technology Used</h1>
                        <Row>
                            <Col  style={{width: '100%', height: '300px'}} lg={6} md={12} sm={12}>
                                <ResponsiveContainer>
                                    <BarChart width={100} height={300} data={this.state.data}>
                                        <XAxis dataKey="Technology"/>
                                        <Tooltip/>
                                        <Bar dataKey="Projects" fill={blue} > </Bar>
                                    </BarChart>
                                </ResponsiveContainer>


                            </Col>

                            <Col lg={6} md={12} sm={12}>
                                <p>To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB.</p>
                                <p>Firebase database system is used where it is necessary to provide realtime data flow facilities. I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application.</p>
                                <p>According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. Application security is a big deal for commercial application.I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.</p>
                            </Col>
                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;