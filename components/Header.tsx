import React from 'react';

export default function Header() {
    const styleA =
        'border-2 border-transparent hover:transition-colors duration-500 hover:border-b-white hover:text-white';

    return (
        <div className="w-full font-FontGeral text-VerdeClaro-100">
            <header>
                <nav className="flex justify-between">
                    <a className="ml-5" href="./">
                        <div>LOGO</div>
                    </a>
                    <ul className="flex mr-5">
                        <li className="pr-5">
                            <a href="" className={styleA}>
                                Home
                            </a>
                        </li>
                        <li className="pr-5">
                            <a className={styleA} href="">
                                Sobre Min
                            </a>
                        </li>
                        <li className="pr-5">
                            <a className={styleA} href="">
                                Habilidaes
                            </a>
                        </li>
                        <li className="pr-5">
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
