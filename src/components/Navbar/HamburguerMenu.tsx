import HamburguerIcon from '@/images/HamburguerIcon.svg'
import Image from 'next/image';
import NavbarItems from './NavbarItems';
import { navItens } from '@/contents/NavbarContents';

function HamburguerMenu () {
    return(
        <span className='w-6 h-6'>
            <Image src={HamburguerIcon} alt='hamburguer-icon' />
            <NavbarItems items={navItens} />
        </span>
    )
}

export default HamburguerMenu;