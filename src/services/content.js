import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

export const contentApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ai-content-detector1.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set("X-RapidAPI-Host", "ai-content-detector1.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getContentDetection: builder.query({
      query: (params) => `/?text=${params.contentText}`,
    }),
  }),
  reducerPath: "contentApi",
});


export const { useLazyGetContentDetectionQuery } = contentApi;