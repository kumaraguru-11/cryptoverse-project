import { Coin, Stats } from "../app/react-ts-env";
import 'bootstrap-icons/font/bootstrap-icons.css'
import millify from "millify";


const TIME_PERIOD = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
const genericStats = (coin: Coin) => {
  return [
    {
      title: "Number Of Markets",
      value: coin.numberOfMarkets,
      icon: "bi bi-graph-up",
    },
    {
      title: "Number Of Exchanges",
      value: coin.numberOfExchanges,
      icon: "bi bi-currency-yen",
    },
    {
      title: "Aprroved Supply",
      value: coin.supply.confirmed ? <i className="bi bi-check-lg"/> : <i className="bi bi-slash-circle"/>,
      icon: "bi bi-exclamation-circle",
    },
    {
      title: "Total Supply",
      value: `$ ${millify(parseFloat(coin.supply.total))}`,
      icon: "bi bi-exclamation-circle",
    },
    {
      title: "Circulating Supply",
      value: `$ ${millify(parseFloat(coin.supply.max))}`,
      icon: "bi bi-exclamation-circle",
    },
  ];
};


const coinState = (coin: Coin) => {
  return [
    {
      title: "Price to USD",
      value: `$ ${coin.price && millify(parseFloat(coin.price))}`,
      icon: "bi bi-currency-dollar",
    },
    { title: "Rank", value: coin.rank, icon: "bi bi-hash" },
    {
      title: "24h Volume",
      value: `$ ${coin["24hVolume"] && millify(parseFloat(coin["24hVolume"]))}`,
      icon: "bi bi-lightning",
    },
    {
      title: "Market Cap",
      value: `$ ${coin.marketCap && millify(parseFloat(coin.marketCap))}`,
      icon: "bi bi-currency-dollar",
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(parseFloat(coin.allTimeHigh.price))}`,
      icon: "bi bi-currency-dollar",
    },
  ];
};


const stats=(stats:Stats)=>{
  return [
    {
      title: "Total Cryptocurriencies",
      value: `${stats.totalCoins && millify(parseFloat(stats.totalCoins))}`,
      icon: <i className="bi bi-exclamation-circle"/>,
    },
    {
      title: "Total Exchanges",
      value: `${
        stats.totalExchanges && millify(parseFloat(stats.totalExchanges))
      }`,
      icon: <i className="bi bi-currency-yen"/>,
    },
    {
      title: "Total Market Cap",
      value: `${
        stats.totalMarketCap && millify(parseFloat(stats.totalMarketCap))
      }`,
      icon: <i className="bi bi-currency-dollar"/>,
    },
    {
      title: "Total 24 Volume",
      value: `${
        stats["total24hVolume"] && millify(parseFloat(stats["total24hVolume"]))
      }`,
      icon: <i className="bi bi-lightning"/>,
    },
    {
      title: "Total Market",
      value: `${
        stats.totalMarkets && millify(parseFloat(stats.totalMarkets))
      }`,
      icon: <i className="bi bi-currency-dollar"/>,
    },
  ];
}

export { coinState, genericStats ,TIME_PERIOD,stats};
