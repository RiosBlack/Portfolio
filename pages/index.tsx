import React from 'react';
import TextMain from '../components/TextMain';
import Photo from '../public/PhotoMain.jpg';
import Image from 'next/image';
import vetor1 from '../public/Vetor1.png';

export default function index() {
    return (
        <div className="w-full h-screen bg-black">
            <div className="flex items-center justify-between">
                <div className="w-1/2 flex items-center justify-center">
                    <div className="absolute bottom-0 left-0 opacity-20">
                        <Image src={vetor1} alt="vetor" />
                    </div>
                    <div>
                        <TextMain />
                    </div>
                </div>
                <div className="w-1/2 overflow-hidden opacity-40">
                    <Image src={Photo} alt="Foto da main" />
                </div>
            </div>
        </div>
    );
}
