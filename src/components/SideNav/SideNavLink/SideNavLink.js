import React, {useMemo, useState} from 'react';
import classes from "./SideNavLink.module.css";
import {Link, NavLink, withRouter} from "react-router-dom";
import classNames from 'classnames'
import {ReactComponent as DownIcon} from "../../../assets/icons/caret-down.svg";

const SideNavLink = ({text, to, icon: Icon, number = 0, dropdownItems = [], location, className = '', navClosed, openNav}) => {
    const [open, setOpen] = useState(false);
    const dropdownActive = useMemo(() => to.split('/')[0] === location.pathname.split('/'),[location.pathname,to]);
    const openPosition = useMemo(() => {
        const activeIndex = dropdownItems.findIndex(({to}) => to === location.pathname);
        if(activeIndex !== -1){
            return (activeIndex + 1) * 50
        }
        return 0
    },[dropdownItems, location.pathname]);

    if (dropdownItems.length > 0) {
        return (
            <div className={classes.sidenavLinkDropdownWrapper}>
                {
                    openPosition !== 0 ? (
                        <span
                            className={classNames(
                                classes.sidenavLinkDropdownActiveBg,
                                navClosed && classes.sidenavLinkDropdownActiveBgSmall
                            )}
                            style={{
                                top: `${(open && !navClosed) ? openPosition : 0}px`
                            }}
                        />
                    ) : null
                }
                <button
                    className={
                        classNames(
                            classes.sidenavLink,
                            classes.sidenavLinkDropdown,
                            (!open && openPosition !== 0) && classes.sidenavLinkDropdownBlue,
                            navClosed && classes.sidenavLinkSmall,
                            dropdownActive && classes.sidenavLinkDropdownActive,
                            className
                        )}
                    onClick={() => {
                        setOpen(!open);
                        openNav();
                    }}
                >
                    <Icon className={classes.sidenavLinkIcon}/>
                    <span className={classes.sidenavLinkText}>{text}</span>
                    {
                        number > 0 ? (
                            <span className={classes.sidenavLinkNumber}>{number}</span>
                        ) : null
                    }
                    <DownIcon className={classes.sidenavLinkDropdownIcon}/>
                </button>
                <div
                    className={
                        classNames(
                            classes.sidenavLinkDropdownItems
                        )
                    }
                    style={{
                        height: `${(open && !navClosed) ? (40 * dropdownItems.length) : 0}px`,
                        transform: `scaleY(${open ? 1 : 0})`
                    }}
                >
                    {
                        dropdownItems.map(({text, number = 0, to}) => (
                            <Link
                                to={to}
                                className={classNames(
                                    classes.sidenavLinkDropdownItem,
                                    (open && to === location.pathname) && classes.sidenavLinkDropdownItemActive
                                )}
                            >
                                <span>{text}</span>
                                {
                                    number > 0 ? (
                                        <span className={classes.sidenavLinkDropdownItemNumber}>
                                            {number}
                                        </span>
                                    ) : null
                                }
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
    return (
        <NavLink
            className={classNames(classes.sidenavLink,className,navClosed && classes.sidenavLinkSmall)}
            to={to}
            activeClassName={classes.sidenavLinkActive}
            exact
        >
            <Icon className={classes.sidenavLinkIcon}/>
            <span className={classes.sidenavLinkText}>{text}</span>
            {
                number > 0 ? (
                    <span className={classes.sidenavLinkNumber}>{number}</span>
                ) : null
            }
        </NavLink>
    )
};

export default withRouter(SideNavLink);