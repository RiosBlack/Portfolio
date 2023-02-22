import Image from 'next/image';
import { VscArrowSmallDown } from 'react-icons/vsc';

type Props = {
    srcImg: string;
    altImg: string;
    title: string;
    nivel: string;
};

export default function CardSkill(props: Props) {
    return (
        <div className="border border-slate-700 bg-gray-900 rounded-lg grid justify-items-center content-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700 duration-300 w-28 h-32 overflow-hidden">
            <Image
                src={props.srcImg}
                width="30"
                height="30"
                alt={props.altImg}
            />
            <h1 className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                {props.title}
            </h1>
            <h2 className="font-semibold text-slate-400 text-sm flex justify-center items-center">
                <VscArrowSmallDown className="animate-pulse text-slate-600" />
                Nivel
                <VscArrowSmallDown className="animate-pulse text-slate-600" />
            </h2>
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                {props.nivel}
            </p>
        </div>
    );
}
