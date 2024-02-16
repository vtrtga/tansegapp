'use client'
import "./Navbar.scss";
import { NavbarProps } from './NavbarTypes';
import { Button } from "@mui/material";

function Navbar() {
    const listaItens = [
        "Início",
        "Produtos",
        "Caminhão",
        "Solicite uma proposta",
        "Formulário de Contato",
        "Quem somos",
        "Exibição da política de privacidade",
    ];

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {
                    listaItens.map((item, i) => {
                        return (
                            <li className="navbar-list--item" key={i}>
                                <p>{item}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar;