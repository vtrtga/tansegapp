import Navbar from '@/components/Navbar/Navbar';
import Section from '@/components/Section/Section';
import { navItens } from '@/contents/NavbarContents';
import React from 'react';

function TansegLayout() {
    return(
        <div className="main-layout">
            <Navbar items={navItens}  className="flex"/>
            <Section />
            <Section />
            <Section />
            <Section />
            <Section />
        </div>
    )
}

export default TansegLayout;