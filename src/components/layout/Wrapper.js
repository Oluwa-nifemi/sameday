import React from 'react';
import classes from './Wrapper.module.css'
import SideNav from "../SideNav/SideNav";
import NavBar from "../NavBar/NavBar";

const Wrapper = ({children}) => {
    return (
        <div className={classes.container}>
            <SideNav/>
            <div className={classes.mainContent}>
                <NavBar/>
                {children}
            </div>
        </div>
    );
};

export default Wrapper;