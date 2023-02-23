import Head from 'next/head';
import Header from 'components/Header';
import Section1 from 'components/Section1';



export default function About() {
    return (
        <div className="bg-gradient-to-t from-gray-900 via-black to-black w-screen h-screen">
            <Head>
                <title>Portifolio Douglas Rios</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="sm:h-[80%] flex justify-center items-center">
                <Section1 />
            </main>
        </div>
    );
}
