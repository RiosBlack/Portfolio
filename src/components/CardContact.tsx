import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

export default function CardContact() {
    const form: any = useRef();
    const styleDiv = 'w-full flex items-center justify-around pb-2';
    const styleLabel =
        'font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-[25%] lg:w-[30%] xl:w-[20%] flex justify-center';
    const styleInput =
        'w-[70%] lg:w-[60%] xl:w-[80%] bg-transparent border-2 border-slate-700 rounded-xl focus:border-white mr-5 text-slate-400 px-1';

    const [sendEmailVerifield, setSendEmailVerifield] =
        useState<boolean>(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'PortifolioMensageGmail',
                'template_m1mzt4n',
                form.current,
                'wngbh8dS0ip5wNYvE'
            )
            .then(
                result => {
                    setSendEmailVerifield(true);
                    console.log(result.text);
                },
                error => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            {sendEmailVerifield === false ? (
                <form
                    className="items-center justify-center"
                    ref={form}
                    onSubmit={sendEmail}
                >
                    <div className={styleDiv}>
                        <label className={styleLabel}>Titulo:</label>
                        <input
                            className={styleInput}
                            type="text"
                            name="titulo"
                        />
                    </div>
                    <div className={styleDiv}>
                        <label className={styleLabel}>Nome:</label>
                        <input className={styleInput} type="text" name="name" />
                    </div>
                    <div className={styleDiv}>
                        <label className={styleLabel}>E-mail:</label>
                        <input
                            className={styleInput}
                            type="email"
                            name="email"
                        />
                    </div>
                    <div className={styleDiv}>
                        <label className={styleLabel}>Telefone:</label>
                        <input
                            className={styleInput}
                            type="text"
                            name="telefone"
                        />
                    </div>
                    <div className={styleDiv}>
                        <label className={styleLabel}>Mensagem:</label>
                        <textarea className={styleInput} name="mensage" />
                    </div>
                    <button
                        className="font-semibold p-1 m-2 rounded-lg w-20 hover:text-slate-900 border text-slate-400 hover:bg-slate-100 hover:animate-pulse"
                        type="submit"
                        value="send"
                    >
                        Enviar
                    </button>
                </form>
            ) : (
                <div className="grid justify-items-center">
                    <iframe src="https://embed.lottiefiles.com/animation/78619"></iframe>
                </div>
            )}
        </>
    );
}
