import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article.js";
import { contentApi } from "./content.js";
import { paraPhrasingApi } from "./paraphrasing.js";
import { codeConverterApi } from "./code.js";

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
    [contentApi.reducerPath]: contentApi.reducer,
    [paraPhrasingApi.reducerPath]: paraPhrasingApi.reducer,
    [codeConverterApi.reducerPath]: codeConverterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware, contentApi.middleware, paraPhrasingApi.middleware, codeConverterApi.middleware),
});

