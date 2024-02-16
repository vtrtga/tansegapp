"use client"

import React, { useState, useEffect, useRef } from 'react';
import { navItens } from '@/contents/NavbarContents';
import Menu from '@/components/Menu/Menu';
import Button from '../Button/Button';
import Image from 'next/image';
import HamburguerIcon from "@/images/HamburguerIcon.svg";
import "./HamburguerMenu.scss"

function HamburguerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleOnClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOnClickOutsideMenu = (e: MouseEvent | React.SyntheticEvent) => {
        if (!menuRef.current?.contains(e.target as Node)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOnClickOutsideMenu);

        return () => document.removeEventListener("mousedown", handleOnClickOutsideMenu);   
    })

    return (
        <>
            <div className='hamburguer-menu' ref={menuRef}>

            </div>
                <p>
                    <Button
                        className='btnMenu'
                        onClick={handleOnClick}
                    >
                        <Image src={HamburguerIcon} alt="hamburguer-icon"/>
                    </Button>
                </p>
        </>
    )
}

export default HamburguerMenu;