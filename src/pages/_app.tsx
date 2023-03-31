import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import HeaderStateProvider from '../contexts/HeaderStateContext';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <HeaderStateProvider>
            <Component {...pageProps} />;
        </HeaderStateProvider>
    );
}
