import React, {useState} from 'react';
import classes from './Dropdown.module.css'
import {ReactComponent as Down} from "../../assets/icons/caret-down.svg";
import classNames from 'classnames'

const Dropdown = ({text, items}) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button
                className={classes.dropdownButton}
                onClick={() => setOpen(!open)}
            >
                <span className={classes.dropdownButtonText}>
                    {text}
                </span>
                <Down className={classes.dropdownButtonIcon}/>
            </button>
            <div className={classNames(classes.dropdownItems, open && classes.dropdownItemsActive)}>
                {
                    items.map((item) => (
                        <button className={classes.dropdownItem} onClick={() => setOpen(false)}>{item}</button>
                    ))
                }
            </div>
        </div>
    );
};

export default Dropdown;