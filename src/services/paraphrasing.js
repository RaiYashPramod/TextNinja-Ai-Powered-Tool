import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

export const paraPhrasingApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://paraphrase-genius.p.rapidapi.com/dev/paraphrase/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set("X-RapidAPI-Host", "paraphrase-genius.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getParaPhrase: builder.query({
      query: (body) => ({
        body: {paraPhraseText: body.paraPhraseText, result_type: 'multiple'}

      })
    })
  }),
  reducerPath: "paraPhrasingApi",
})

export const { useLazyGetParaPhraseQuery } = paraPhrasingApi;