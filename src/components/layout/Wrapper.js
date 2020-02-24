import React from 'react';
import classes from './Wrapper.module.css'
import SideNav from "../SideNav/SideNav";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Wrapper = ({children}) => {
    return (
        <div className={classes.container}>
            <SideNav/>
            <div className={classes.mainContent}>
                <NavBar/>
                <div className={classes.contentContainer}>
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Wrapper;