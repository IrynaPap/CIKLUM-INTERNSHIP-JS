import React from 'react';
import Header from './header';
import Dop from './dop';
import Footer from './footer';
import HeroBanner from './hero-banner';
import MailPart from './mail-part';

export default class App extends React.Component {
    render() {
        return (
            <div>
               <Header/>
                <HeroBanner/>
                <MailPart/>
                <Dop/>
                <Footer/>
            </div>
        );
    }
}