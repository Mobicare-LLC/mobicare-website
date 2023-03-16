import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
    const {hasContent, children} = props;
    return (
        <div>
            <Header hasContent={hasContent}/>
            {children}
            <Footer />
        </div>
    );
}

export default Layout;
