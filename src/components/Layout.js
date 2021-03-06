import React from 'react';

import useSiteMetadata from '../hooks/useSiteMetadata';
import Header from './Header';

const mt5rem = {
    marginTop : "5rem"
};

const Layout=( { children, allPosts }) => {
    const { title, description } = useSiteMetadata();

    return <div>
            <Header 
            siteTitle={ title }
            siteDescription={ description } 
            allPosts={ allPosts }/>
            <div 
            style={ mt5rem }
            className="container-xl">
                { children }
            </div>
            </div>
    };

export default Layout;