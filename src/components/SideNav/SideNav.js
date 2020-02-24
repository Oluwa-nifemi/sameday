import React, {useState} from 'react';
import classes from './SideNav.module.css'
import {ReactComponent as DashboardIcon} from "../../assets/icons/dashboard.svg";
import {ReactComponent as OperationsIcon} from "../../assets/icons/operations.svg";
import {ReactComponent as RecordsIcon} from "../../assets/icons/records.svg";
import {ReactComponent as SupplyIcon} from "../../assets/icons/store.svg";
import {ReactComponent as MarketIcon} from "../../assets/icons/market.svg";
import {ReactComponent as ForumsIcon} from "../../assets/icons/forums.svg";
import {ReactComponent as CloseIcon} from "../../assets/icons/close.svg";
import {ReactComponent as MenuIcon} from "../../assets/icons/menu.svg";
import {ReactComponent as SettingsIcon} from "../../assets/icons/settings.svg";
import SideNavLink from "./SideNavLink/SideNavLink";
import classNames from 'classnames'

const navLinks = [
    {
        text: 'Dashboard',
        to: '/',
        icon: DashboardIcon
    },
    {
        text: 'Operations',
        icon: OperationsIcon,
        dropdownItems: [
            {
                text: 'Orders',
                number: 1,
                to: '/operations/orders'
            },
            {
                text: 'Production House',
                number: 1,
                to: '/operations/production-house'
            },
            {
                text: 'Bids',
                number: 1,
                to: '/operations/bids'
            },
            {
                text: 'Promotion / Discount',
                to: '/operations/promotions'
            },
            {
                text: 'Out Sourcing',
                to: '/operations/outsourcing'
            }
        ],
        to: '/operations'
    },
    {
        text: 'Records',
        to: '/records',
        icon: RecordsIcon
    },
    {
        text: 'Supply Store',
        to: '/supply-store',
        icon: SupplyIcon
    },
    {
        text: 'Market Place',
        to: '/market',
        icon: MarketIcon
    },
    {
        text: 'Forums',
        to: '/forums',
        icon: ForumsIcon,
        number: 1
    }
];

const SideNav = ({open,setOpen}) => {
    return (
        <aside className={classNames(classes.sidenav, open && classes.sidenavOpen)}>
            <button onClick={() => setOpen(!open)} className={classes.sidenavClose}>
                {
                    open ? <CloseIcon className={classes.sidenavCloseIcon}/> : <MenuIcon className={classes.sidenavCloseIcon}/>
                }
            </button>
            {
                navLinks.map((navProps) => (
                    <SideNavLink {...navProps} navClosed={!open} openNav={() => setOpen(true)}/>
                ))
            }
            <SideNavLink
                to={'/settings'}
                text={'Settings'}
                icon={SettingsIcon}
                className={classes.sidenavLastLink}
            />
        </aside>
    );
};



export default SideNav;