import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCoinDetailsQuery,
  useGetCoinHistoryQuery,
} from "../redux/feature/coin.feature";
import { useGetFeedsQuery } from "../redux/feature/news.feature";
import AsyncWrapper from "../layouts/AsyncWrapper";
import "bootstrap-icons/font/bootstrap-icons.css";
import millify from "millify";
import { coinState, genericStats, TIME_PERIOD } from "../constant/crypto";
import Form from "react-bootstrap/Form";
import Chart from "../components/chart";
import NewsList from "../components/NewsList";

const CoinDetails = () => {
  const params = useParams();
  const [timePeriod, setTimePeriod] = useState<string>("24h");
  const { data, error, isLoading } = useGetCoinDetailsQuery({
    coinId: params?.coinId,
  });
  const {
    data: history,
    error: errorHistory,
    isLoading: isFetchingHistory,
  } = useGetCoinHistoryQuery({ coinId: params?.coinId, timePeriod });
  // const {
  //   data: feeds,
  //   error: feedserror,
  //   isLoading: feedsLoading,
  // } = useGetFeedsQuery({
  //   query: "Cryptocurrencies",
  //   count: 6,
  // });

  const handleTimePeriodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTimePeriod(event.target.value);
  };
  return (
    <AsyncWrapper
      loading={isLoading || isFetchingHistory}
      error={error || errorHistory}
      fulfilled={Boolean(data && history )}
    >
      {Boolean(data && history) && (
        <div className="py-5 px-4">
          <div className="d-flex align-items-center">
            <img
              src={data.data.coin.iconUrl}
              alt="data.data.coin.name"
              width={40}
              height={50}
            />
            <p
              style={{ color: data.data.coin.color, fontSize: "3rem" }}
              className="mx-2 my-0"
            >
              {data.data.coin.name}
            </p>
            <a
              href={data.data.coin.websiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-tag fs-4 text-dark"></i>
            </a>
          </div>
          <p className="my-4 text-dark opacity-75">
            {data.data.coin.description}
          </p>
          <div className="row">
            <div className="col-md-6">
              <div>
                <h3 className="fw-normal">
                  {data.data.coin.name} Value Statistics
                </h3>

                <p className="mb-5 mt-3 text-dark opacity-75">
                  An overview showing the statistics of {data.data.coin.name},
                  such as the base and quote currency, the rank, and trading
                  volume.
                </p>

                {coinState(data.data.coin).map((st, index) => (
                  <div
                    className="d-flex justify-content-between fs-6 lh-lg"
                    key={index}
                  >
                    <div className="d-flex opacity-75">
                      <i className={st.icon}></i>
                      <div className="mx-2">{st.title}</div>
                    </div>
                    <div className="fw-semibold">{st.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h3 className="fw-normal">Other Stats Info</h3>
                <p className="mb-5 mt-3 text-dark opacity-75">
                  An overview showing the statistics of {data.data.coin.name},
                  such as the base and quote currency, the rank, and trading
                  volume.
                </p>
                {genericStats(data.data.coin).map((st, index) => (
                  <div
                    className="d-flex justify-content-between fs-6 lh-lg"
                    key={index}
                  >
                    <div className="d-flex opacity-75">
                      <i className={st.icon} />
                      <div className="mx-2">{st.title}</div>
                    </div>
                    <div className="fw-semibold">{st.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6 fs-6">
            <h3 className="my-3 fw-normal">{data.data.coin.name} Url's</h3>
            {data.data.coin?.links.map((link: any, index: number) => (
              <div className="d-flex justify-content-between lh-lg" key={index}>
                <div className="">
                  <div className="opacity-75">{link.type}</div>
                </div>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none CoinDetails_link"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
          <div className="my-5 d-flex justify-content-between lh-lg">
            <div>
              <h1 className="fw-normal">{data.data.coin.name} Price Chart</h1>
              <div className="fw-semibold fs-5 d-flex justify-content-between">
                <div>Changes:</div>
                <div>
                  {parseFloat(history.data.change) > 0 ? (
                    <div className="text-success">+{history.data.change}%</div>
                  ) : (
                    <div className="text-danger">{history.data.change}%</div>
                  )}
                </div>
              </div>
              <div className="d-flex fw-semibold fs-5 justify-content-between">
                <div>Current {data.data.coin.name} Price:</div>
                <div>{millify(parseFloat(data.data.coin.price))} $</div>
              </div>
            </div>
            <div className="w-25 mt-5">
              <Form.Select
                aria-label="Default select example"
                value={timePeriod}
                onChange={handleTimePeriodChange}
              >
                {TIME_PERIOD.map((t,index) => (
                  <option key={index}>{t}</option>
                ))}
              </Form.Select>
            </div>
          </div>
          <Chart history={history.data.history} />

          {/* <h3 className="fw-normal my-5">Latest Crypto News</h3>
          <div className="my-3">
            <NewsList feeds={feeds.value} />
          </div> */}
        </div>
      )}
    </AsyncWrapper>
  );
};

export default CoinDetails;
