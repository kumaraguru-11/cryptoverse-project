import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "./feature/coin.feature";
import { newsApi } from "./feature/news.feature";


const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware, newsApi.middleware),
});

export { store };
