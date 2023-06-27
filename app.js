import React from "react";
import Header from "./components/header";
import Seciton from "./components/section";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./app.css";
import Aboutme from "./components/pages/aboutme";
import Contactme from "./components/pages/contactme";
import Homepage from "./components/pages/homepage";
import Projects from "./components/pages/projects";
import Resume from "./components/pages/resume";

function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <Seciton />
            <Footer />
        </div>
    );
}

export default App;