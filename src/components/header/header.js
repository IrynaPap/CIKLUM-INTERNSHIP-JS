import React from 'react';
import classnames from 'classnames';
import styles from './assets/header-styles.purified.scss';
import logo from './assets/microsoft.png';


export default class Header extends React.Component {
    render() {
        return (
            <div className={styles.headerWrapper}>
                <div className={classnames(styles[ 'mscom-hp-theme-layout']) }>
                    <div data-view4="1" data-view3="1" data-view2="1" data-view1="1" data-cols="1">
                        <div className={classnames(styles[ 'span'], styles[ 'bp0-col-1-1'], styles[ 'bp2-col-1-1'], styles[ 'bp3-col-1-1'], styles[
                            'bp1-col-1-1'], styles[ 'sortable-control']) }></div>
                    </div>
                    <div className={classnames(styles[ 'row-fluid']) } data-view4="1" data-view3="1" data-view2="1" data-view1="1" data-cols="1">
                        <div className={classnames(styles[ 'span'], styles[ ' bp0-col-1-1'], styles[ 'bp1-col-1-1'], styles[ 'bp2-col-1-1'], styles[
                            'bp3-col-1-1'], styles[ 'mscom-fullwidth-view-1'], styles[ 'sortable-control']) }>
                            <div id={styles[ "13e5a8c3-a0b8-40be-9b01-3b2b55cfb6d2"]}>
                                <span className={classnames(styles[ 'page-data-sources']) }></span>

                                <div id={styles[ "shell-header"]} className={classnames(styles[ 'shell-header'], styles[ 'shell-responsive'], styles[
                                    'global-sticky']) } role="banner">
                                    <div className={classnames(styles[ 'shell-header-wrapper']) }>
                                        <div className={classnames(styles[ 'shell-header-top']) } data-bi-area="HeaderL0" data-bi-view="L0V1">
                                            <div className={classnames(styles[ 'shell-header-brand']) }>
                                                <a id={styles[ "srv_shellHeaderMicrosoftLogo"]} href="https://www.microsoft.com" title="Microsoft"
                                                    data-bi-name="BrandLogo" tabIndex="10" alt="Microsoft"></a>
                                                <img src={logo} alt="Microsoft" />
                                            </div>
                                            <div className={classnames(styles[ 'shell-header-nav-wrapper']) } role="navigation">
                                                <ul className={classnames(styles[ 'shell-header-nav']) } role="menubar" id={styles[ "srv_shellHeaderNav"]} data-bi-area="L1"
                                                    data-bi-view="Hovermenus">
                                                    <li className={classnames(styles[ 'shell-header-user-mobile-container']) }></li>
                                                    <li className={classnames(styles[ 'shell-header-dropdown']) } data-navcontainer="shellmenu_27_NavContainer">
                                                        <div id={styles[ "shellmenu_27"]} className={classnames(styles[ 'shell-header-dropdown-label']) }>
                                                            <a id={styles[ "Магазин-navigation"]} href="javascript:void(0)" role="button" aria-labelledby="shellmenu_27" aria-expanded="false"
                                                                data-bi-name="Store" data-bi-slot="1" tabIndex="20">Магазин</a>
                                                        </div>
                                                        <div className={classnames(styles[ 'shell-header-dropdown-content'], styles[ 'micro-header-display-none'], styles[
                                                            'micro-header-height-auto']) } aria-hidden="true" role="menu">
                                                            <dl className={classnames(styles[ 'shell-header-dropdown-tab']) }>
                                                                <dt id={styles[ "shellmenu_28"]} className={classnames(styles[
                                                                    'shell-header-dropdown-tab-label'], styles[ 'shell-header-L2menu-direct-link']) }>
                                                                    <a href="http://www.microsoftstore.com/store/msmea/home/locale.uk_UA/ThemeID.27659900/mktp.UA/Currency.UAH" tabIndex="20"
                                                                        data-bi-name="StoreHome">Домашня сторінка Магазину</a></dt>
                                                            </dl>
                                                            <dl className={classnames(styles[ 'shell-header-dropdown-tab']) }>
                                                                <dt id={styles[ "shellmenu_29"]} className={classnames(styles[
                                                                    'shell-header-dropdown-tab-label']) }>
                                                                    <a href="javascript:void(0)" role="button" tabIndex="20" data-bi-dnt="">
                                                                                Office
                                                                                <i className={classnames(styles['shell-icon-dropdown facing-right']) }></i>
                                                                            </a></dt>
                                                                <dd
                                                                    className={classnames(styles[ 'shell-header-dropdown-tab-content']) }
                                                                    data-col="0">
                                                                    <ul className={classnames(styles[ 'shell-header-dropdown-tab-list']) }>
                                                                        <li id={styles[ "shellmenu_30"]}>
                                                                            <a href="http://www.microsoftstore.com/store/msmea/uk_UA/cat/Office/categoryID.67655100" className={classnames(styles[
                                                                                'shell-l3-list-item']) } tabIndex="20" data-bi-name="Store_Office_AllOffice">
                                                                                            Всі версії Office
                                                                                        </a>
                                                                        </li>
                                                                        <li id={styles[ "shellmenu_31"]}><a href="http://www.microsoftstore.com/store/msmea/uk_UA/list/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BD%D1%96-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81%D0%B8-Office/categoryID.67662700/ThemeID.27659900/mktp.UA/Currency.UAH"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Office_OfficeSuites">
                                                                                        Програмні комплекси Office
                                                                                    </a></li>
                                                                        <li id={styles[ "shellmenu_32"]}><a href="http://www.microsoftstore.com/store/msmea/uk_UA/list/%D0%A3%D1%81%D1%96-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8-Office/categoryID.67663100/ThemeID.27659900/mktp.UA/Currency.UAH"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Store_Office_OfficeApps">
                                                                                        Усі програми Office
                                                                                    </a></li>
                                                                        <li id={styles[ "shellmenu_33"]}><a href="http://www.microsoftstore.com/store/msmea/uk_UA/cat/Office-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B0%D1%88%D0%BE%D0%B3%D0%BE-Mac/categoryID.69944600?icid=All_Office_subnav_22092015/ThemeID.27659900/mktp.UA/Currency.UAH"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Store_Office_OfficeForMac">
                                                                                        Office для вашого Mac
                                                                                    </a></li>
                                                                        <li id={styles[ "shellmenu_34"]}><a href="http://www.microsoftstore.com/store/msmea/uk_UA/cat/Office-365/categoryID.69943700"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Store_Office_Office365">
                                                                                        Office 365
                                                                                    </a></li>
                                                                        <li id={styles[ "shellmenu_35"]}><a href="http://www.microsoftstore.com/store/msmea/uk_UA/cat/%D0%9F%D0%BE%D1%80%D1%96%D0%B2%D0%BD%D1%8F%D0%BD%D0%BD%D1%8F-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BD%D0%B8%D1%85-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D0%B2-Office-/categoryID.70246500?icid=All_Office_subnav_22092015_Compare/ThemeID.27659900/mktp.UA/Currency.UAH"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Office_OfficeCompare">
                                                                                        Порівняння програмних комплексів Office
                                                                                    </a></li>
                                                                        <li id={styles[ "shellmenu_36"]}><a href="http://www.microsoftstore.com/store/msmea/uk_UA/list/%D0%9C%D0%BE%D0%B2%D0%BD%D1%96-%D0%BF%D0%B0%D0%BA%D0%B5%D1%82%D0%B8-Office/categoryID.67663000/ThemeID.27659900/mktp.UA/Currency.UAH"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Office_OfficeLanguagePack">
                                                                                        Мовні пакети Office
                                                                                    </a></li>
                                                                    </ul>
                                                                    </dd>
                                                            </dl>
                                                            <dl className={classnames(styles[ 'shell-header-dropdown-tab']) }>
                                                                <dt id={styles[ "shellmenu_37"]} className={classnames(styles[
                                                                    'shell-header-dropdown-tab-label']) }><a href="javascript:void(0)" role="button" tabIndex="20" data-bi-dnt="">
                                                                                        Windows
                                                                                        <i className={classnames(styles['shell-icon-dropdown facing-right']) }></i></a></dt>
                                                                <dd
                                                                    className={classnames(styles[ 'shell-header-dropdown-tab-content']) }
                                                                    data-col="0">
                                                                    <ul className={classnames(styles[ 'shell-header-dropdown-tab-list'])
                                                                        }>
                                                                        <li id={styles[ "shellmenu_38"]}><a href="http://www.microsoftstore.com/store/msmea/uk_UA/list/Windows-10-Home/categoryID.70050500/ThemeID.27659900/mktp.UA/Currency.UAH"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Store_Windows_Windows10Home">
                                                                                            Windows 10 Home
                                                                                        </a></li>
                                                                        <li id={styles[ "shellmenu_39"]}><a href="http://www.microsoftstore.com/store/msmea/uk_UA/list/Windows-10-Pro/categoryID.70047400/ThemeID.27659900/mktp.UA/Currency.UAH"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Store_Windows_WindowsPro">
                                                                                                Windows 10 Pro
                                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                    </dd>
                                                            </dl>
                                                        </div>
                                                    </li>
                                                    <li className={classnames(styles[ 'shell-header-dropdown']) } data-navcontainer="shellmenu_40_NavContainer">
                                                        <div id={styles[ "shellmenu_40"]} className={classnames(styles[
                                                            'shell-header-dropdown-label']) }><a id={styles[ "Продукти-navigation"]} href="javascript:void(0)" role="button"
                                                                aria-labelledby="shellmenu_40" aria-labelledby="shellmenu_40" aria-expanded="false"
                                                                data-bi-name="Products" data-bi-slot="2" tabIndex="20">
                                                                    Продукти
                                                                </a>
                                                        </div>
                                                        <div className={classnames(styles[ 'shell-header-dropdown-content'], styles[ 'micro-header-height-auto']) } aria-hidden="true"
                                                            role="menu">
                                                            <dl className={classnames(styles[ 'shell-header-dropdown-tab']) }>
                                                                <dt id={styles[ "shellmenu_41"]} className={classnames(styles[
                                                                    'shell-header-dropdown-tab-label']) }><a href="javascript:void(0)" role="button" tabIndex="20" data-bi-dnt="">
                                                                        Програмне забезпечення та служби
                                                                        <i className={classnames(styles['shell-icon-dropdown facing-right']) }></i></a></dt>
                                                                <dd
                                                                    className={classnames(styles[ 'shell-header-dropdown-tab-content']) }
                                                                    data-col="0">
                                                                    <ul className={classnames(styles[ 'shell-header-dropdown-tab-list'])
                                                                        }>
                                                                        <li id={styles[ "shellmenu_42"]}><a href="//www.microsoft.com/uk-ua/windows" className={classnames(styles[
                                                                                'shell-l3-list-item']) } tabIndex="20" data-bi-name="Products_SoftwareAndServices_Windows">
                                                                            Windows
                                                                        </a></li>
                                                                        <li id={styles[ "shellmenu_43"]}><a href="https://products.office.com/uk-UA/home?WT.mc_id=oan_winnav_office"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Products_SoftwareAndServices_Office">
                                                                            Office
                                                                        </a></li>
                                                                        <li id={styles[ "shellmenu_44"]}><a href="http://www.microsoft.com/uk-ua/download/default.aspx"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Products_SoftwareAndServices_FreeDownloadsAndSecurity">
                                                                            Безкоштовні завантаження та безпека
                                                                        </a></li>
                                                                        <li id={styles[ "shellmenu_45"]}><a href="http://windows.microsoft.com/uk-ua/internet-explorer/download-ie"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Products_SoftwareAndServices_InternetExplorer">
                                                                            Internet Explorer
                                                                        </a></li>
                                                                        <li id={styles[ "shellmenu_46"]}><a href="http://www.microsoft.com/uk-ua/windows/microsoft-edge"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Products_SoftwareAndServices_MicrosoftEdge">
                                                                            Microsoft Edge
                                                                        </a></li>
                                                                        <li id={styles[ "shellmenu_47"]}><a href="http://www.skype.com/uk/" className={classnames(styles[
                                                                                'shell-l3-list-item']) } tabIndex="20" data-bi-name="Products_SoftwareAndServices_Skype">
                                                                            Skype
                                                                        </a></li>
                                                                        <li id={styles[ "shellmenu_48"]}><a href="http://www.onenote.com/?WT.mc_id=oan_winnav_onenote"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Products_SoftwareAndServices_OneNote">
                                                                            OneNote
                                                                        </a></li>
                                                                    </ul>
                                                                    </dd>
                                                            </dl>
                                                            <dl className={classnames(styles[ 'shell-header-dropdown-tab']) }>
                                                                <dt id={styles[ "shellmenu_49"]} className={classnames(styles[
                                                                    'shell-header-dropdown-tab-label']) }><a href="javascript:void(0)" role="button" tabIndex="20" data-bi-dnt="">
                                                                            Пристрої та Xbox
                                                                            <i className={classnames(styles['shell-icon-dropdown facing-right']) }></i></a></dt>
                                                                <dd
                                                                    className={classnames(styles[ 'shell-header-dropdown-tab-content']) }
                                                                    data-col="0">
                                                                    <ul className={classnames(styles[ 'shell-header-dropdown-tab-list'])
                                                                        }>
                                                                        <li id={styles[ "shellmenu_50"]}><a href="https://www.microsoft.com/hardware/uk-ua" className={classnames(styles[
                                                                                'shell-l3-list-item']) } tabIndex="20" data-bi-name="Products_PCAccessories">
                                                                                Комп’ютерні аксесуари
                                                                            </a></li>
                                                                        <li id={styles[ "shellmenu_51"]}><a href="http://www.microsoft.com/uk-ua/mobile/ " className={classnames(styles[
                                                                                'shell-l3-list-item']) } tabIndex="20" data-bi-name="Products_DevicesAndXbox_LumiaPhones">
                                                                                Microsoft Lumia
                                                                            </a></li>
                                                                    </ul>
                                                                    </dd>
                                                            </dl>
                                                            <dl className={classnames(styles[ 'shell-header-dropdown-tab']) }>
                                                                <dt id={styles[ "shellmenu_52"]} className={classnames(styles[
                                                                    'shell-header-dropdown-tab-label']) }><a href="javascript:void(0)" role="button" tabIndex="20" data-bi-dnt="">
                                                                                Для бізнесу
                                                                                <i className={classnames(styles['shell-icon-dropdown facing-right']) }></i></a></dt>
                                                                <dd
                                                                    className={classnames(styles[ 'shell-header-dropdown-tab-content']) }
                                                                    data-col="0">
                                                                    <ul className={classnames(styles[ 'shell-header-dropdown-tab-list'])
                                                                        }>
                                                                        <li id={styles[ "shellmenu_53"]}><a href="http://azure.microsoft.com/uk-ua/" className={classnames(styles[
                                                                                'shell-l3-list-item']) } tabIndex="20" data-bi-name="Products_ForBusiness_MicrosoftAzure">
                                                                                    Microsoft Azure
                                                                                </a></li>
                                                                        <li id={styles[ "shellmenu_54"]}><a href="http://www.microsoft.com/uk-ua/dynamics/default.aspx"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Products_ForBusiness_MicrosoftDynamics">
                                                                                    Microsoft Dynamics
                                                                                </a></li>
                                                                        <li id={styles[ "shellmenu_55"]}><a href="https://www.microsoft.com/uk-ua/windows/business/default.aspx"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Products_ForBusiness_WindowsForBusiness">
                                                                                    Windows для бізнесу
                                                                                </a></li>
                                                                        <li id={styles[ "shellmenu_56"]}><a href="https://products.office.com/uk-UA/business/office?omkt=uk-UA&amp;WT.mc_id=oan_winnav_officebusn"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Products_ForBusiness_OfficeForBusiness">
                                                                                    Office для бізнесу
                                                                                </a></li>
                                                                        <li id={styles[ "shellmenu_57"]}><a href="http://www.skype.com/uk/business/" className={classnames(styles[
                                                                                'shell-l3-list-item']) } tabIndex="20" data-bi-name="Products_ForBusiness_SkypeForBusiness">
                                                                                    Skype для бізнесу
                                                                                </a></li>
                                                                        <li id={styles[ "shellmenu_58"]}><a href="https://www.microsoft.com/enterprise/uk-ua/default.aspx"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Products_ForBusiness_EnterpriseSolutions">
                                                                                    Корпоративні рішення
                                                                                </a></li>
                                                                        <li id={styles[ "shellmenu_59"]}><a href="http://www.microsoft.com/uk-ua/business/" className={classnames(styles[
                                                                                'shell-l3-list-item']) } tabIndex="20" data-bi-name="Products_ForBusiness_SmallBusinessSolutions">
                                                                                    Рішення для малого бізнесу
                                                                                </a></li>
                                                                        <li id={styles[ "shellmenu_60"]}><a href="https://pinpoint.microsoft.com/uk-ua" className={classnames(styles[
                                                                                'shell-l3-list-item']) } tabIndex="20" data-bi-name="Products_ForBusiness_FindASolutionsProvider">
                                                                                    Знайти постачальника рішень
                                                                                </a></li>
                                                                    </ul>
                                                                    </dd>
                                                            </dl>
                                                            <dl className={classnames(styles[ 'shell-header-dropdown-tab']) }>
                                                                <dt id={styles[ "shellmenu_61"]} className={classnames(styles[
                                                                    'shell-header-dropdown-tab-label']) }><a href="javascript:void(0)" role="button" tabIndex="20" data-bi-dnt="">
                                                                                    Для IT-фахівців і розробників
                                                                                    <i className={classnames(styles['shell-icon-dropdown'], ['facing-right']) }></i></a></dt>
                                                                <dd
                                                                    className={classnames(styles[ 'shell-header-dropdown-tab-content']) }
                                                                    data-col="0">
                                                                    <ul className={classnames(styles[ 'shell-header-dropdown-tab-list'])
                                                                        }>
                                                                        <li id={styles[ "shellmenu_62"]}><a href="https://dev.windows.com/en-us" className={classnames(styles[
                                                                                'shell-l3-list-item']) } tabIndex="20" data-bi-name="Products_DeveloperAndITPro_DevelopWindowsApps">
                                                                                        Розробка програм Windows
                                                                                    </a></li>
                                                                        <li id={styles[ "shellmenu_63"]}><a href="http://azure.microsoft.com/uk-ua/" className={classnames(styles[
                                                                                'shell-l3-list-item']) } tabIndex="20" data-bi-name="Products_ForDevelopersAndITPros_Azure">
                                                                                        Microsoft Azure
                                                                                    </a></li>
                                                                        <li id={styles[ "shellmenu_64"]}><a href="https://msdn.microsoft.com/uk-ua/dn308572" className={classnames(styles[
                                                                                'shell-l3-list-item']) } tabIndex="20" data-bi-name="Products_ForDevelopersAndITPros">
                                                                                        MSDN
                                                                                    </a></li>
                                                                        <li id={styles[ "shellmenu_65"]}><a href="http://www.visualstudio.com/" className={classnames(styles[
                                                                                'shell-l3-list-item']) } tabIndex="20" data-bi-name="Products_ForDevelopersAndITPros_VisualStudio">
                                                                                        Visual Studio
                                                                                    </a></li>
                                                                    </ul>
                                                                    </dd>
                                                            </dl>
                                                            <dl className={classnames(styles[ 'shell-header-dropdown-tab']) }>
                                                                <dt id={styles[ "shellmenu_66"]} className={classnames(styles[
                                                                    'shell-header-dropdown-tab-label']) }><a href="javascript:void(0)" role="button" tabIndex="20" data-bi-dnt="">
                                                                                        Освіта
                                                                                        <i className={classnames(styles['shell-icon-dropdown'], styles['facing-right']) }></i></a></dt>
                                                                <dd
                                                                    className={classnames(styles[ 'shell-header-dropdown-tab-content']) }
                                                                    data-col="0">
                                                                    <ul className={classnames(styles[ 'shell-header-dropdown-tab-list'])
                                                                        }>
                                                                        <li id={styles[ "shellmenu_67"]}><a href="https://www.microsoft.com/uk-ua/education/default.aspx"
                                                                                className={classnames(styles[ 'shell-l3-list-item']) } tabIndex="20"
                                                                                data-bi-name="Products_ForStudentsAndEducators_MicrosoftInEducation">
                                                                                            Освіта
                                                                                        </a></li>
                                                                    </ul>
                                                                    </dd>
                                                            </dl>
                                                        </div>
                                                    </li>
                                                    <li id={styles[ "l1_support"]} className={classnames(styles[ 'shell-header-dropdown-label']) }><a className={classnames(styles[ 'top-level-link-text'], styles[
                                                            'ctl_headerNavLink']) } tabIndex="20" href="https://support.microsoft.com/uk-ua" data-bi-name="Support"
                                                            data-bi-slot="3">
                                                                    Підтримка
                                                                </a></li>
                                                </ul>
                                            </div>
                                            <div className={classnames(styles[ 'shell-header-user-container']) }>
                                                <dl className={classnames(styles[ 'shell-header-user']) }>
                                                    <dt><span id={styles[ "meControl"]}><div className={classnames(styles['msame_Header'], styles['msame_unauth'], styles['micro-header-height-48']) } tabIndex="60"><div className={classnames(styles['msame_Header_name msame_TxtTrunc'], styles['micro-header-line-height-48']) }>Вхід</div><div className={classnames(styles['msame_Header_chev'], styles['micro-header-display-none']) }></div></div></span></dt>
                                                </dl>
                                            </div>
                                            <div className={classnames(styles['shell-header-nav-toggle']) }>
                                                <button className={classnames(styles['shell-header-toggle-menu']) } title="Змінити меню" type="button" data-bi-name="Toggle Menu" tabIndex="55">
                                                    <i className={classnames(styles['shell-icon-menu']) }></i>
                                                </button>
                                            </div>
                                            <ul className={classnames(styles[ 'shell-header-toggle']) }>
                                                <li><button className={classnames(styles['shell-header-toggle-search']) } type="button"
                                                        data-bi-name="Toggle Search Icon" title="Змінити пошук" tabIndex="45"><i className={classnames(styles['shell-icon-search']) }></i></button></li>
                                                <li>
                                                    <a id={styles[ "shell-header-shopping-cart-mobile"]} href="//www.microsoftstore.com/store/msmea/uk_UA/DisplayThreePgCheckoutShoppingCartPage"
                                                        className={classnames(styles[ 'shell-header-toggle-cart']) } title="Корзина" data-bi-name="Toggle Cart"
                                                        tabIndex="50"><i id={styles["toggle-shell-icon-cart"]} className={classnames(styles['shell-icon-cart']) }></i><span className={classnames(styles['sr-only']) }>Cart</span><span className={classnames(styles['shopping-cart-amount']) }>0</span></a>
                                                </li>
                                            </ul>
                                            <div className={classnames(styles[ 'shell-header-actions']) }>
                                                <form id={styles[ "srv_shellHeaderSearchForm"]} className={classnames(styles[ 'shell-search']) } role="search" action="https://www.microsoft.com/uk-ua/search/result.aspx"
                                                    method="GET" autoComplete="off">
                                                    <div className={classnames(styles[ 'shell-search-wrapper']) }><label htmlFor="cli_shellHeaderSearchInput" className={classnames(styles[
                                                            'sr-only']) }>Search Microsoft</label><input id={styles[ "cli_shellHeaderSearchInput"]}
                                                            type="search" title="Пошук на веб-сайті Microsoft.com" name="q" data-bi-dnt=""
                                                            placeholder="Пошук на веб-сайті Microsoft.com" maxLength="200" tabIndex="30"></input>
                                                        <input type="hidden" name="form" data-bi-dnt="" value="MSHOME"></input>
                                                        <button type="submit" title="Пошук" data-bi-dnt="" tabIndex="40"><i className={classnames(styles['shell-icon-search']) }></i><span className={classnames(styles['sr-only']) }>Search</span></button>
                                                        <div id={styles[ "cli_searchSuggestionsContainer"]} className={classnames(styles[ 'shell-search-dropdown-container']) }>
                                                            <div className={classnames(styles[ 'search-dropdown']) }>
                                                                <div className={classnames(styles[ 'dropdown-item']) }>
                                                                    <ul id={styles[ "cli_searchSuggestionsResults"]} data-bi-name="Search Suggestions" data-bi-source="UnifiedSearch"></ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className={classnames(styles[ 'shell-header-cart']) }><a id={styles[ "shell-header-shopping-cart"]} href="//www.microsoftstore.com/store/msmea/uk_UA/DisplayThreePgCheckoutShoppingCartPage"
                                                        data-bi-name="Shopping Cart" title="Корзина" tabIndex="50"><i className={classnames(styles['shell-icon-cart']) }></i><span className={classnames(styles['sr-only']) }>Cart</span><span className={classnames(styles['shopping-cart-amount']) }>0</span></a></div>
                                                <iframe id={styles[ "shell-cart-count"]} className={classnames(styles[ 'micro-header-display-none']) } data-src="//www.microsoftstore.com/store/msmea/uk_UA/Content/pbPage.CartSummary"
                                                    src="//www.microsoftstore.com/store/msmea/uk_UA/Content/pbPage.CartSummary"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}