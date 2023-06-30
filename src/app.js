import React from "react";
import Navbar from "./components/navbar";

import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Aboutme from "./components/pages/aboutme";
import Contactme from "./components/pages/contactme";
import Homepage from "./components/pages/homepage";
import Projects from "./components/pages/projects";
import Resume from "./components/pages/resume";

function App() {
    return (
        <div>
            <Router>
             <Navbar /> 
             <Switch>
                <Route path = '/' exact component={Homepage}/>
                <Route path = '/aboutme' exact component={Aboutme}/>
                <Route path = '/resume' exact component={Resume}/>
                <Route path = '/contactme' exact component={Contactme}/>
                <Route path = '/projects' exact component={Projects}/>
            </Switch>  
            </Router>
        </div>
    );
}

export default App;