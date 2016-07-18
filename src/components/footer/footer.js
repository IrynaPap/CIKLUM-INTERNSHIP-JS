import React from 'react';
import classnames from 'classnames';
import styles from './assets/footer-styles.purified.scss'

console.log(styles);


export default class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footerWrapper}>
                <footer id={ styles["ac-globalfooter"]} className={ classnames(styles['js'], styles['no-touch'], styles['svg'], styles['no-ie7'], styles['no-ie8']) } lang="en-US" data-analytics-region="global footer" role="contentinfo"
                    aria-labelledby={styles["ac-gf-label"]}>
                    <div className={ classnames(styles['ac-gf-content']) }>
                        <h2 className={ classnames(styles['ac-gf-label']) } id={styles["ac-gf-label"]}>Apple Footer</h2>
                        <nav className={ classnames(styles['ac-gf-directory'], styles['with-5-columns']) } aria-label="Apple Directory" role="navigation">
                            <div className={ classnames(styles['ac-gf-directory-column']) }>
                                <input className={ classnames(styles['ac-gf-directory-column-section-state']) } type="checkbox" id={styles["ac-gf-directory-column-section-state-products"]}/>
                                <div className={ classnames(styles['ac-gf-directory-column-section']) }>
                                    <label className={ classnames(styles['ac-gf-directory-column-section-label']) } htmlFor={styles["ac-gf-directory-column-section-state-products"]}>
                                        <h3 className={ classnames(styles['ac-gf-directory-column-section-title']) }>Shop and Learn</h3>
                                    </label>
                                    <a href="#ac-gf-directory-column-section-state-products" className={ classnames(styles['ac-gf-directory-column-section-anchor'], styles['ac-gf-directory-column-section-anchor-open']) }>
                                        <span className={ classnames(styles['ac-gf-directory-column-section-anchor-label']) }>Open Menu</span> </a>
                                    <a href="#" className={ classnames(styles['ac-gf-directory-column-section-anchor'], styles['ac-gf-directory-column-section-anchor-close']) }> <span className={ classnames(styles['ac-gf-directory-column-section-anchor-label']) }>Close Menu</span> </a>
                                    <ul className={ classnames(styles['ac-gf-directory-column-section-list']) }>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/mac/">Mac</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/ipad/">iPad</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/iphone/">iPhone</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/watch/">Watch</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/tv/">TV</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/music/">Music</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/itunes/">iTunes</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/ipod/">iPod</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/us/shop/goto/buy_accessories">Accessories</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/us/shop/goto/giftcards">Gift Cards</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={ classnames(styles['ac-gf-directory-column']) }><input className={ classnames(styles['ac-gf-directory-column-section-state']) } type="checkbox" id={styles["ac-gf-directory-column-section-state-storeservices"]}></input>
                                <div className={ classnames(styles['ac-gf-directory-column-section']) }>
                                    <label className={ classnames(styles['ac-gf-directory-column-section-label']) } htmlFor={styles["ac-gf-directory-column-section-state-storeservices"]}>
                                        <h3 className={ classnames(styles['ac-gf-directory-column-section-title']) }>Apple Store</h3>
                                    </label>
                                    <a href="#ac-gf-directory-column-section-state-storeservices" className={ classnames(styles['ac-gf-directory-column-section-anchor'], styles['ac-gf-directory-column-section-anchor-open']) }>
                                        <span className={ classnames(styles['ac-gf-directory-column-section-anchor-label']) }>Open Menu</span> </a>
                                    <a href="#" className={ classnames(styles['ac-gf-directory-column-section-anchor'], styles['ac-gf-directory-column-section-anchor-close']) }> <span className={ classnames(styles['ac-gf-directory-column-section-anchor-label']) }>Close Menu</span> </a>
                                    <ul className={ classnames(styles['ac-gf-directory-column-section-list']) }>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/retail/">Find a Store</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/retail/geniusbar/">Genius Bar</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/retail/learn/">Workshops and Learning</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/retail/learn/youth/">Youth Programs</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="https://itunes.apple.com/app/apple-store/id375380948?mt=8">Apple Store App</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/us/shop/goto/special_deals">Refurbished</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/us/shop/goto/payment_plan">Financing</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/us/shop/goto/reuse_and_recycle">Reuse and Recycling</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/us/shop/goto/account">Order Status</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/us/shop/goto/help">Shopping Help</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={ classnames(styles['ac-gf-directory-column']) }> <input className={ classnames(styles['ac-gf-directory-column-section-state']) } type="checkbox" id={styles["ac-gf-directory-column-section-state-education"]}></input>
                                <div className={ classnames(styles['ac-gf-directory-column-section']) }>
                                    <label className={ classnames(styles['ac-gf-directory-column-section-label']) } htmlFor={styles["ac-gf-directory-column-section-state-education"]}>
                                        <h3 className={ classnames(styles['ac-gf-directory-column-section-title']) }>For Education</h3>
                                    </label>
                                    <a href="#ac-gf-directory-column-section-state-education" className={ classnames(styles['ac-gf-directory-column-section-anchor'], styles['ac-gf-directory-column-section-anchor-open']) }>
                                        <span className={ classnames(styles['ac-gf-directory-column-section-anchor-label']) }>Open Menu</span> </a>
                                    <a href="#" className={ classnames(styles['ac-gf-directory-column-section-anchor'], styles['ac-gf-directory-column-section-anchor-close']) }> <span className={ classnames(styles['ac-gf-directory-column-section-anchor-label']) }>Close Menu</span> </a>
                                    <ul className={ classnames(styles['ac-gf-directory-column-section-list']) }>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/education/">Apple and Education</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/us/shop/goto/educationrouting">Shop for College</a></li>
                                    </ul>
                                </div> <input className={ classnames(styles['ac-gf-directory-column-section-state']) } type="checkbox" id={styles["ac-gf-directory-column-section-state-business"]}></input>
                                <div className={ classnames(styles['ac-gf-directory-column-section']) }>
                                    <label className={ classnames(styles['ac-gf-directory-column-section-label']) } htmlFor={styles["ac-gf-directory-column-section-state-business"]}>
                                        <h3 className={ classnames(styles['ac-gf-directory-column-section-title']) }>For Business</h3>
                                    </label>
                                    <a href="#ac-gf-directory-column-section-state-business" className={ classnames(styles['ac-gf-directory-column-section-anchor'], styles['ac-gf-directory-column-section-anchor-open']) }>
                                        <span className={ classnames(styles['ac-gf-directory-column-section-anchor-label']) }>Open Menu</span> </a>
                                    <a href="#" className={ classnames(styles['ac-gf-directory-column-section-anchor'], styles['ac-gf-directory-column-section-anchor-close']) }> <span className={ classnames(styles['ac-gf-directory-column-section-anchor-label']) }>Close Menu</span> </a>
                                    <ul className={ classnames(styles['ac-gf-directory-column-section-list']) }>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/business/">Apple and Business</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/retail/business/">ShophtmlFor Business</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={ classnames(styles['ac-gf-directory-column']) }> <input className={ classnames(styles['ac-gf-directory-column-section-state']) } type="checkbox" id={styles["ac-gf-directory-column-section-state-accounts"]}></input>
                                <div className={ classnames(styles['ac-gf-directory-column-section']) }>
                                    <label className={ classnames(styles['ac-gf-directory-column-section-label']) } htmlFor={styles["ac-gf-directory-column-section-state-accounts"]}>
                                        <h3 className={ classnames(styles['ac-gf-directory-column-section-title']) }>Account</h3>
                                    </label>
                                    <a href="#ac-gf-directory-column-section-state-accounts" className={ classnames(styles['ac-gf-directory-column-section-anchor'], styles['ac-gf-directory-column-section-anchor-open']) }>
                                        <span className={ classnames(styles['ac-gf-directory-column-section-anchor-label']) }>Open Menu</span> </a>
                                    <a href="#" className={ classnames(styles['ac-gf-directory-column-section-anchor'], styles['ac-gf-directory-column-section-anchor-close']) }> <span className={ classnames(styles['ac-gf-directory-column-section-anchor-label']) }>Close Menu</span> </a>
                                    <ul className={ classnames(styles['ac-gf-directory-column-section-list']) }>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="https://appleid.apple.com/us/">Manage Your Apple ID</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/us/shop/goto/account">Apple Store Account</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="https://www.icloud.com">iCloud.com</a></li>
                                    </ul>
                                </div> <input className={ classnames(styles['ac-gf-directory-column-section-state']) } type="checkbox" id={styles["ac-gf-directory-column-section-state-responsibility"]}></input>
                                <div className={ classnames(styles['ac-gf-directory-column-section']) }>
                                    <label className={ classnames(styles['ac-gf-directory-column-section-label']) } htmlFor={styles["ac-gf-directory-column-section-state-responsibility"]}>
                                        <h3 className={ classnames(styles['ac-gf-directory-column-section-title']) }>Apple Values</h3>
                                    </label>
                                    <a href="#ac-gf-directory-column-section-state-responsibility" className={ classnames(styles['ac-gf-directory-column-section-anchor'], styles['ac-gf-directory-column-section-anchor-open']) }>
                                        <span className={ classnames(styles['ac-gf-directory-column-section-anchor-label']) }>Open Menu</span> </a>
                                    <a href="#" className={ classnames(styles['ac-gf-directory-column-section-anchor'], styles['ac-gf-directory-column-section-anchor-close']) }> <span className={ classnames(styles['ac-gf-directory-column-section-anchor-label']) }>Close Menu</span> </a>
                                    <ul className={ classnames(styles['ac-gf-directory-column-section-list']) }>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/environment/">Environment</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/supplier-responsibility/">Supplier Responsibility</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/accessibility/">Accessibility</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/privacy/">Privacy</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/diversity/">Inclusion and Diversity</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/education/connectED/">Education</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={ classnames(styles['ac-gf-directory-column']) }> <input className={ classnames(styles['ac-gf-directory-column-section-state']) } type="checkbox" id={styles["ac-gf-directory-column-section-state-about"]}></input>
                                <div className={ classnames(styles['ac-gf-directory-column-section']) }>
                                    <label className={ classnames(styles['ac-gf-directory-column-section-label']) } htmlFor={styles["ac-gf-directory-column-section-state-about"]}>
                                        <h3 className={ classnames(styles['ac-gf-directory-column-section-title']) }>About Apple</h3>
                                    </label>
                                    <a href="#ac-gf-directory-column-section-state-about" className={ classnames(styles['ac-gf-directory-column-section-anchor'], styles['ac-gf-directory-column-section-anchor-open']) }>
                                        <span className={ classnames(styles['ac-gf-directory-column-section-anchor-label']) }>Open Menu</span> </a>
                                    <a href="#" className={ classnames(styles['ac-gf-directory-column-section-anchor'], styles['ac-gf-directory-column-section-anchor-close']) }> <span className={ classnames(styles['ac-gf-directory-column-section-anchor-label']) }>Close Menu</span> </a>
                                    <ul className={ classnames(styles['ac-gf-directory-column-section-list']) }>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/about/">Apple Info</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/newsroom/">Newsroom</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="http://www.apple.com/jobs/us/">Job Opportunities</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="http://investor.apple.com">Investors</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/apple-events/">Events</a></li>
                                        <li className={ classnames(styles['ac-gf-directory-column-section-item']) }><a className={ classnames(styles['ac-gf-directory-column-section-link']) } href="/contact/">Contact Apple</a></li>
                                    </ul>
                                </div>
                            </div>

                        </nav>

                        <section className={ classnames(styles['ac-gf-footer']) }>
                            <div className={ classnames(styles['ac-gf-footer-shop']) }> More ways to shop: Visit an <a href="/retail/">Apple Store</a>, <span className={ classnames(styles['nowrap']) }>call 1-800-MY-APPLE, or <a href="https://locate.apple.com/">find a reseller</a></span>.
                            </div>
                            <div className={ classnames(styles['ac-gf-footer-locale']) }>
                                <a className={ classnames(styles['ac-gf-footer-locale-link']) } href="/choose-your-country/" title="Choose your country or region" aria-label="United States. Choose your country or region"><span className={ classnames(styles['ac-gf-footer-locale-flag']) } data-hires="false"></span>United States</a>
                            </div>
                            <div className={ classnames(styles['ac-gf-footer-legal']) }>
                                <div className={ classnames(styles['ac-gf-footer-legal-copyright']) }>Copyright © 2016 Apple Inc.All rights reserved.</div>
                                <div className={ classnames(styles['ac-gf-footer-legal-links']) }> <a className={ classnames(styles['ac-gf-footer-legal-link']) } href="/privacy/privacy-policy/">Privacy Policy</a> <a className={ classnames(styles['ac-gf-footer-legal-link']) }
                                    href="/legal/internet-services/terms/site.html">Terms of Use</a> <a className={ classnames(styles['ac-gf-footer-legal-link']) }
                                        href="/us/shop/goto/help/sales_refunds">Sales and Refunds</a> <a className={ classnames(styles['ac-gf-footer-legal-link']) }
                                            href="/legal/">Legal</a> <a className={ classnames(styles['ac-gf-footer-legal-link']) } href="/sitemap/">Site Map</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </footer>
            </div>
        );
    }
}
