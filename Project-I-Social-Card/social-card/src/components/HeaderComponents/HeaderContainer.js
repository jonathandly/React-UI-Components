import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

function HeaderContainer() {
    return (
        <React.Fragment>
            <div className="header-wrapper">
                <ImageThumbnail />
            
            <div className="header-h1-content">
                <HeaderTitle />
                <HeaderContent />
                </div>
            </div>
        </React.Fragment>
    );
}

export default HeaderContainer;