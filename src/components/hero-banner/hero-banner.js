import React from 'react';
import classnames from 'classnames';
import styles from './assets/hero-banner-styles.purified.scss'


export default class HeroBanner extends React.Component {
    render() {
        return (
            <section className={ styles.bodyWrapper }>
                <div className={ classnames(styles.ru, styles['business-2015--exp_GRAY-BACKGROUND'], styles['business-2015--lux'], styles['business-2015--lux--V1'], styles['business-2015--lux-photo'], styles['business-2015'], styles.windows, styles['business-theme']) } dir="ltr">
                    <main>
                        <section className={ classnames(styles.hero, styles['hero--subline'], styles['hero--female']) }>
                            <div className={ classnames(styles["hero__background-container"], styles['hero__background-container--female']) }></div>
                            <div className={ styles['top-section']}>
                                <div className={ styles['top-section__container']}>
                                    <h1 className={ styles['hero__header']}>Безопасный доступ, синхронизация и совместная работа</h1>
                                    <h2 className={ styles['hero__sub-header']}>
                                        Хранение и безопасный доступ к данным&nbsp; —&nbsp; аккаунты Dropbox Business пользуются доверием у системных администраторов и нравятся пользователям.
                                    </h2>
                                    <div className="try-business-cta">
                                        <a href="/business/try" target="" className={ classnames(styles['try-business-cta__button'], styles['button-big'], styles['button-primary']) }>Попробуйте бесплатную 30-дневную ознакомительную версию</a>
                                        <span className={ classnames(styles['try-business-cta__footer'], styles['no-break']) }>или <a href="/business/buy">купите прямо сейчас</a></span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </section>
        );
    }

}