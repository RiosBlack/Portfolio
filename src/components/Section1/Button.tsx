import { HiOutlineDocumentArrowDown } from 'react-icons/hi2';

export default function Button() {
    return (
        <>
            <button className="text-gray-400 text-sm flex items-center bg-gray-900 hover:bg-gray-700 p-1 rounded-lg font-medium hover:animate-pulse my-2">
                <HiOutlineDocumentArrowDown className="mr-2 text-[#84ECAE]" />
                Clique aqui para baixar o curriculum
            </button>
        </>
    );
}
