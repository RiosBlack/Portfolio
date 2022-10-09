import React from 'react';
import Image from 'next/image';

export default function CardFoto() {
    return (
        <div>
            <div className="w-auto h-auto relative">
                <div className="w-96 h-96 sm:w-[30rem] sm:h-[30rem] md:w-[40rem] md:h-[40rem] lg:w-[50rem] lg:h-[50rem]">
                    <Image
                        src="/./hacker.svg"
                        width="380"
                        height="360"
                        layout="responsive"
                    />
                </div>
                <div className="absolute z-50 -top-3 right-3 animate-[bounce_2s_ease-in-out_infinite] w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <Image src="/./react.svg" layout="fill" objectFit="cover" />
                </div>
                <div className="absolute z-50 left-0 top-16 animate-[bounce_3s_ease-in-out_infinite] w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <Image
                        src="/./javascript.svg"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="absolute z-50 left-20 sm:left-24 md:left-32 lg:left-48 top-36 sm:top-44 md:top-60 lg:top-72 animate-bounce w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                    <Image
                        src="/./logoCode.svg"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    );
}
