import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article.js";
import { contentApi } from "./content.js";

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
    [contentApi.reducerPath]: contentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware, contentApi.middleware),
});
