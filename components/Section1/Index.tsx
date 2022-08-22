import React, { useState } from 'react';
import TextMainIng from '../Section1/TextMainIng';
import TextMainPor from '../Section1/TextMainPor';
import Photo from '../../public/PhotoMain.jpg';
import Image from 'next/image';
import vetor1 from '../../public/Vetor1.png';
import ButtonIng from '../Section1/ButtonIng';
import ButtonPor from '../Section1/ButtonPor';

export default function Section1() {
    const [buttonPot, setButonTex] = useState<boolean>(false);

    function ChangeTextPor() {
        setButonTex(true);
    }

    function ChangeTextIng() {
        setButonTex(false);
    }
    return (
        <>
            <div className="flex pt-3 absolute left-1/2 -translate-x-1/2 w-auto z-10">
                <div className="pr-3 w-auto" onClick={ChangeTextIng}>
                    <ButtonIng />
                </div>
                <div className="w-auto" onClick={ChangeTextPor}>
                    <ButtonPor />
                </div>
            </div>
            <div className="flex items-center justify-between z-0">
                <div className="w-1/2 flex items-center justify-center">
                    <div className="absolute bottom-0 left-0 opacity-20">
                        <Image src={vetor1} alt="vetor" />
                    </div>
                    <div>
                        {buttonPot === false ? (
                            <TextMainIng />
                        ) : (
                            <TextMainPor />
                        )}
                    </div>
                </div>
                <div className="w-1/2 overflow-hidden bg-center opacity-40 z-0 ">
                    <Image src={Photo} alt="Foto da main" />
                </div>
            </div>
        </>
    );
}
