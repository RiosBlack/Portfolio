import Head from 'next/head';
import Header from 'components/Header';
import Image from 'next/image';
import CardRedes from 'components/CardRedes';
import CardContact from 'components/CardContact';
import { AiOutlineMail } from 'react-icons/ai';
import { useState } from 'react';

export default function Contact() {
    //State para trocar de idioma
    const [stateButton, setStateButton] = useState<boolean>(true);

    const setPort = () => {
        setStateButton(true);
        console.log(stateButton);
    };

    const setIngl = () => {
        setStateButton(false);
        console.log(stateButton);
    };

    return (
        <div className="bg-gradient-to-t from-gray-900 via-black to-black h-full lg:h-screen grid">
            <Head>
                <title>Portifolio Douglas Rios</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header clickPort={setPort} clickIngl={setIngl} />
            <div className="grid justify-items-center animate__animated animate__fadeInDown pt-5 lg:pt-0">
                <main className="container grid grid-cols-1 md:grid-cols-2 content-center justify-items-center px-6 lg:px-40">
                    <div className="grid justify-items-center ">
                        <Image
                            src={'/Photo2.png'}
                            width={400}
                            height={400}
                            alt=""
                        />
                        <div className="flex">
                            <div className='grid justify-items-center pr-5'>
                                <h1 className="font-semibold text-lg text-slate-200 animate-bounce pt-2">
                                    Me envie uma mensagem!
                                </h1>
                                <div className="w-12 h-12 mb-2 animate-pulse transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:brightness-50">
                                    <a href="https://wa.me/5575981414537">
                                        <Image
                                            src="/Whatsapp.svg"
                                            width="50"
                                            height="50"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                            <CardRedes />
                        </div>
                    </div>
                    <div className="flex justify-center items-center min-w-full py-5">
                        <div className="border border-slate-700 rounded-xl min-w-full py-2">
                            <h1 className="font-semibold text-lg text-slate-400 grid justify-items-center pb-2">
                                Me envie um E-mail
                                <AiOutlineMail className="animate-pulse" />
                            </h1>
                            <CardContact />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
