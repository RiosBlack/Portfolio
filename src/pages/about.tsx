import Head from 'next/head';
import Header from 'components/Header';
import Image from 'next/image';
import CardRedes from 'components/CardRedes';
import CardRedesIng from 'components/CardRedesIng';
import { useContext } from 'react';
import { HeaderStateContext } from 'src/contexts/HeaderStateContext';


export default function About() {

        const { stateButton }: any = useContext(HeaderStateContext);
        
    return (
        <div className="bg-gradient-to-t from-gray-900 via-black to-black h-full lg:h-screen grid">
            <Head>
                <title>Portifolio Douglas Rios</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header /* clickPort={setPort} clickIngl={setIngl} */ />
            <div className="grid justify-items-center animate__animated animate__fadeInDown pt-5 lg:pt-0">
                <main className="container grid grid-cols-1 md:grid-cols-2 content-center justify-items-center px-6 lg:px-40 sm:pb-7">
                    <div className="grid justify-items-center ">
                        <Image
                            src={'/Photo1.png'}
                            width={400}
                            height={400}
                            alt=""
                        />
                        {stateButton === false ? (
                            <CardRedesIng />
                        ) : (
                            <CardRedes />
                        )}
                    </div>
                    <div className="grid justify-items-center content-center ">
                        {stateButton === false ? (
                            <p className="text-lg text-justify text-gray-400 py-5 md:py-2">
                                I'm a programming student passionate about
                                technology. I really like working with data,
                                solve problems, and acquire new knowledge. I
                                have 10 years of experience in administrative
                                area, which contributed to today I find it very
                                easy to work in teams and lead people. I have
                                knowledge in{' '}
                                <a className="text-white">JavaScript</a>{' '}
                                (Intermediary),
                                <a className="text-white"> ReactJs</a>{' '}
                                (Intermediary),
                                <a className="text-white">
                                    {' '}
                                    NodeJs{' '}
                                </a>(Basic),{' '}
                                <a className="text-white"> Java </a>
                                (Intermediary),
                                <a className="text-white"> DataBase </a>{' '}
                                (Basic),{' '}
                                <a className="text-white"> Html e Css </a>
                                (Intermediary),{' '}
                                <a className="text-white">Tailwindcss </a>{' '}
                                (Intermediary),
                                <a className="text-white">Infrastructure </a>
                                (Intermediary) e{' '}
                                <a className="text-white"> Excel </a>
                                (Advanced) I am very proactive and I always like
                                to try to contribute beyond my function. I am
                                interested and easy to learn things new.
                            </p>
                        ) : (
                            <p className="text-lg text-justify text-gray-400 py-5 md:py-2">
                                Sou um estudante de programação apaixonado por
                                tecnologia. Gosto bastante de trabalhar com
                                dados, de resolver problemas e de adquirir novos
                                conhecimentos. Tenho 10 anos de experiência em
                                área administrativa, o que contrubuiu para que
                                hoje eu tenha muita facilidade ao trabalhar em
                                equipes e liderar pessoas. Tenho conhecimento em{' '}
                                <a className="text-white">JavaScript</a>{' '}
                                (Intermediário),
                                <a className="text-white"> ReactJs</a>{' '}
                                (Intermediário),
                                <a className="text-white">
                                    {' '}
                                    NodeJs{' '}
                                </a>(Basico),{' '}
                                <a className="text-white"> Java </a>
                                (Intermediário),
                                <a className="text-white">
                                    {' '}
                                    Banco de dados{' '}
                                </a>{' '}
                                (Básico),{' '}
                                <a className="text-white"> Html e Css </a>
                                (Intermediário),{' '}
                                <a className="text-white">Tailwindcss </a>{' '}
                                (Intermediário),
                                <a className="text-white"> Infraestrutura </a>
                                (Intermediário) e{' '}
                                <a className="text-white"> Excel </a>
                                (Avançado) Sou muito proativo e gosto sempre de
                                tentar contribuir para além da minha função.
                                Tenho interesse e facilidade em aprender coisas
                                novas.
                            </p>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}
