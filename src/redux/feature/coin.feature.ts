import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com" || "",
    headers: {
      "X-RapidAPI-Key": "b0e5fdedf1msh31670962ccd7408p140db3jsne4f802e641e3",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: ({ limit =''}) => `/coins${limit ? "?limit=" + limit : ""}`,
    }),
    getCoinDetails: builder.query({
      query: ({ coinId = "" }) => `/coin/${coinId}`,
    }),
    getCoinHistory: builder.query({
      query: ({ coinId = "", timePeriod = "" }) =>
        `/coin/${coinId}/history?timePeriod=${timePeriod}`,
    }),
    getCoinExchanges: builder.query({
      query: ({ coinId = "" }) => `/coin/${coinId}/exchanges`,
    }),
    getCoinMarkets: builder.query({
      query: ({ coinId = "" }) => `/coin/${coinId}/markets`,
    }),
    getReferenceCurrencies: builder.query({
      query: ({ limit = "50", type = "" }) =>
        `/reference-currencies?limit=${limit}&types[0]=${type}`,
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetCoinDetailsQuery,
  useGetCoinHistoryQuery,
  useGetCoinExchangesQuery,
  useGetCoinMarketsQuery,
  useGetReferenceCurrenciesQuery,
} = cryptoApi;
export { cryptoApi };

