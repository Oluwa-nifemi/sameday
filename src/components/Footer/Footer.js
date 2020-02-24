import React from 'react';
import classes from './footer.module.css'
import appleIcon from '../../assets/icons/apple.svg'
import playIcon from '../../assets/icons/google-play-store.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import igIcon from '../../assets/icons/instagram.svg'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div>
                <p className={classes.footerSectionTitle}>
                    Download App
                </p>
                <div className={classes.playStoreIcons}>
                    <span className={classes.playStoreIcon}>
                        <img src={appleIcon} alt="Apple Link" className={classes.playStoreIconImage}/>
                    </span>
                    <span className={classes.playStoreIcon}>
                        <img src={playIcon} alt="Google Play Link" className={classes.playStoreIconImage}/>
                    </span>
                </div>
            </div>
            <div>
                <p className={classes.footerDescriptionText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto consectetur consequuntur dolorum eum excepturi exercitationem id libero maxime nemo nulla numquam porro praesentium quo, quos sint suscipit tempora velit.
                </p>
                <div className={classes.footerLinks}>
                    <span className={classes.footerLink}>
                        Lorem ipsum
                    </span>
                    <span className={classes.footerLink}>
                        Lorem ipsum
                    </span>
                    <span className={classes.footerLink}>
                        Lorem ipsum
                    </span>
                </div>
            </div>
            <div>
                <p className={classes.footerSectionTitle}>
                    Contact Us
                </p>
                <div className={classes.footerSocialMediaLinks}>
                    <img src={twitterIcon} alt="" className={classes.footerSocialMediaLink}/>
                    <img src={facebookIcon} alt="" className={classes.footerSocialMediaLink}/>
                    <img src={igIcon} alt="" className={classes.footerSocialMediaLink}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;