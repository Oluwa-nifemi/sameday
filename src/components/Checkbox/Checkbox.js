import React from 'react';
import classes from './checkbox.module.css'
import classNames from 'classnames'

const Checkbox = ({checked, onCheck}) => {
    return (
        <button
            className={
                classNames(
                    classes.checkbox,
                    checked && classes.checkboxChecked
                )
            }
            onClick={(e) => {
                e.stopPropagation();
                onCheck()
            }}
        >
            {checked && <span>&#10003;</span>}
        </button>
    );
};

export default Checkbox;