import React from 'react';
import style from './CardHello.module.css';
//"font-FontGeral flex items-center justify-center text-white border-2 border-[#87DFD6] rounded-md mt-3 text-base"
export default function CardHello() {
    return (
        <div className="bg-gradient-to-r from-[#92FFC0] to-[#10594C] w-5/6 h-auto rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm flex items-center justify-center py-5">
            <div className="w-4/5 h-4/5">
                <p className="font-FontGeral text-white text-lg">Olá, eu sou</p>
                <div className={style.typewriter}>Douglas Rios</div>
                <p className="text-white font-FontGeral text-lg">
                    Tenho 30 anos, sou brasileiro e programador FullStack junior
                </p>
                <div className={style.a}>
                    <span className={style.span}></span>
                    <span className={style.span}></span>
                    <span className={style.span}></span>
                    <span className={style.span}></span>
                    <button className="font-FontGeral w-full">
                        Baixe aqui meu curriculum
                    </button>
                </div>
            </div>
        </div>
    );
}
