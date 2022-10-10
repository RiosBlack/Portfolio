import React from 'react';
import Image from 'next/image';
import Style from './Skils.module.css';

export default function Skils() {
    return (
        <div className="grid w-2/5">
            <div className="grid justify-items-center h-1/5 mb-16">
                <div className="w-24 h-24 flex items-center justify-center relative">
                    <Image
                        src="/./javascript2.svg"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h1 className="font-FontGeral text-5xl text-VerdeClaro-100 py-3">
                    JavaScript
                </h1>
                <div className="bg-VerdeClaro-100 h-6 rounded-full w-full">
                    <div className={Style.BarraJs}></div>
                </div>
            </div>

            <div className="grid justify-items-center h-1/5 mb-16">
                <div className="w-24 h-24 flex items-center justify-center relative">
                    <Image
                        src="/./react2.svg"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h1 className="font-FontGeral text-5xl text-VerdeClaro-100 py-3">
                    React
                </h1>
                <div className="bg-VerdeClaro-100 h-6 rounded-full w-full">
                    <div className={Style.BarraRc}></div>
                </div>
            </div>

            <div className="grid justify-items-center h-1/5 mb-16">
                <div className="w-24 h-24 flex items-center justify-center relative">
                    <Image src="/./Java.svg" layout="fill" objectFit="cover" />
                </div>
                <h1 className="font-FontGeral text-5xl text-VerdeClaro-100 py-3">
                    Java
                </h1>
                <div className="bg-VerdeClaro-100 h-6 rounded-full w-full">
                    <div className={Style.BarraJa}></div>
                </div>
            </div>

            <div className="grid justify-items-center h-1/5 mb-16">
                <div className="w-24 h-24 flex items-center justify-center relative">
                    <Image src="/./Banco.svg" layout="fill" objectFit="cover" />
                </div>
                <h1 className="font-FontGeral text-5xl text-VerdeClaro-100 py-3">
                    Banco de dados
                </h1>
                <div className="bg-VerdeClaro-100 h-6 rounded-full w-full">
                    <div className={Style.BarraBa}></div>
                </div>
            </div>

            <div className="grid justify-items-center h-1/5">
                <div className="w-24 h-24 flex items-center justify-center relative">
                    <Image
                        src="/./Tailwind.svg"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h1 className="font-FontGeral text-5xl text-VerdeClaro-100 py-3">
                    Tailwindcss
                </h1>
                <div className="bg-VerdeClaro-100 h-6 rounded-full w-full">
                    <div className={Style.BarraTa}></div>
                </div>
            </div>
        </div>
    );
}
