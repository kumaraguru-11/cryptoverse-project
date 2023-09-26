/// <reference types="react-scripts" />

import { ReactNode } from "react";
import { JsxAttribute } from "typescript";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryTypes {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

type SideBarItemType = {
  label: string;
  key: string;
  icon: string;
  link: string;
};

type AsyncWrapperProps = {
  loading: boolean;
  fulfilled: boolean;
  error: any;
  children:React.ReactNode;
};

type Coin={
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: [
    {
      name: string;
      type: string;
      url: string;
    }
  ];

  supply: {
    confirmed: true;
    supplyAt: number;
    max: string;
    total: string;
    circulating: string;
  };

  numberOfMarkets: number;
  numberOfExchanges: number;
  "24hVolume": string;
  marketCap: string;
  fullyDilutedMarketCap: string;
  price: string;
  btcPrice: string;
  priceAt: number;
  change: string;
  rank: number;
  sparkline: string[];

  allTimeHigh: {
    price: string;
    timestamp: number;
  };

  coinrankingUrl: string;
  tier: number;
  lowVolume: boolean;
  listedAt: number;
  hasContent: true;
  notices: null;
  tags: string[];
}

interface ChartProps {
  history: HistoryTimestamp[];
}

interface HistoryTimestamp {
  price: string;
  timestamp: number;
}

interface Feed {
  name: string;
  url: string;
  image?: {
    thumbnail: {
      contentUrl: string;
    };
  };
  description: string;
  provider: [
    {
      name: string;
    }
  ];
  datePublished: string;
}

type Stats ={
  totalCoins: string;
  total24hVolume: string;
  totalExchanges: string;
  totalMarketCap: string;
  totalMarkets: string;
}

interface MarketDataRow {
  uuid: string;
  rank: number;
  base: {
    uuid: string;
    symbol: string;
  };
  quote: { uuid: string; symbol: string };
  exchange: { name: string; uuid: string; iconUrl: string };
  marketShare: string;
  btcPrice: string;
  recommended: true;
  filters: {};
  price: string;
  "24hVolume": string;
}

interface ExchangeDataRow {
  name: string;
  iconUrl: string;
  verified: boolean;
  recommended: true;
  numberOfMarkets: number;
  coinrankingUrl: string;
  btcPrice: string;
  price: string;
  uuid: string;
  rank: number;
}


interface ReferenceCurrency {
  uuid: string;
  type: string;
  iconUrl: string|undefined;
  name: string;
  symbol: string;
  sign: string;
}