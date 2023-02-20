import React from 'react';
import Image from 'next/image';

export default function CardRedes() {
    const redes = 'relative overflow-hidden w-12 h-12';
    const efeito = 'hover:brightness-50 hover:animate-pulse';

    return (
        <div className="grid justify-items-center">
            <h1 className="flex items-center justify-center text-lg text-gray-400 font-semibold">
                Redes Sociais
            </h1>
            <div className="flex items-center justify-center gap-2">
                <div className={redes}>
                    <a
                        href="https://www.linkedin.com/in/RiosBlack/"
                        className={efeito}
                    >
                        <Image
                            src="/linkedin.svg"
                            width="30"
                            height="30"
                            layout="responsive"
                            alt=""
                        />
                    </a>
                </div>
                <div className={redes}>
                    <a href="https://github.com/RiosBlack" className={efeito}>
                        <Image
                            src="/github.svg"
                            width="50"
                            height="50"
                            layout="responsive"
                            alt=""
                        />
                    </a>
                </div>
                <div className={redes}>
                    <a
                        href="https://www.instagram.com/RiosBlack"
                        className={efeito}
                    >
                        <Image
                            src="/instagram.svg"
                            width="50"
                            height="50"
                            layout="responsive"
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}