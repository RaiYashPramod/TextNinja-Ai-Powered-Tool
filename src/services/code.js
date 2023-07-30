import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

export const codeConverterApi = createApi ({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://code-converter.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set("X-RapidAPI-Host", "code-converter.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getConvertedCode: builder.query({
      query: (data) => ({
        method: 'POST',
        body: data
      })
    })
  }),
  reducerPath: "codeConverterApi",
})


export const { useLazyGetConvertedCodeQuery } = codeConverterApi;