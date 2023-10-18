import Navbar from '@/components/Navbar/Navbar';
import { navItens } from '@/contents/NavbarContents';
import React from 'react';

interface TansegLayoutProps {
    children: React.ReactNode;
}

function TansegLayout({ children }: TansegLayoutProps) {
    return(
        <>
            <Navbar items={navItens} />
            <main>{children}</main>
        </>
    )
}

export default TansegLayout;