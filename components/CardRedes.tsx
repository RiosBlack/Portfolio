import React from 'react';
import Image from 'next/image';

export default function CardRedes() {
    const redes = 'relative overflow-hidden w-14 h-14';
    const efeito = 'hover:brightness-50 hover:animate-pulse';

    return (
        <div>
            <div className="w-96 h-96 bg-gradient-to-br from-[#92FFC0] to-[#10594C] rounded-tl-[80px] rounded-br-[80px] rounded-bl-xl rounded-tr-xl grid justify-items-center content-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-[#00E3CD] hover:border-white">
                    <Image
                        src="/./PhotoProfile.jpg"
                        width="160"
                        height="160"
                        layout="responsive"
                    />
                </div>

                <div className="w-3/4 grid justify-items-center">
                    <h1 className="w-full flex items-center justify-center text-4xl font-FontGeral mb-4 text-[#33425B]">
                        Douglas Rios
                    </h1>
                    <div className="flex items-center justify-center w-3/4 h-14 gap-2">
                        <div className={redes}>
                            <a href="" className={efeito}>
                                <Image
                                    src="/./linkedin.svg"
                                    width="50"
                                    height="50"
                                    layout="responsive"
                                />
                            </a>
                        </div>
                        <div className={redes}>
                            <a href="" className={efeito}>
                                <Image
                                    src="/./github.svg"
                                    width="50"
                                    height="50"
                                    layout="responsive"
                                />
                            </a>
                        </div>
                        <div className={redes}>
                            <a href="" className={efeito}>
                                <Image
                                    src="/./instagram.svg"
                                    width="50"
                                    height="50"
                                    layout="responsive"
                                />
                            </a>
                        </div>
                        <div className={redes}>
                            <a href="" className={efeito}>
                                <Image
                                    src="/./whatsapp.svg"
                                    width="50"
                                    height="50"
                                    layout="responsive"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
