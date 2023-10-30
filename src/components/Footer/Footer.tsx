'use client';
import Image from "next/image";
import "./Footer.scss";
import { FooterProps } from "./FooterTypes";
import Logo from "@/images/logo-edit.png";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import WhatsIcon from "@/images/icons/whatsapp.svg"

function Footer({ content }: FooterProps) {
    const { address, phones, email, link } = content;

    return (
        <footer className="footer-main">
            <div className="footer-logo">
                <Image src={Logo} alt="logo"/>
            </div>

            <div className="flex-container">
            <div className="footer-item">
            <h2>
                Endereço
            </h2>
            <div className="footer-address">
                    {address}
            </div>
            </div>

            <div className="footer-item">
                <h2>
                Social e Contatos
                </h2>
                    <div className="social-icons">
                {
                    phones?.map((phone, i) => <h4 className="footer-phone-child" key={i}>{phone}</h4>)
                }
                <InstagramLogoIcon className="icon"/>
                <LinkedInLogoIcon className="icon"/>
                <Image src={WhatsIcon}
                className="icon"
                alt="whatsapp icon"/>
            </div>
                </div>

            <div className="footer-item">
            <a className="" href={link?.path}>{link?.text}</a>
            </div>
                </div>

        </footer>
    )
}

export default Footer;