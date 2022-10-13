import React from 'react';
import Image from 'next/image';

export default function CardRedes() {
    const redes = 'bg-red relative overflow-hidden w-12 h-12';

    return (
        <div>
            <div className="w-96 h-96 bg-white">
                <div className="relative w-12 h-11 rounded-full overflow-hidden">
                    <Image
                        src="/./PhotoProfile.jpg"
                        width="380"
                        height="360"
                        layout="responsive"
                    />
                </div>
            </div>
            <div>
                <h1>Douglas Rios</h1>
                <div>
                    <div className={redes}>
                        <a href="">
                            <Image
                                src=""
                                width="380"
                                height="360"
                                layout="responsive"
                            />
                        </a>
                    </div>
                    <div className={redes}>
                        <a href="">
                            <Image
                                src=""
                                width="380"
                                height="360"
                                layout="responsive"
                            />
                        </a>
                    </div>
                    <div className={redes}>
                        <a href="">
                            <Image
                                src=""
                                width="380"
                                height="360"
                                layout="responsive"
                            />
                        </a>
                    </div>
                    <div className={redes}>
                        <a href="">
                            <Image
                                src=""
                                width="380"
                                height="360"
                                layout="responsive"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
