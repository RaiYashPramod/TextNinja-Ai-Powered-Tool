import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

export const paraPhrasingApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://paraphrasing-and-rewriter-api.p.rapidapi.com/rewrite-light",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set("X-RapidAPI-Host", "paraphrase-genius.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getParaPhrase: builder.query({
      query: (body) => ({
        body: {text: body.paraPhraseText, from: 'en'}

      })
    })
  }),
  reducerPath: "paraPhrasingApi",
})

export const { useLazyGetParaPhraseQuery } = paraPhrasingApi;