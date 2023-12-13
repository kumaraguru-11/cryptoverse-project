import React from "react";
import { useGetCoinsQuery } from "../redux/feature/coin.feature";
import { useGetFeedsQuery } from "../redux/feature/news.feature";
import AsyncWrapper from "../layouts/AsyncWrapper";
import { stats } from "../constant/crypto";
import CryptoCard from "../components/CryptoCard";
import NewsList from "../components/NewsList";

const Home = () => {
  const { data, isLoading, error } = useGetCoinsQuery({limit:10});
  const {
    data: feeds,
    error: feedserror,
    isLoading: feedsLoading,
  } = useGetFeedsQuery({
    query: "Cryptocurrencies",
    count: 6,
  });
  return (
    <AsyncWrapper
      fulfilled={Boolean(data)}
      error={error}
      loading={isLoading}
    >
      {Boolean(data) && (
        <>
          <div className="p-4 my-3">
            <h4 className="fw-normal">Global Crypto Stats</h4>
            <div className="p-3">
              <div className="row">
                {stats(data.data.stats).map((st) => (
                  <div className="col-md-6 col-sm-6 col-lg-4 my-3" key={st.title}>
                    <div className="opacity-75">{st.title}</div>
                    <div className="fs-4">
                      {st.icon}
                      {st.value}
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="fw-normal mt-5">
                Top 10 Crypto Currencies in the World
              </h3>
              <div className="mt-3">
                <CryptoCard coins={data.data.coins} />
              </div>
              {/* <h3 className="fw-normal mt-3"> Latest Cryptocurrencies News</h3>
              <div className="my-3"><NewsList feeds={feeds.value}/></div> */}
            </div>
          </div>
        </>
      )}
    </AsyncWrapper>
  );
};

export default Home;
