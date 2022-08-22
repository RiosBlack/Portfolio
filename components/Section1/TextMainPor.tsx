import React, { useEffect } from 'react';
import 'animate.css';

export default function TextMainIng() {
    const styleText =
        'text-white text-9xl font-extrabold font-sans bg-clip-text text-transparent bg-gradient-to-r from-[#4ECDC4] to-[#556270] hover:opacity-50 animate__animated animate__fadeInLeftBig';

    const [showName, setShowName] = React.useState<boolean>(false);

    useEffect(() => {
        setInterval(() => {
            setShowName(true);
        }, 1000);
    }, []);

    return (
        <>
            <div className={styleText}>Meu</div>
            <div className={styleText}>Nome</div>
            <div className={styleText}>É</div>
            {showName ? (
                <div className="text-white text-9xl font-extrabold font-sans bg-clip-text text-transparent bg-gradient-to-r from-[#c21500] to-[#ffc500] animate-pulse hover:opacity-50 animate__animated animate__headShake">
                    Douglas
                </div>
            ) : (
                <div className="text-black text-9xl font-extrabold font-sans">
                    Douglas
                </div>
            )}
        </>
    );
}
