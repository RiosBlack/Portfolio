import Logo from '../../public/Logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const styleA =
        'border-2 border-transparent text-gray-400 hover:transition-colors duration-500 hover:border-b-white hover:text-white text-base lg:text-sm hover:bg-white hover:bg-opacity-25 rounded-md';

    return (
        <div>
            <header>
                <nav className="grid lg:flex lg:justify-between lg:justify-items-center">
                    <a className="grid justify-items-center p-2" href="./">
                        <Image
                            height={50}
                            width={150}
                            src={Logo}
                            alt="Logo RiosCode"
                        />
                    </a>
                    <ul className="grid grid-cols-2 gap-1 place-items-center lg:flex lg:pr-5 items-center">
                        <li className="lg:pr-5">
                            <Link className={styleA} href="/">
                                Home
                            </Link>
                        </li>
                        <li className="lg:pr-5">
                            <Link className={styleA} href="/about">
                                Sobre
                            </Link>
                        </li>
                        <li className="lg:pr-5">
                            <Link className={styleA} href="/skill">
                                Conhecimentos
                            </Link>
                        </li>
                        <li className="lg:pr-5">
                            <Link className={styleA} href="/projects">
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link className={styleA} href="/contact">
                                Contato
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
