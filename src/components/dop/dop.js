import React from 'react';
import classnames from 'classnames';
import styles from './assets/dop-styles.purified.scss'

console.log(styles);

export default class Dop extends React.Component {
    render() {
        return (
            <div className={styles.dopWrapper}>
                <div className={classnames(styles['_4367'], styles['chrome'], styles[' webkit'], styles['win'], styles['x1'], styles['Locale_en_US']) } dir="ltr">

                    <div className={classnames(styles['_4f_5']) }>
                        <ul className={classnames(styles['_4f_6']) }>
                            <li className={classnames(styles['_4f_7']) }>
                                <a className={classnames(styles['_4f_8']) } href="https://www.oculus.com/rift/#eve-valkyrie">
                                    <div className={classnames(styles['_4f_a'], styles['bg-img-1']) }></div>
                                    <div className={classnames(styles['_4f_b']) }>
                                        <h4 className={classnames(styles['_4f_c']) }>FEATURED CONTENT</h4>
                                        <h3 className={classnames(styles['_4f_d']) }>EVE: Valkyrie</h3>
                                    </div>
                                </a>
                            </li>
                            <li className={classnames(styles['_4f_7']) }>
                                <a className={classnames(styles['_4f_8']) } href="https://www.oculus.com/rift/#luckys-tale">
                                    <div className={classnames(styles['_4f_a'], styles['bg-img-2']) }></div>
                                    <div className={classnames(styles['_4f_b']) }>
                                        <h4 className={classnames(styles['_4f_c']) }>INCLUDED WITH ALL RIFT PURCHASES</h4>
                                        <h3 className={classnames(styles['_4f_d']) }>Lucky &#039; s Tale</h3>
                                    </div>
                                </a>
                            </li>
                            <li className={classnames(styles['_4f_7']) }>
                                <a className={classnames(styles['_4f_8']) } href="https://www.oculus.com/blog/over-30-full-games-launching-with-oculus-touch-this-year/">
                                    <div className={classnames(styles['_4f_a'], styles['bg-img-3']) } > </div>
                                    <div className={classnames(styles['_4f_b']) }>
                                        <h4 className={classnames(styles['_4f_c']) }>FEATURED STORY</h4>
                                        <h3 className={classnames(styles['_4f_d']) }>Over 30 Full Games Launching with Oculus Touch this Year</h3>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        );
    }

}