import Head from 'next/head';
import Header from 'components/Header';
import Section1 from 'src/components/Section1';
import Image from 'next/image';
import CardRedes from 'components/CardRedes';

export default function Home() {
    return (
        <div className="bg-gradient-to-t from-gray-900 via-black to-black w-screen h-screen">
            <Head>
                <title>Portifolio Douglas Rios</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="container grid grid-cols-2">
                <div className="grid justify-items-center">
                    <Image
                        src={'/photoProfile.jpg'}
                        width={500}
                        height={500}
                        alt=""
                    />
                    <CardRedes />
                </div>
                <div className="grid justify-items-center p-5">
                    <p className="text-lg text-justify text-gray-400">
                        Sou um estudante de programação apaixonado por
                        tecnologia. Gosto bastante de trabalhar com dados, de
                        resolver problemas e de adquirir novos conhecimentos.
                        Tenho 10 anos de experiência em área administrativa, o
                        que contrubuiu para que hoje eu tenha muita facilidade
                        ao trabalhar em equipes e liderar pessoas. Tenho
                        conhecimento em <a className="text-white">JavaScript</a>{' '}
                        (Intermediário),
                        <a className="text-white"> ReactJs</a> (Intermediário),
                        <a className="text-white"> NodeJs </a>(Basico),{' '}
                        <a className="text-white"> Java </a>
                        (Intermediário),
                        <a className="text-white">
                            {' '}
                            Banco de dados{' '}
                        </a> (Básico),{' '}
                        <a className="text-white"> Html e Css </a>
                        (Intermediário),{' '}
                        <a className="text-white">Tailwindcss </a>{' '}
                        (Intermediário),
                        <a className="text-white"> Infraestrutura </a>
                        (Intermediário) e <a className="text-white"> Excel </a>
                        (Avançado) Sou muito proativo e gosto sempre de tentar
                        contribuir para além da minha função. Tenho interesse e
                        facilidade em aprender coisas novas.
                    </p>
                </div>
            </main>
        </div>
    );
}
