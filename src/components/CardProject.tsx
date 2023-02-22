import React from 'react';

type Props = {
    imgProjeto: String;
    nomeProjeto: String;
    textProjeto: String;
    hrefProjeto: String;
    tecProjeto1: String;
    tecProjeto2: String;
    tecProjeto3: String;
    tecProjeto4: String;
};

export default function CardProject(props: Props) {
    const imgProps = 'w-1/2 p-2';

    return (
        <div className="bg-gradient-to-br from-[#92FFC0] to-[#10594C] w-64 grid justify-items-center rounded-tl-[70px] rounded-tr-xl rounded-br-[70px] rounded-bl-xl overflow-hidden">
            <div className=" w-52 h-32 z-10 absolute rounded-tl-[70px] rounded-tr-xl rounded-br-[70px] rounded-bl-xl gap-0 grid grid-cols-2 overflow-hidden justify-items-center">
                <img className={imgProps} src={props.tecProjeto1} />
                <img className={imgProps} src={props.tecProjeto2} />
                <img className={imgProps} src={props.tecProjeto3} />
                <img className={imgProps} src={props.tecProjeto4} />
                <h1 className="text-xs font-FontGeral text-[#33425B] w-full col-span-2 text-center">
                    Algumas tecnologias
                </h1>
            </div>
            <img
                className="p-2 w-60 h-36 z-20 object-cover rounded-tl-[70px] rounded-tr-xl rounded-br-[70px] rounded-bl-xl hover:rotate-90 hover:origin-top-right hover:transition-all hover:duration-500"
                src={props.imgProjeto}
                alt="Imagem do projeto"
            />

            <div className="p-2">
                <h1 className="font-FontGeral text-[#33425B]">
                    {props.nomeProjeto}
                </h1>
                <p className="font-FontGeral text-slate-100 w-full h-32 overflow-auto text-justify text-sm rounded-xl rounded-tr-xl rounded-br-[70px] rounded-bl-xl p-2 scrollbar-thin scrollbar-track-transparent mb-4">
                    {props.textProjeto}
                </p>
                <button className="bg-white hover:bg-slate-300 rounded-lg text-sm p-1 font-FontGeral text-[#33425B]">
                    <a href={props.hrefProjeto}>Ir para o projeto</a>
                </button>
            </div>
        </div>
    );
}
