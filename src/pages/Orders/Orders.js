import React, {useMemo, useState} from 'react';
import Wrapper from "../../components/layout/Wrapper";
import classes from './Orders.module.css'
import {ReactComponent as Production} from "../../assets/icons/production.svg";
import {ReactComponent as Search} from "../../assets/icons/search.svg";
import {ReactComponent as Cancel} from "../../assets/icons/close.svg";
import {ReactComponent as Down} from "../../assets/icons/caret-down.svg";
import {ReactComponent as Clock} from "../../assets/icons/clock.svg";
import Dropdown from "../../components/Dropdown/Dropdown";
import classNames from 'classnames'
import smallShirt from '../../assets/images/small-shirt.png'
import {getProducts} from "../../data/products";
import {Link} from "react-router-dom";
import Checkbox from "../../components/Checkbox/Checkbox";

const Orders = () => {
    const [search, setSearch] = useState('');
    //Prevents from fetching products on every render
    const productsFromDb = useMemo(() => getProducts().map(product => {
        product.checked = false;
        return product;
    }), []);

    const [products, setProducts] = useState(productsFromDb);

    const allChecked = useMemo(() => products.every(product => product.checked), [products]);

    const checkProduct = (index) => {
        const newProducts = [...products];
        newProducts[index].checked = true;
        setProducts(newProducts);
    };

    return (
        <Wrapper>
            <div className={classes.top}>
                <Production className={classes.topHeaderIcon}/>
                <h1 className={classes.topHeader}>
                    Production House
                </h1>
                <Dropdown
                    text={'Complete Production'}
                    items={
                        [
                            'Full Production',
                            'Partial Production'
                        ]
                    }
                />
                <div className={classes.topInputWrapper}>
                    <Search/>
                    <input
                        type="text"
                        className={classes.topInput}
                        value={search}
                        onChange={({target}) => setSearch(target.value)}
                    />
                    <button className={classes.topInputClear} onClick={() => setSearch('')}>
                        <Cancel fill={'#818181'}/>
                    </button>
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.tabs}>
                    <div className={classNames(classes.tab, classes.tabActive)}>
                        All Productions
                        <span className={classes.tabNumber}>
                        192
                    </span>
                        <span className={classes.tabSplitLine}/>
                    </div>
                    <div className={classes.tab}>
                        Awaiting Production
                        <span className={classNames(classes.tabNumber, classes.tabNumberBg)}>
                        19
                    </span>
                        <span className={classes.tabSplitLine}/>
                    </div>
                    <div className={classes.tab}>
                        Completed
                    </div>
                </div>
                <div>
                    <button className={classes.printSheet}>
                        Print worksheet
                    </button>
                    <div className={classes.markComplete}>
                        <span className={classes.markCompleteText}>
                            Mark as Complete
                        </span>
                        <Down className={classes.markCompleteIcon}/>
                    </div>
                    <button className={classes.saveButton}>
                        Save
                    </button>
                </div>
            </div>
            <div className={classNames(classes.tableRow, classes.tableHeader)}>
                <Checkbox
                    onCheck={() => {
                        if (allChecked) {
                            setProducts(products.map((product) => {
                                product.checked = false;
                                return product
                            }))
                        } else {
                            products.forEach((_, idx) => checkProduct(idx))
                        }
                    }}
                    checked={allChecked}
                />
                <span className={classes.tableHeaderText}>Order #</span>
                <span className={classes.tableHeaderText}>Item #</span>
                <span className={classes.tableHeaderText}>Details</span>
                <span className={classes.tableHeaderText}>Color</span>
                <span className={classes.tableHeaderText}>Qty</span>
                <span className={classes.tableHeaderText}>Print Type</span>
                <span className={classes.tableHeaderText}>Delivery Method</span>
                <span className={classes.tableHeaderText}>Delivery Type</span>
                <span className={classes.tableHeaderText}>Production Status</span>
            </div>
            <div className={classes.orderRows}>
                {
                    products.map((product, idx) => (
                        <OrdersRow
                            {...product}
                            index={idx}
                            checkProduct={checkProduct}
                        />
                    ))
                }
            </div>
        </Wrapper>
    );
};

const OrdersRow = ({order, item, details, qty, colors, method, status, printType, timeLeft, checked, index, checkProduct}) => (
    <Link className={classNames(classes.tableRow, classes.orderRow)} to={`/operations/${order}`}>
        <Checkbox checked={checked} onCheck={() => checkProduct(index)}/>
        <span className={classes.tableRowText}>
            {order}
        </span>
        <span className={classes.tableRowText}>
            {item}
        </span>
        <span className={classes.tableRowItemFlexCenter}>
            <img src={smallShirt} alt="Product Preview" className={classes.tableRowPreviewImage}/>
            <div className={classes.itemsPreview}>
                <div>
                    <img src={smallShirt} alt="" className={classes.itemsPreviewImage}/>
                    <span className={classes.itemsPreviewText}>
                        Front
                    </span>
                </div>
                <div>
                    <img src={smallShirt} alt="" className={classes.itemsPreviewImage}/>
                    <span className={classes.itemsPreviewText}>
                        Back
                    </span>
                </div>
                <div>
                    <img src={smallShirt} alt="" className={classes.itemsPreviewImage}/>
                    <span className={classes.itemsPreviewText}>
                        Side
                    </span>
                </div>
                <div>
                    <img src={smallShirt} alt="" className={classes.itemsPreviewImage}/>
                    <span className={classes.itemsPreviewText}>
                        Side
                    </span>
                </div>
            </div>
            <span className={classes.tableRowText}>
               {details}
            </span>
        </span>
        <span className={classes.tableRowItemColor}>
            {colors}
        </span>
        <span className={classNames(classes.tableRowText, classes.tableRowTextBold)}>
            {qty}
        </span>
        <span className={classNames(classes.tableRowText, classes.tableRowTextBold)}>
            {printType}
        </span>
        {
            method === 'rush' ? (
                <span className={classes.tableRowItemFlexCenter}>
                    <Clock className={classes.tableRowRushIcon}/>
                    <span
                        className={
                            classNames(
                                classes.tableRowText,
                                classes.tableRowTextBold,
                                classes.tableRowTextRed
                            )
                        }
                    >
                        Rush Shipping
                    </span>
                </span>
            ) : (
                <span
                    className={classNames(
                        classes.tableRowText,
                        classes.tableRowTextBold,
                        classes.tableRowTextBlue
                    )}
                >
                    Pickup Order
                </span>
            )
        }
        <span className={classes.tableRowItemGrid}>
            <span className={classes.tableRowText}>
                23 - June - 2019
            </span>
            <span className={classes.tableRowText}>
                <span className={classes.tableRowTextGray}>
                    Time Left {'  '}
                </span>
                <span className={classes.tableRowTextLightGreen}>
                    {timeLeft}
                </span>
            </span>
        </span>
        <span
            className={classNames(
                classes.tableRowText,
                classes.tableRowTextBold,
                classes.tableRowTextDarkGreen
            )}
        >
            {status}
        </span>
    </Link>
);

export default Orders;