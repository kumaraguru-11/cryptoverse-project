import React from 'react'

const Home=React.lazy(()=>import('../pages/Home'));
const Currency=React.lazy(()=>import('../pages/Currency'));
const RefrenceCurrency=React.lazy(()=>import('../pages/RefrenceCurrency'));
const News=React.lazy(()=>import('../pages/News'));
const Market=React.lazy(()=>import('../pages/CryptoMarket'));
const Exchange=React.lazy(()=>import('../pages/CryptoExchange'));
const CoinDetail=React.lazy(()=>import ('../pages/CoinDetails'));
const Page404=React.lazy(()=>import('../pages/PageNotFound'));

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/currencies",
    component: Currency,
  },
  {
    path: "/reference-currencies",
    component: RefrenceCurrency,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/market/:coinId",
    component: Market,
  },
  {
    path: "/exchange/:coinId",
    component: Exchange,
  },
  {
    path: "crypto/:coinId",
    component: CoinDetail,
  },
  {
    path: "*",
    component: Page404,
  },
];
