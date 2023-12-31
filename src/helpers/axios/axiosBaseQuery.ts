import { IMeta } from '@/types';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import { instance as axiosInstance } from './axiosInstance';

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      meta?: IMeta;
      contentType?: string;
      params?: AxiosRequestConfig['params'];
      headers?: AxiosRequestConfig['headers'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, contentType }) => {
    try {
      const result: any = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          'Content-Type': contentType || 'application/json',
        },
      });
      if (result?.data) {
        return result;
      } else {
        return {
          error: {
            status: result?.statusCode,
            data: result?.message,
          },
        };
      }
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
