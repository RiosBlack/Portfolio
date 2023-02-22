import Head from 'next/head';
import Header from 'components/Header';
import { FcServices } from 'react-icons/fc';
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
        <div className="bg-gradient-to-t from-gray-900 via-black to-black h-full lg:h-screen xl:h-screen grid">
            <Head>
                <title>Portifolio Douglas Rios</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="grid justify-items-center animate__animated animate__fadeInDown">
                <main className="container mx-auto px-4 my-5 grid">
                    <div className="grid justify-items-center content-center border-2 border-slate-700 rounded-[8%] min-w-full p-2">
                        <h1 className="font-bold text-slate-400 text-xl flex items-center justify-center pb-2">
                            <FcServices className="mr-2" />
                            Projetos
                            <FcServices className="ml-2" />
                        </h1>
                        <div className="inline-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                            {data &&
                                data.map(
                                    (item: {
                                        nomeProjeto: String;
                                        imgProjeto: String;
                                        hrefProjeto: String;
                                        hrefGitHub: String;
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
                                                hrefGitHub={item.hrefGitHub}
                                                tecProjeto1={item.tecProjeto1}
                                                tecProjeto2={item.tecProjeto2}
                                                tecProjeto3={item.tecProjeto3}
                                                tecProjeto4={item.tecProjeto4}
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
