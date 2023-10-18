"use client"

import React, { useState } from 'react';
import NavbarItems from './NavbarItems';
import { navItens } from '@/contents/NavbarContents';
import Menu from '@/components/Menu/Menu';
import Button from '../Button/Button';
import Image from 'next/image';
import HamburguerIcon from "@/images/HamburguerIcon.svg";
import classNames from 'classnames';

function HamburguerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className='hamburguer-menu'>
                <p>
                    <Button
                        className='w-1 h-1'
                        onClick={handleOnClick}
                    >
                        <Image src={HamburguerIcon} alt="hamburguer-icon"/>
                    </Button>
                </p>
                <Menu isOpen={isOpen}>
                    <NavbarItems items={navItens} />
                </Menu>
            </div>
        </>
    )
}

export default HamburguerMenu;