import React, {useState} from 'react';
import classes from './Wrapper.module.css'
import SideNav from "../SideNav/SideNav";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import classNames from 'classnames'

const Wrapper = ({children}) => {
    const [navOpen,setNavOpen] = useState(false);
    return (
        <div className={classNames(classes.container, navOpen && classes.containerNavOpen)}>
            <SideNav
                open={navOpen}
                setOpen={setNavOpen}
            />
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