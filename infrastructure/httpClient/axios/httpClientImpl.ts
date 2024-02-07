import { IHttpClient } from '../IHttpClient';
import { IHttpError } from '../IHttpError';

import { axiosInstance } from './AxiosInstance';
import { AxiosInstance, AxiosError } from 'axios';
import { injectable } from 'inversify';


@injectable()
export class AxiosHttpClientImpl<T> implements IHttpClient<T> {

    axiosInstance: AxiosInstance = axiosInstance;

    constructor(){}

    async get(path: string, header?: object){

        try{
            const response = await this.axiosInstance.get<T>(path,header);

            return response.data;

        } catch (err: unknown) {

            throw this.generateHttpError(err);
        }
    }

    async post(path: string, body: object, header?: object){

        try{
            const response = await this.axiosInstance.post<T>(path, body, header);

            return response.data;

        } catch (err: unknown) {

            throw this.generateHttpError(err);
        }
    }

    generateHttpError(err: unknown): IHttpError {

        const error = err as AxiosError<string>;

        if (error.response) return {
            httpStatusCode: error.response.status,
            message:  error.response.data
        };

        else if (error.request) return {
            httpStatusCode: null,
            message:  'Erro: O servidor não pode responder a essa requisição.'
        };

        else return {
            httpStatusCode: null,
            message:  error.message
        };

    }

}