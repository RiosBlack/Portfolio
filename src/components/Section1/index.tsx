import CardTextPort from './CardTextPort';
import { useState } from 'react';
import Button from './Button';
import 'animate.css';

export default function index() {
    const [buttonView, setButtonView] = useState<boolean>(false);

    function viewButton() {
        setTimeout(() => {
            setButtonView(true);
        }, 8500);
    }

    return (
        <div
            onLoad={viewButton()}
            className="container lg:flex lg:items-center lg:justify-center animate__animated animate__fadeInDown"
        >
            <div>
                <CardTextPort />
                {buttonView === true ? <Button /> : ''}
            </div>
            <div>foto</div>
        </div>
    );
}
