import { useEffect, useState } from 'react';
import CardTextPort from './CardTextPort';
import Button from './Button';
import 'animate.css';

export default function index(props: any) {
    //State para aparecer o botão de baixar.
    const [buttonView, setButtonView] = useState<boolean>(false);

    const viewButton = () => {
        setTimeout(() => {
            setButtonView(true);
        }, 8500);
    };

    function teste() {
        () => {
            console.log(props.stateButton);
        };
    }

    return (
        <div
            onLoad={() => {
                teste();
            }}
            className="w-screen grid justify-items-center animate__animated animate__fadeInDown pt-12 sm:pt-0"
        >
            <div className="w-[80%] rounded-t-md bg-slate-700 flex justify-between p-2">
                <div className="flex justify-center items-center">
                    <div className="w-4 h-4 rounded-full bg-red-500 hover:bg-red-700 mr-2"></div>
                    <div className="w-4 h-4 rounded-full bg-orange-500 hover:bg-orange-700 mr-2"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500 hover:bg-green-700"></div>
                </div>
                <div className="font-bold text-gray-400">Terminal</div>
                <div className="w-16"></div>
            </div>
            <div
                onLoad={() => {
                    viewButton();
                }}
                className="container flex items-center justify-start w-[80%] rounded-b-md border-2 border-slate-700 pl-2"
            >
                <div className="py-5">
                    {props.stateButton === true ? <CardTextPort /> : ''}

                    {buttonView === true ? <Button /> : ''}
                </div>
            </div>
        </div>
    );
}
