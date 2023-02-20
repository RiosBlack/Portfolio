import Head from 'next/head';
import Header from 'components/Header';
import Section1 from 'src/components/Section1';

export default function Home() {
    return (
        <div className="bg-gradient-to-t from-gray-900 via-black to-black w-screen h-screen">
            <Head>
                <title>Portifolio Douglas Rios</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                <Section1 />
            </main>
        </div>
    );
}
