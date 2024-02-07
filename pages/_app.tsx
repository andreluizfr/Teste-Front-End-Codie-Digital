import "reflect-metadata";
import type { AppProps } from 'next/app';
import './globalStyles.css';

import { Container } from 'inversify';
import { Provider } from 'inversify-react';

import { IHttpClient } from '../infrastructure/httpClient/IHttpClient';
import { AxiosHttpClientImpl } from '../infrastructure/httpClient/axios/httpClientImpl';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Provider container={() => {
        const container = new Container();
        container.bind<IHttpClient<string[]>>("HttpClient").to(AxiosHttpClientImpl).inTransientScope;
        return container;
    }}> 
      <Component {...pageProps} />
    </Provider>
  )
}
