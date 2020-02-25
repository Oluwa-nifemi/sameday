import React, {useMemo, useState} from 'react';
import classes from './Order.module.css';
import Wrapper from "../../components/layout/Wrapper";
import {ReactComponent as Production} from "../../assets/icons/production.svg";
import {ReactComponent as RightIcon} from '../../assets/icons/right-arrow.svg'
import {ReactComponent as EyeCon} from '../../assets/icons/eye.svg'
import {ReactComponent as TickIcon} from '../../assets/icons/tick.svg'
import {ReactComponent as FileIcon} from '../../assets/icons/file.svg'
import {ReactComponent as Down} from '../../assets/icons/caret-down.svg'
import classNames from 'classnames'
import Dropdown from "../../components/Dropdown/Dropdown";
import frontImage from '../../assets/images/front.png'
import sideImage from '../../assets/images/side.png'
import sideImage2 from '../../assets/images/side-2.png'
import backImage from '../../assets/images/back.png'
import smallShirt from '../../assets/images/small-shirt.png'
import Checkbox from "../../components/Checkbox/Checkbox";
import {getProducts} from "../../data/products";
import {Link} from "react-router-dom";

const Order = ({match}) => {
    const {operationId} = match.params;
    const initialProducts = useMemo(() => getProducts(operationId).map((product) => {
        product.checked = false;
        return product
    }), [operationId]);
    const [products, setProducts] = useState(initialProducts);

    const toggleProductCheck = (index) => {
        const newProducts = [...products];
        newProducts[index].checked = !newProducts[index].checked;
        setProducts(newProducts);
    };

    const allChecked = useMemo(() => products.every(product => product.checked), [products]);

    const [deliveryMethod, setDeliveryMethod] = useState('Pickup Order');
    const [editOptionsActive, setEditOptionsActive] = useState(false);

    const [printType, setPrintType] = useState('Worksheet');
    const [printDropdownActive, setPrintDropdownActive] = useState(false);

    return (
        <Wrapper>
            <div className={classes.top}>
                <Link to={'/operations/production-house'} className={classes.backLink}>
                    <span className={classes.backButton}>
                        <RightIcon className={classes.backButtonIcon}/>
                    </span>
                    <span className={classes.backText}>
                        Back
                    </span>
                </Link>
                <span className={classes.topSplitLine}/>
                <Production className={classes.topHeaderIcon}/>
                <h1 className={classes.topHeader}>
                    Production House
                </h1>
            </div>
            <div className={classes.orderTopDetailsRow}>
                <div className={classes.verticalOrderRow}>
                    <h1 className={classes.orderName}>
                        Order: #{operationId}
                    </h1>
                    <p className={classes.orderSubtext}>
                        Account Setup > Delivery Method
                    </p>
                </div>
                <div>
                    <span className={classes.productionStatusLabel}>
                        Production Status {' '}
                    </span>
                    <span className={classes.productionStatusText}>
                        Running 2 of 4
                    </span>
                </div>
            </div>
            <div className={classes.orderDetailsRow}>
                <div className={classes.orderDetailsRowSection}>
                    <span className={classes.orderDetailsRowSectionHeader}>
                        Order Value
                    </span>
                    <span className={classes.orderDetailsRowSectionText}>
                        $40,000
                    </span>
                </div>
                <span className={classes.orderDetailsRowSplitLine}/>
                <div className={classes.orderDetailsRowSection}>
                    <span className={classes.orderDetailsRowSectionHeader}>
                        Order Date
                    </span>
                    <span className={classes.orderDetailsRowSectionText}>
                        25 - June - 2017
                    </span>
                </div>
                <span className={classes.orderDetailsRowSplitLine}/>
                <div className={classes.orderDetailsRowSection}>
                    <span className={classes.orderDetailsRowSectionHeader}>
                        Delivery Method
                    </span>
                    <div>
                        <span
                            className={classNames(classes.orderDetailsRowSectionText, classes.orderDetailsRowSectionTextSmall)}>
                            {deliveryMethod}
                        </span>
                        <button className={classes.orderDetailsRowSectionEditButton}
                                onClick={() => setEditOptionsActive(!editOptionsActive)}>
                            Can Edit
                            <Down className={classes.orderDetailsRowSectionEditButtonIcon}/>
                        </button>
                        <div
                            className={classNames(classes.dropdownOptions, editOptionsActive && classes.dropdownOptionsActive)}>
                            <button
                                className={classes.dropdownOption}
                                onClick={() => {
                                    setDeliveryMethod('Rush Shipping');
                                    setEditOptionsActive(false);
                                }}>
                                Rush Shipping
                            </button>
                            <button className={classes.dropdownOption} onClick={() => {
                                setDeliveryMethod('Pickup Order');
                                setEditOptionsActive(false);
                            }}>
                                Pickup Order
                            </button>
                        </div>
                    </div>
                </div>
                <span className={classes.orderDetailsRowSplitLine}/>
                <div className={classes.orderDetailsRowSection}>
                    <span className={classes.orderDetailsRowSectionHeader}>
                        Rush Option
                    </span>
                    <span
                        className={classNames(classes.orderDetailsRowSectionText, classes.orderDetailsRowSectionTextSmall)}>
                        <span className={classes.orderDetailsRowSectionRush}>
                            <TickIcon className={classes.orderDetailsRowSectionRushIcon}/>
                        </span>
                        Rush
                    </span>
                </div>
                <span className={classes.orderDetailsRowSplitLine}/>
                <div className={classes.orderDetailsRowSection}>
                    <span className={classes.orderDetailsRowSectionHeader}>
                        Status
                    </span>
                    <span
                        className={classNames(classes.orderDetailsRowSectionText, classes.orderDetailsRowSectionTextSmall)}>
                        Pending
                    </span>
                </div>
                <span className={classes.orderDetailsRowSplitLine}/>
                <div className={classes.orderDetailsRowSection}>
                    <span className={classes.orderDetailsRowSectionHeader}>
                        Requested By
                    </span>
                    <span
                        className={classNames(classes.orderDetailsRowSectionText, classes.orderDetailsRowSectionTextSmall)}>
                        25 - June - 2017
                    </span>
                    <div className={classes.orderDetailsRowSectionTimeLeft}>
                        <span className={classes.orderDetailsRowSectionTimeLeftLabel}>
                            Time Left
                        </span>
                        <span className={classes.orderDetailsRowSectionTimeLeftText}>
                            10:00:00
                        </span>
                    </div>
                </div>
                <span className={classes.orderDetailsRowSplitLine}/>
                <div className={classes.orderDetailsRowSection}>
                    <span className={classes.orderDetailsRowSectionHeader}>
                        Shipped or Picked Date
                    </span>
                    <span
                        className={classNames(classes.orderDetailsRowSectionText, classes.orderDetailsRowSectionTextSmall)}>
                        25 - June - 2017
                    </span>
                </div>
            </div>
            <div className={classes.productWrapper}>
                <div className={classes.productTop}>
                    <div className={classes.productTabs}>
                        <span className={classNames(classes.productTab, classes.productTabActive)}>
                            Product Details
                        </span>
                        <span className={classes.productTabsSplit}/>
                        <span className={classes.productTab}>
                            History / Notes
                        </span>
                    </div>
                    <div className={classes.productButtons}>
                        <div style={{display: 'flex'}}>
                            <button className={classes.printToggle}
                                    onClick={() => setPrintDropdownActive(!printDropdownActive)}>
                                {printType}
                                <Down className={classes.printToggleIcon}/>
                            </button>
                            <div
                                className={classNames(classes.dropdownOptions, printDropdownActive && classes.dropdownOptionsActive)}>
                                <button
                                    className={classes.dropdownOption}
                                    onClick={() => {
                                        setPrintType('Worksheet');
                                        setPrintDropdownActive(false);
                                    }}
                                >
                                    Worksheet
                                </button>
                                <button
                                    className={classes.dropdownOption}
                                    onClick={() => {
                                        setPrintType('Invoice Order');
                                        setPrintDropdownActive(false);
                                    }}
                                >
                                    Invoice
                                </button>
                            </div>
                        </div>
                        <button className={classes.printButton} disabled={printType === 'Worksheet'}>
                            Print
                        </button>
                        <span className={classes.addNoteButton}>
                            <FileIcon className={classes.addNoteButtonIcon}/>
                            <span className={classes.addNoteButtonText}>
                                Add Note
                            </span>
                        </span>
                        <Dropdown
                            text={'Complete Production'}
                            items={[
                                'Full Production',
                                'Partial Production'
                            ]}
                        />
                    </div>
                </div>
                <div className={classes.downloadArtRow}>
                    <h1 className={classes.downloadArtTitle}>
                        Product
                    </h1>
                    <button className={classes.downloadArtButton}>
                        Download Artwork
                    </button>
                </div>
                <div className={classes.itemsPreview}>
                    <div>
                        <img src={frontImage} alt="" className={classes.itemsPreviewImage}/>
                        <span className={classes.itemsPreviewText}>
                            Front
                        </span>
                    </div>
                    <div>
                        <img src={backImage} alt="" className={classes.itemsPreviewImage}/>
                        <span className={classes.itemsPreviewText}>
                            Back
                        </span>
                    </div>
                    <div>
                        <img src={sideImage} alt="" className={classes.itemsPreviewImage}/>
                        <span className={classes.itemsPreviewText}>
                            Side
                        </span>
                    </div>
                    <div>
                        <img src={sideImage2} alt="" className={classes.itemsPreviewImage}/>
                        <span className={classes.itemsPreviewText}>
                            Side
                        </span>
                    </div>
                </div>
                <div className={classNames(classes.tableRow, classes.tableRowHeader)}>
                    <Checkbox
                        checked={allChecked}
                        onCheck={() => {
                            if (allChecked) {
                                setProducts(products.map((product) => {
                                    product.checked = false;
                                    return product
                                }))
                            } else {
                                products.forEach((_, idx) => toggleProductCheck(idx))
                            }
                        }}
                    />
                    <span className={classes.tableHeaderText}>
                        Item #
                    </span>
                    <span className={classes.tableHeaderText}>
                        Details
                    </span>
                    <span className={classes.tableHeaderText}>
                        Production Type
                    </span>
                    <span className={classes.tableHeaderText}>
                        Colors
                    </span>
                    <span className={classes.tableHeaderText}>
                        Quantity
                    </span>
                    <span className={classes.tableHeaderText}>
                        Paid
                    </span>
                </div>
                <div className={classes.orderRows}>
                    {
                        products.map((product, index) => (
                            <OrderRow {...product} checkProduct={toggleProductCheck} index={index}/>
                        ))
                    }
                </div>
            </div>
        </Wrapper>
    );
};

const OrderRow = ({checked, item, details, colors, qty, paid, checkProduct, index}) => (
    <div className={classNames(classes.tableRow, classes.orderRow)}>
        <Checkbox
            checked={checked}
            onCheck={() => checkProduct(index)}
        />
        <span className={classes.tableRowText}>
            {item}
            <EyeCon className={classes.tableRowPreviewIcon}/>
            <img src={smallShirt} alt="Product" className={classes.tableRowPreviewImage}/>
            <div className={classes.rowItemsPreview}>
                <div>
                    <img src={frontImage} alt="" className={classes.rowItemsPreviewImage}/>
                    <span className={classes.rowItemsPreviewText}>
                        Front
                    </span>
                </div>
                <div>
                    <img src={backImage} alt="" className={classes.rowItemsPreviewImage}/>
                    <span className={classes.rowItemsPreviewText}>
                        Back
                    </span>
                </div>
                <div>
                    <img src={sideImage} alt="" className={classes.rowItemsPreviewImage}/>
                    <span className={classes.rowItemsPreviewText}>
                        Side
                    </span>
                </div>
                <div>
                    <img src={sideImage2} alt="" className={classes.rowItemsPreviewImage}/>
                    <span className={classes.rowItemsPreviewText}>
                        Side
                    </span>
                </div>
            </div>
        </span>
        <span className={classes.tableRowText}>
            {details}
        </span>
        <span className={classNames(classes.tableRowText, classes.tableRowTextRed, classes.tableRowTextBold)}>
            DTG Print
        </span>
        <span className={classes.tableRowItemColor}>
            {colors}
        </span>
        <span className={classes.tableRowText}>
            {qty}
        </span>
        <span>
            {
                paid ? (
                    <span>Paid in full</span>
                ) : (
                    <span>Payment not complete</span>
                )
            }
        </span>
    </div>
);

export default Order;