import React from 'react';

export const SideBarAnimated = ({width, height, children}) => {
    return (
        <div className="side-bar" style={{width:width, minHeight:height}}>
            <React.Fragment>{children}</React.Fragment>
        </div>
    )
};