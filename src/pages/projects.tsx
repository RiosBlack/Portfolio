import Head from 'next/head';
import Header from 'components/Header';
import { FcGraduationCap, } from 'react-icons/fc';
import { useEffect, useState } from 'react';
import CardProject from 'components/CardProject';

export default function skill() {
    const [data, setData] = useState(null);

    const fetchAllProject = async () => {
        try {
            const response = await fetch('/api/data');
            const data = await response.json();
            if (!data) throw 'problemas na requisição';
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllProject();
    }, []);

    return (
        <div className="bg-gradient-to-t from-gray-900 via-black to-black h-full xl:h-screen grid">
            <Head>
                <title>Portifolio Douglas Rios</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="grid justify-items-center animate__animated animate__fadeInDown">
                <main className="container grid grid-cols-1 md:grid-cols-2 content-center justify-items-center px-2 lg:px-10 xl:px-30 2xl:px-40 pb-5">
                    <div className="grid justify-items-center content-center border-2 border-slate-700 rounded-[8%] min-w-full p-2">
                        <h1 className="font-bold text-slate-400 text-xl flex items-center justify-center pb-2">
                            Projetos
                            <FcGraduationCap className="ml-2" />
                        </h1>
                        <div className="inline-grid grid-cols-3 xl:grid-cols-4 gap-5">
                            {data &&
                                data.map(
                                    (item: {
                                        nomeProjeto: String;
                                        imgProjeto: String;
                                        hrefProjeto: String;
                                        tecProjeto1: String;
                                        tecProjeto2: String;
                                        tecProjeto3: String;
                                        tecProjeto4: String;
                                        textProjeto: String;
                                    }) => (
                                        // eslint-disable-next-line react/jsx-key
                                        <div className="mb-7">
                                            <CardProject
                                                nomeProjeto={item.nomeProjeto}
                                                imgProjeto={item.imgProjeto}
                                                hrefProjeto={item.hrefProjeto}
                                                tecProjeto1={item.tecProjeto1}
                                                tecProjeto2={item.tecProjeto2}
                                                tecProjeto3={item.tecProjeto3}
                                                tecProjeto4={item.tecProjeto3}
                                                textProjeto={item.textProjeto}
                                            />
                                        </div>
                                    )
                                )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
