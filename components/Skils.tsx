import React from 'react';
import Image from 'next/image';
import Style from './Skils.module.css';

export default function Skils() {
    const image = 'w-24 h-24 flex items-center justify-center relative';
    const title =
        'font-FontGeral text-5xl text-VerdeClaro-100 text-center py-3';
    const barra = 'bg-VerdeClaro-100 h-6 rounded-full w-full';
    const divPrincipal =
        'grid justify-items-center h-1/5 mb-16 md:mb-0 md:m-5';

    return (
        <div className="grid overflow-hidden w-2/4 md:grid-cols-2 md:w-3/4 lg:flex lg:w-full">
            <div className={divPrincipal}>
                <div className={image}>
                    <Image
                        src="/./javascript2.svg"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h1 className={title}>JavaScript</h1>
                <div className={barra}>
                    <div className={Style.BarraJs}></div>
                </div>
            </div>
            <div className={divPrincipal}>
                <div className={image}>
                    <Image
                        src="/./react2.svg"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h1 className={title}>React</h1>
                <div className={barra}>
                    <div className={Style.BarraRc}></div>
                </div>
            </div>

            <div className={divPrincipal}>
                <div className={image}>
                    <Image src="/./Java.svg" layout="fill" objectFit="cover" />
                </div>
                <h1 className={title}>Java</h1>
                <div className={barra}>
                    <div className={Style.BarraJa}></div>
                </div>
            </div>

            <div className={divPrincipal}>
                <div className={image}>
                    <Image src="/./Banco.svg" layout="fill" objectFit="cover" />
                </div>
                <h1 className={title}>Banco de dados</h1>
                <div className={barra}>
                    <div className={Style.BarraBa}></div>
                </div>
            </div>

            <div className={divPrincipal}>
                <div className={image}>
                    <Image
                        src="/./Tailwind.svg"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h1 className={title}>Tailwindcss</h1>
                <div className={barra}>
                    <div className={Style.BarraTa}></div>
                </div>
            </div>
        </div>
    );
}
