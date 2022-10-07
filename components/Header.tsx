import Image from 'next/image';
import React from 'react';
import Logo from '../public/Logo.png';
export default function Header() {
    const styleA =
        'border-2 border-transparent hover:transition-colors duration-500 hover:border-b-white hover:text-white';

    return (
        <div className="w-full font-FontGeral text-VerdeClaro-100">
            <header>
                <nav className="grid md:flex md:justify-between md:justify-items-center ">
                    <a
                        className="grid justify-items-center mb-2 md:ml-5"
                        href="./"
                    >
                        <Image
                            height={50}
                            width={150}
                            src={Logo}
                            alt="Bandeira do Brasil"
                        />
                    </a>
                    <ul className="grid grid-cols-2 gap-1 place-items-center md:flex md:mr-5 items-center">
                        <li className="md:pr-5">
                            <a href="" className={styleA}>
                                Home
                            </a>
                        </li>
                        <li className="md:pr-5">
                            <a className={styleA} href="">
                                Sobre Min
                            </a>
                        </li>
                        <li className="md:pr-5">
                            <a className={styleA} href="">
                                Habilidaes
                            </a>
                        </li>
                        <li className="md:pr-5">
                            <a className={styleA} href="">
                                Projetos
                            </a>
                        </li>
                        <li>
                            <a className={styleA} href="">
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>
                <div></div>
            </header>
        </div>
    );
}
