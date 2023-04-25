import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
    const {showHeaderImage, children} = props;
    return (
        <div>
            <Header showHeaderImage={showHeaderImage}/>
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
