import Navbar from '@/components/Navbar/Navbar';
import { navItens } from '@/contents/NavbarContents';
import React from 'react';
import "@/app/styles.css";
import Footer from '../Footer/Footer';
import { content } from '../Footer/FooterContent';

interface TansegLayoutProps {
    children: React.ReactNode;
}

function TansegLayout({ children }: TansegLayoutProps) {
    return (
        <main className='main'>
            <Navbar items={navItens} />
            {children}
            <Footer content={content} />
        </main>
    )
}

export default TansegLayout;