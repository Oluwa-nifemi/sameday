import React from 'react';
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";
import {ReactComponent as Search} from "../../assets/icons/search.svg";
import {ReactComponent as Message} from "../../assets/icons/mail.svg";
import {ReactComponent as Market} from "../../assets/icons/store.svg";
import {ReactComponent as Notifications} from "../../assets/icons/notifications.svg";
import {ReactComponent as Down} from "../../assets/icons/caret-down.svg";
import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={classes.navBar}>
            <Logo className={classes.navBarLogo}/>
            <Line/>
            <div>
                <button className={classes.navBarSearch}>
                    <Search className={classes.navBarSearchIcon}/>
                </button>
            </div>
            <Line/>
            <div className={classes.navBarTextWrapper}>
                <NavIcon icon={Message} number={1}/>
                <span className={classes.navBarText}>
                    Message
                </span>
            </div>
            <Line/>
            <div className={classes.navBarTextWrapper}>
                <NavIcon icon={Market} number={1}/>
                <span className={classes.navBarText}>
                    Market Place
                </span>
                <Down className={classes.navBarDownIcon}/>
            </div>
            <Line/>
            <div className={classes.navBarTextWrapper}>
                <NavIcon icon={Notifications} number={1}/>
                <span className={classes.navBarText}>
                    Notifications
                </span>
            </div>
            <Line/>
            <div className={classes.navBarUser}>
                <img src="https://i.pravatar.cc/45" alt="User" className={classes.navBarUserImage}/>
                <div>
                    <span className={classes.navBarUserText}>
                        Me
                    </span>
                    <Down className={classes.navBarUserIcon}/>
                </div>
            </div>
        </nav>
    );
};

const Line = () => <span className={classes.navBarSplitLine}/>;

const NavIcon = ({icon: Icon, number = 0, className, ...props}) => (
    <div {...props} className={classes.navBarIconWrapper}>
        <Icon className={classes.navBarIcon}/>
        {
            number > 0 ? (
                <span className={classes.navBarIconNumber}>{number}</span>
            ) : null
        }
    </div>
);

export default NavBar;