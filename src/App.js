import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/homePages/HomePage";
import PageTop from "./component/pageTop/PageTop";
import TopNavigation from "./component/topNavigation/TopNavigation";
import AboutDescription from "./component/aboutDescription/AboutDescription";
import AboutPage from "./pages/aboutPages/AboutPage";
import AllCourses from "./component/allCourses/AllCourses";
import CoursesPages from "./pages/coursesPage/CoursesPages";
import PortFolioPage from "./pages/portFolioPages/PortFolioPage";
import ContractSection from "./component/contractSecktion/ContractSection";
import ContractPage from "./pages/contractPage/ContractPage";
import ServicePage from "./pages/servicePage/ServicePage";
import AppRouter from "./router/appRouter/AppRouter";
import {BrowserRouter} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
              <AppRouter/>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
