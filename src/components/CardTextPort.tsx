import { TypeAnimation } from 'react-type-animation';

export default function CardTextPort() {
    return (
        <>
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-5xl font-bold text-center align-text-top pb-2">
                <TypeAnimation
                    sequence={['Olá', 2000, 'Meu nome é Douglas Rios', 1000]}
                    speed={20}
                    wrapper="div"
                    repeat={0}
                />
            </div>
            <div className='text-gray-400 font-medium text-xl'>
                <TypeAnimation
                    sequence={[
                        '',
                        () => {
                            return new Promise(resolve =>
                                setTimeout(resolve, 4500)
                            );
                        },
                        'sou brasileiro e programador FullStack Junior',
                    ]}
                    speed={20}
                    wrapper="div"
                    repeat={0}
                />
            </div>
        </>
    );
}
