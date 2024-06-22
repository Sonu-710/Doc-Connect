import React from "react";

import './SideDrawer';

const SideDrawer = props => { 
    return <aside className="side-drawer">{props.children}</aside>
}

export default SideDrawer;