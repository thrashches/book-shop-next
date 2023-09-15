import '@/styles/globals.scss';
import type {AppProps} from 'next/app';
import Layout from "@/components/Layout/Layout";
import {store} from "@/store";
import {Provider} from "react-redux";




export default function App({Component, pageProps}: AppProps) {
    return <Provider store={store}>
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    </Provider>;
}
