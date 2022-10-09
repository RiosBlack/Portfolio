import React from 'react';
import Image from 'next/image';
import Style from './Skils.module.css';

export default function Skils() {
    return (
        <div className="grid justify-items-center w-2/5 h-1/5">
            <div className="w-48 h-48 flex items-center justify-center">
                <Image src="/./javascript.svg" width={180} height={180} />
            </div>
            <h1 className="font-FontGeral text-5xl text-VerdeClaro-100">
                Frameworkfffff
            </h1>
            <div className="bg-white h-8 rounded-full w-full">
                <div className={Style.Barra}></div>
            </div>
        </div>
    );
}
