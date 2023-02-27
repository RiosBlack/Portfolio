import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import CardTextPort from 'components/CardTextPort';
import Button from 'components/Button';
import 'animate.css';
import CardTextIng from 'components/CardTextIng';
import ButtonIng from 'components/ButtonIng';

export default function Index() {
    //State para aparecer o botão de baixar.
    const [buttonView, setButtonView] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setButtonView(true);
        }, 9000);
    }, [buttonView]);

    //State para trocar de idioma
    const [stateButton, setStateButton] = useState<boolean>(true);

    const setPort = () => {
        setStateButton(true);
    };

    const setIngl = () => {
        setButtonView(false);
        setStateButton(false);
    };

    return (
        <div className="bg-gradient-to-t from-gray-900 via-black to-black w-screen h-screen">
            <Head>
                <title>Portifolio Douglas Rios</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header clickPort={setPort} clickIngl={setIngl} />
            <main className="sm:h-[80%] flex justify-center items-center">
                <div className="w-screen grid justify-items-center animate__animated animate__fadeInDown pt-12 sm:pt-0">
                    <div className="w-[80%] rounded-t-md bg-slate-700 flex justify-between p-2">
                        <div className="flex justify-center items-center">
                            <div className="w-4 h-4 rounded-full bg-[#ED6A5E] hover:brightness-50 mr-2"></div>
                            <div className="w-4 h-4 rounded-full bg-[#F4BF4F] hover:brightness-50 mr-2"></div>
                            <div className="w-4 h-4 rounded-full bg-[#61C554] hover:brightness-50"></div>
                        </div>
                        <div className="font-bold text-gray-400">Terminal</div>
                        <div className="w-16"></div>
                    </div>
                    <div className="container flex items-center justify-start w-[80%] rounded-b-md border-2 border-slate-700 pl-2">
                        <div className="py-5">
                            {stateButton === true ? (
                                <CardTextPort />
                            ) : (
                                <CardTextIng />
                            )}

                            {buttonView === true ? <Button /> : ''}

                            {buttonView === false && stateButton === false ? (
                                <ButtonIng />
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="flex justify-center text-gray-800">
                    <p>Copyright - 2023 - RiosCode</p>
                </div>
            </footer>
        </div>
    );
}
