import React from 'react';

type Props = {
    title: string;
};

export default function Titles(props: Props) {
    return (
        <div className="flex justify-center items-center">
            <div className="w-3 h-3 rounded-full m-2 bg-white"></div>
            <h1 className="flex items-center justify-center font-FontGeral text-3xl text-VerdeClaro-100 mx-3">
                {props.title}
            </h1>
            <div className="w-3 h-3 rounded-full m-2 bg-white"></div>
        </div>
    );
}
