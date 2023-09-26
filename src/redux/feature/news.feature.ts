import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com",
    headers: {
      "X-RapidAPI-Key": "b0e5fdedf1msh31670962ccd7408p140db3jsne4f802e641e3",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  }),
  endpoints: (builders) => ({
    getFeeds: builders.query({
      query: ({ query = "", count = '' }) =>
        `/news/search?q=${query}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
    }),
  }),
});

export const { useGetFeedsQuery } = newsApi;
export { newsApi };
