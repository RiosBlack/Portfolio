import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

type Props = {
    imgProjeto: string;
    nomeProjeto: string;
    textProjeto: string;
    hrefProjeto: string;
    hrefGitHub: string;
    tecProjeto1: string;
    tecProjeto2: string;
    tecProjeto3: string;
    tecProjeto4: string;
};

export default function CardProject(props: Props) {
    const imgProps = 'w-1/2 p-2';

    return (
        <div className="border border-slate-700 bg-gray-900 w-64 grid justify-items-center rounded-lg overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700 duration-300">
            <div className=" w-52 h-32 z-10 absolute rounded-xl gap-0 grid grid-cols-2 overflow-hidden justify-items-center">
                <Image
                    src={props.tecProjeto1}
                    width={52}
                    height={32}
                    className={imgProps}
                    alt={''}
                />
                <Image
                    width={52}
                    height={32}
                    className={imgProps}
                    src={props.tecProjeto2}
                    alt={''}
                />
                <Image
                    width={52}
                    height={32}
                    className={imgProps}
                    src={props.tecProjeto3}
                    alt={''}
                />
                <Image
                    width={52}
                    height={32}
                    className={imgProps}
                    src={props.tecProjeto4}
                    alt={''}
                />
                <h1 className="text-xs text-slate-400 w-full col-span-2 text-center">
                    Algumas tecnologias
                </h1>
            </div>
            <Image
                width={300}
                height={500}
                className="p-2 w-60 h-36 z-20 object-cover rounded-xl hover:rotate-90 hover:origin-top-right hover:transition-all hover:delay-150 hover:duration-500"
                src={props.imgProjeto}
                alt="Imagem do projeto"
            />

            <div className="p-2">
                <h1 className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                    {props.nomeProjeto}
                </h1>
                <p className="text-slate-400 w-full h-32 overflow-auto text-justify text-sm rounded-lg pl-2 pr-4 scrollbar-track-rounded-lg scrollbar-thin scrollbar-track-slate-400 mb-4 border-2">
                    {props.textProjeto}
                </p>
                <div className="flex justify-between">
                    <button className="border text-slate-400 hover:bg-slate-100 rounded-lg p-1 ">
                        <Link
                            href={props.hrefProjeto}
                            className="font-semibold text-sm bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                        >
                            Página do projeto
                        </Link>
                    </button>
                    <button className="border text-slate-400 hover:bg-slate-100 rounded-lg p-1">
                        <Link
                            href={props.hrefGitHub}
                            className="font-semibold text-sm bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex items-center justify-center"
                        >
                            <div className="text-slate-400 pr-2 animate-pulse">
                                <AiFillGithub />
                            </div>
                            GitHub
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
