import Navbar from '@/components/Navbar/Navbar';
import useNavbar from '@/components/Navbar/useNavbar';
import { navItens } from '@/contents/NavbarContents';
import React from 'react';

function TansegLayout() {
    const { buildNavItems } = useNavbar({
        items: navItens,
        classNames: "nav-item"
    })
    return(
        <div className="main-layout">

            <Navbar items={buildNavItems}  className="b-1"/>
        </div>
    )
}

export default TansegLayout;