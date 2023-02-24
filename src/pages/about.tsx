import Head from 'next/head';
import Header from 'components/Header';
import Image from 'next/image';
import CardRedes from 'components/CardRedes';
import { useState } from 'react';

export default function About() {
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
        <div className="bg-gradient-to-t from-gray-900 via-black to-black h-full md:h-screen grid">
            <Head>
                <title>Portifolio Douglas Rios</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header clickPort={setPort} clickIngl={setIngl} />
            <div className="grid justify-items-center animate__animated animate__fadeInDown pt-5 lg:pt-0">
                <main className="container grid grid-cols-1 md:grid-cols-2 content-center justify-items-center px-6 lg:px-40 lg:pb-16 sm:pb-7">
                    <div className="grid justify-items-center ">
                        <Image
                            src={'/Photo1.png'}
                            width={400}
                            height={400}
                            alt=""
                        />
                        <CardRedes />
                    </div>
                    <div className="grid justify-items-center content-center ">
                        <p className="text-lg text-justify text-gray-400 py-5 md:py-2">
                            Sou um estudante de programação apaixonado por
                            tecnologia. Gosto bastante de trabalhar com dados,
                            de resolver problemas e de adquirir novos
                            conhecimentos. Tenho 10 anos de experiência em área
                            administrativa, o que contrubuiu para que hoje eu
                            tenha muita facilidade ao trabalhar em equipes e
                            liderar pessoas. Tenho conhecimento em{' '}
                            <a className="text-white">JavaScript</a>{' '}
                            (Intermediário),
                            <a className="text-white"> ReactJs</a>{' '}
                            (Intermediário),
                            <a className="text-white"> NodeJs </a>(Basico),{' '}
                            <a className="text-white"> Java </a>
                            (Intermediário),
                            <a className="text-white"> Banco de dados </a>{' '}
                            (Básico), <a className="text-white"> Html e Css </a>
                            (Intermediário),{' '}
                            <a className="text-white">Tailwindcss </a>{' '}
                            (Intermediário),
                            <a className="text-white"> Infraestrutura </a>
                            (Intermediário) e{' '}
                            <a className="text-white"> Excel </a>
                            (Avançado) Sou muito proativo e gosto sempre de
                            tentar contribuir para além da minha função. Tenho
                            interesse e facilidade em aprender coisas novas.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
}
