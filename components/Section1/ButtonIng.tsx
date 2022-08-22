import Image from 'next/image';
import Bandeira from '../../public/BandeiraEua.png';

export default function ButtonIng() {
    return (
        <>
            <button className="p-1 flex items-center bg-white bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg font-sans transition ease-in-out hover:bg-gradient-to-r from-[#c21500] to-[#ffc500] hover:scale-110">
                <Image
                    height={22}
                    width={22}
                    src={Bandeira}
                    alt="Bandeira dos Eua"
                />
                <span className="ml-2 font-medium text-white">Inglês</span>
            </button>
        </>
    );
}
