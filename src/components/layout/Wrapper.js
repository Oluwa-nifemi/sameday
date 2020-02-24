import React, {useState} from 'react';
import classes from './Wrapper.module.css'
import SideNav from "../SideNav/SideNav";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Wrapper = ({children}) => {
    const [navOpen,setNavOpen] = useState(false);
    return (
        <div className={classes.container}>
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