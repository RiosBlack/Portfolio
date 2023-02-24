import Head from 'next/head';
import Header from 'components/Header';
import Image from 'next/image';
import CardRedes from 'components/CardRedes';
import CardSkill from 'components/CardSkill';
import { FcGraduationCap, FcBiotech } from 'react-icons/fc';
import { useState } from 'react';

export default function skill() {
    const [dataHard, setDataHard] = useState<any>(null);
    const [dataSoft, setDataSoft] = useState<any>(null);

    const fetchAllDataHard = async () => { 
        try {
            const response = await fetch('/api/dataHardSkill');
            const data = await response.json();
            if (!data) throw 'problemas na requisição';
            setDataHard(data);
        } catch (error) {
            console.log(error);
        }
    };
    const fetchAllDataSoft = async () => {
        try {
            const response = await fetch('/api/dataSoftSkill');
            const data = await response.json();
            if (!data) throw 'problemas na requisição';
            setDataSoft(data);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div onLoad={() => {(fetchAllDataHard(),
        fetchAllDataSoft())}} className="bg-gradient-to-t from-gray-900 via-black to-black h-full xl:h-screen grid">
            <Head>
                <title>Portifolio Douglas Rios</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="grid justify-items-center animate__animated animate__fadeInDown">
                <main className="container grid grid-cols-1 md:grid-cols-2 content-center justify-items-center px-2 lg:px-10 xl:px-30 2xl:px-40 pb-5">
                    <div className="grid justify-items-center mb-5">
                        <Image
                            src={'/Photo2.png'}
                            width={400}
                            height={400}
                            alt=""
                        />
                        <CardRedes />
                    </div>
                    <div className="grid justify-items-center content-center border-2 border-slate-700 rounded-[8%] min-w-full p-2">
                        <h1 className="font-bold text-slate-400 text-xl flex items-center justify-center pb-2">
                            Hard Skills
                            <FcGraduationCap className="ml-2" />
                        </h1>
                        <div className="inline-grid grid-cols-3 xl:grid-cols-4 gap-5">
                            {dataHard &&
                                dataHard.map(
                                    (data: {
                                        srcImg: string;
                                        altImg: string;
                                        title: string;
                                        nivel: string;
                                    }) => (
                                        <CardSkill
                                            key={''}
                                            srcImg={data.srcImg}
                                            altImg={data.altImg}
                                            title={data.title}
                                            nivel={data.nivel}
                                        />
                                    )
                                )}
                        </div>

                        <h1 className="font-bold text-slate-400 text-xl my-2 flex items-center justify-center">
                            Soft Skills
                            <FcBiotech className="ml-2" />
                        </h1>
                        <div className="inline-grid grid-cols-3 xl:grid-cols-4 gap-5">
                            {dataSoft &&
                                dataSoft.map(
                                    (data: {
                                        srcImg: string;
                                        altImg: string;
                                        title: string;
                                        nivel: string;
                                    }) => (
                                        <CardSkill
                                            key={''}
                                            srcImg={data.srcImg}
                                            altImg={data.altImg}
                                            title={data.title}
                                            nivel={data.nivel}
                                        />
                                    )
                                )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
